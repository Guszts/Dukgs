import { getSupabaseAdmin, readJson, requirePost, sendJson } from "./_lib/shared";

export default async function handler(req: any, res: any) {
  if (!requirePost(req, res)) return;
  try {
    const input = await readJson(req);
    if (!input.client_id) return sendJson(res, 400, { error: "client_id is required" });
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from("onboarding_submissions").insert({
      client_id: input.client_id,
      project_id: input.project_id || null,
      brand_assets_url: input.brand_assets_url || null,
      logo_url: input.logo_url || null,
      menu_file_url: input.menu_file_url || null,
      photo_folder_url: input.photo_folder_url || null,
      booking_tool_url: input.booking_tool_url || null,
      delivery_links: input.delivery_links || [],
      social_links: input.social_links || [],
      google_business_profile_url: input.google_business_profile_url || null,
      business_hours: input.business_hours || {},
      locations: input.locations || [],
      main_offers: input.main_offers || null,
      brand_notes: input.brand_notes || null,
      competitors: input.competitors || [],
      approval_contact: input.approval_contact || null,
      submission_status: "submitted",
    }).select("id").single();
    if (error) throw error;
    return sendJson(res, 200, { success: true, onboarding_submission_id: data.id });
  } catch (error) {
    return sendJson(res, 500, { error: error instanceof Error ? error.message : "Onboarding submission failed" });
  }
}
