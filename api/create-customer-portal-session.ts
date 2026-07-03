import { getBaseUrl, getStripe, readJson, requirePost, sendJson } from "./_lib/shared";

export default async function handler(req: any, res: any) {
  if (!requirePost(req, res)) return;

  try {
    const input = await readJson(req);
    if (!input.stripe_customer_id) return sendJson(res, 400, { error: "stripe_customer_id is required" });

    const stripe = getStripe();
    const portal = await stripe.billingPortal.sessions.create({
      customer: input.stripe_customer_id,
      return_url: `${getBaseUrl(req)}/maintenance`,
    });

    return sendJson(res, 200, { url: portal.url });
  } catch (error) {
    console.error("create-customer-portal-session error", error);
    return sendJson(res, 500, { error: error instanceof Error ? error.message : "Customer portal failed" });
  }
}
