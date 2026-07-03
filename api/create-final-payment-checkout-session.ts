import { createCheckout } from "./_lib/checkout";
import { readJson, requirePost, sendJson } from "./_lib/shared";

export default async function handler(req: any, res: any) {
  if (!requirePost(req, res)) return;
  try {
    const input = await readJson(req);
    if (!input.business_email || !input.business_name) return sendJson(res, 400, { error: "Business name and business email are required" });
    return createCheckout(req, res, {
      project_id: input.project_id,
      proposal_id: input.proposal_id,
      lead_id: input.lead_id,
      client_id: input.client_id,
      payment_type: "final_standard",
      business_name: input.business_name,
      business_email: input.business_email,
    });
  } catch (error) {
    return sendJson(res, 500, { error: error instanceof Error ? error.message : "Checkout creation failed" });
  }
}
