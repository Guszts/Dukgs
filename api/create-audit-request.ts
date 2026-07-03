import { getSupabaseAdmin, readJson, requirePost, sendJson } from "./_lib/shared";

export default async function handler(req: any, res: any) {
  if (!requirePost(req, res)) return;

  try {
    const input = await readJson(req);
    const required = ["name", "business_name", "business_email", "business_category", "city", "state", "current_problem", "main_goal", "timeline"];
    for (const field of required) {
      if (!input[field]) return sendJson(res, 400, { error: `${field} is required` });
    }
    if (!input.budget_confirmed) return sendJson(res, 400, { error: "Budget confirmation is required" });

    const supabase = getSupabaseAdmin();
    const leadPayload = {
      name: input.name,
      business_name: input.business_name,
      business_email: input.business_email,
      website_url: input.website_url || null,
      business_category: input.business_category,
      city: input.city,
      state: input.state,
      current_problem: input.current_problem,
      main_goal: input.main_goal,
      needs_reservations: Boolean(input.needs_reservations),
      needs_orders: Boolean(input.needs_orders),
      needs_catering_inquiries: Boolean(input.needs_catering_inquiries),
      timeline: input.timeline,
      budget_confirmed: Boolean(input.budget_confirmed),
      source: input.source || "DILGS main website",
      status: "new",
    };

    const { data: lead, error: leadError } = await supabase.from("leads").insert(leadPayload).select("id").single();
    if (leadError) throw leadError;

    const { data: audit, error: auditError } = await supabase
      .from("audit_requests")
      .insert({ lead_id: lead.id, website_url: input.website_url || null, audit_notes: input.current_problem, status: "pending" })
      .select("id")
      .single();
    if (auditError) throw auditError;

    return sendJson(res, 200, { success: true, lead_id: lead.id, audit_request_id: audit.id });
  } catch (error) {
    console.error("create-audit-request error", error);
    return sendJson(res, 500, { error: error instanceof Error ? error.message : "Audit request failed" });
  }
}
