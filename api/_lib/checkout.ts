import { getBaseUrl, getStripe, getSupabaseAdmin, sendJson } from "./shared";

type CheckoutInput = {
  proposal_id?: string;
  project_id?: string;
  client_id?: string;
  lead_id?: string;
  payment_type: string;
  selected_plan?: string;
  business_name: string;
  business_email: string;
};

const paymentCatalog: Record<string, { name: string; amount: number; mode: "payment" | "subscription" }> = {
  deposit_standard: { name: "DILGS Project Deposit", amount: 500000, mode: "payment" },
  final_standard: { name: "DILGS Final Balance", amount: 500000, mode: "payment" },
  deposit_alternative: { name: "DILGS Alternative First Payment", amount: 400000, mode: "payment" },
  milestone_alternative: { name: "DILGS Alternative Second Payment", amount: 300000, mode: "payment" },
  final_alternative: { name: "DILGS Alternative Final Payment", amount: 300000, mode: "payment" },
  essential_care: { name: "Essential Care", amount: 50000, mode: "subscription" },
  growth_care: { name: "Growth Care", amount: 75000, mode: "subscription" },
  authority_care: { name: "Authority Care", amount: 150000, mode: "subscription" },
};

export async function createCheckout(req: any, res: any, input: CheckoutInput) {
  const catalogKey = input.payment_type === "maintenance_subscription" ? `${input.selected_plan || ""}_care`.toLowerCase().replace(" ", "_") : input.payment_type;
  const item = paymentCatalog[catalogKey];
  if (!item) return sendJson(res, 400, { error: "Unsupported payment type" });

  const stripe = getStripe();
  const supabase = getSupabaseAdmin();
  const baseUrl = getBaseUrl(req);
  const amount = item.amount / 100;

  const metadata = {
    lead_id: input.lead_id || "",
    proposal_id: input.proposal_id || "",
    project_id: input.project_id || "",
    client_id: input.client_id || "",
    payment_type: input.payment_type,
    selected_plan: input.selected_plan || "",
    business_name: input.business_name,
    business_email: input.business_email,
  };

  const session = await stripe.checkout.sessions.create({
    mode: item.mode,
    payment_method_types: ["card"],
    customer_email: input.business_email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.amount,
          ...(item.mode === "subscription" ? { recurring: { interval: "month" as const } } : {}),
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cancelled`,
    metadata,
  });

  const { error } = await supabase.from("payments").insert({
    lead_id: input.lead_id || null,
    client_id: input.client_id || null,
    project_id: input.project_id || null,
    proposal_id: input.proposal_id && input.proposal_id !== "standard" ? input.proposal_id : null,
    stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
    stripe_session_id: session.id,
    amount,
    currency: "usd",
    payment_type: input.payment_type,
    payment_status: "pending",
  });

  if (error) console.error("Payment insert error", error);
  return sendJson(res, 200, { session_id: session.id, url: session.url });
}
