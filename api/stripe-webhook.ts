import { getStripe, getSupabaseAdmin, readRawBody, sendJson } from "./_lib/shared";

export const config = { api: { bodyParser: false } };

async function upsertPayment(supabase: any, session: any, status: string) {
  const metadata = session.metadata || {};
  const payment = {
    lead_id: metadata.lead_id || null,
    client_id: metadata.client_id || null,
    project_id: metadata.project_id || null,
    proposal_id: metadata.proposal_id && metadata.proposal_id !== "standard" ? metadata.proposal_id : null,
    stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
    stripe_session_id: session.id,
    stripe_payment_intent_id: typeof session.payment_intent === "string" ? session.payment_intent : null,
    stripe_subscription_id: typeof session.subscription === "string" ? session.subscription : null,
    amount: session.amount_total ? session.amount_total / 100 : null,
    currency: session.currency || "usd",
    payment_type: metadata.payment_type || "custom_invoice",
    payment_status: status,
    raw_event: session,
  };

  const existing = await supabase.from("payments").select("id").eq("stripe_session_id", session.id).maybeSingle();
  if (existing.data?.id) return supabase.from("payments").update(payment).eq("id", existing.data.id);
  return supabase.from("payments").insert(payment);
}

async function handleCompleted(supabase: any, session: any) {
  const metadata = session.metadata || {};
  await upsertPayment(supabase, session, "paid");

  if (metadata.lead_id) await supabase.from("leads").update({ status: metadata.payment_type?.startsWith("deposit") ? "deposit_paid" : "proposal_sent" }).eq("id", metadata.lead_id);
  if (metadata.proposal_id && metadata.proposal_id !== "standard") await supabase.from("proposals").update({ proposal_status: metadata.payment_type?.startsWith("deposit") ? "accepted" : "deposit_pending" }).eq("id", metadata.proposal_id);

  let clientId = metadata.client_id || null;
  if (!clientId && metadata.business_email) {
    const existingClient = await supabase.from("clients").select("id").eq("business_email", metadata.business_email).maybeSingle();
    if (existingClient.data?.id) clientId = existingClient.data.id;
    else {
      const inserted = await supabase.from("clients").insert({
        lead_id: metadata.lead_id || null,
        stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
        name: metadata.business_name || metadata.business_email,
        business_name: metadata.business_name || null,
        business_email: metadata.business_email,
        status: metadata.payment_type?.startsWith("deposit") ? "onboarding_pending" : "maintenance_active",
      }).select("id").single();
      clientId = inserted.data?.id || null;
    }
  }

  if (clientId && metadata.payment_type?.startsWith("deposit")) {
    const project = await supabase.from("projects").select("id").eq("client_id", clientId).eq("proposal_id", metadata.proposal_id || null).maybeSingle();
    if (!project.data?.id) {
      await supabase.from("projects").insert({
        client_id: clientId,
        proposal_id: metadata.proposal_id && metadata.proposal_id !== "standard" ? metadata.proposal_id : null,
        project_name: "DILGS Gastronomy Digital Presence System",
        package_name: "Gastronomy Digital Presence System",
        total_price: 10000,
        deposit_paid: true,
        final_paid: false,
        project_status: "waiting_on_onboarding",
      });
    }
  }

  if (clientId && metadata.payment_type === "maintenance_subscription") {
    await supabase.from("maintenance_subscriptions").insert({
      client_id: clientId,
      project_id: metadata.project_id || null,
      stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
      stripe_subscription_id: typeof session.subscription === "string" ? session.subscription : null,
      plan_name: metadata.selected_plan || null,
      monthly_price: session.amount_total ? session.amount_total / 100 : null,
      subscription_status: "active",
    });
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

  const stripe = getStripe();
  const supabase = getSupabaseAdmin();
  const signature = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!endpointSecret) return sendJson(res, 400, { error: "Webhook is not configured" });

  try {
    const rawBody = await readRawBody(req);
    const event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);

    const existing = await supabase.from("webhook_events").select("id, processed").eq("event_id", event.id).maybeSingle();
    if (existing.data?.processed) return sendJson(res, 200, { received: true, duplicate: true });

    await supabase.from("webhook_events").insert({ provider: "stripe", event_type: event.type, event_id: event.id, processed: false, payload: event });

    if (event.type === "checkout.session.completed") await handleCompleted(supabase, event.data.object);
    if (event.type === "checkout.session.expired") await upsertPayment(supabase, event.data.object, "expired");
    if (event.type === "payment_intent.payment_failed") await supabase.from("payments").update({ payment_status: "failed", raw_event: event }).eq("stripe_payment_intent_id", event.data.object.id);
    if (event.type === "payment_intent.succeeded") await supabase.from("payments").update({ payment_status: "paid", raw_event: event }).eq("stripe_payment_intent_id", event.data.object.id);
    if (event.type === "invoice.paid" || event.type === "invoice.payment_failed") await supabase.from("payments").insert({ stripe_invoice_id: event.data.object.id, payment_status: event.type === "invoice.paid" ? "paid" : "failed", payment_type: "maintenance_subscription", raw_event: event });
    if (event.type.startsWith("customer.subscription.")) await supabase.from("maintenance_subscriptions").update({ subscription_status: event.data.object.status, cancel_at_period_end: event.data.object.cancel_at_period_end }).eq("stripe_subscription_id", event.data.object.id);

    await supabase.from("webhook_events").update({ processed: true }).eq("event_id", event.id);
    return sendJson(res, 200, { received: true });
  } catch (error) {
    console.error("stripe-webhook error", error);
    return sendJson(res, 400, { error: error instanceof Error ? error.message : "Webhook failed" });
  }
}
