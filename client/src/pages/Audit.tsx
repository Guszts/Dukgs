import { useState } from "react";
import { Link } from "wouter";

type AuditForm = {
  name: string;
  business_name: string;
  business_email: string;
  website_url: string;
  business_category: string;
  city: string;
  state: string;
  current_problem: string;
  main_goal: string;
  needs_reservations: boolean;
  needs_orders: boolean;
  needs_catering_inquiries: boolean;
  timeline: string;
  budget_confirmed: boolean;
  source: string;
};

const initialForm: AuditForm = {
  name: "",
  business_name: "",
  business_email: "",
  website_url: "",
  business_category: "",
  city: "",
  state: "",
  current_problem: "",
  main_goal: "",
  needs_reservations: false,
  needs_orders: false,
  needs_catering_inquiries: false,
  timeline: "",
  budget_confirmed: false,
  source: "DILGS main website",
};

const categories = ["Restaurant", "Fine dining", "Bakery", "Patisserie", "Café", "Coffee shop", "Sushi", "Omakase", "Pizzeria", "Burger restaurant", "Catering", "Dessert brand", "Food truck", "Restaurant group"];

export default function Audit() {
  const [form, setForm] = useState<AuditForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = <K extends keyof AuditForm>(key: K, value: AuditForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/create-audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Audit request could not be saved.");
      setStatus("success");
      setMessage(`Lead ID: ${data.lead_id}`);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Audit request could not be saved.");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bento-card max-w-xl p-10 text-center">
          <span className="pill-label pill-label--green">REQUEST SAVED</span>
          <h1 className="mt-5 text-5xl">Free Audit Request Received</h1>
          <p className="mt-5">Your request was saved. Qualified businesses can receive a private proposal and project deposit page after review.</p>
          <p className="mt-4 rounded-[24px] border-2 border-brand-brown bg-cream-dark p-4 text-sm font-semibold">{message}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="bubble-btn bubble-btn--yellow text-center">Back to Home</Link>
            <Link href="/maintenance" className="bubble-btn bubble-btn--outline text-center">View Care Plans</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-16 px-4 md:py-24">
      <div className="container max-w-4xl">
        <Link href="/" className="bubble-btn bubble-btn--outline">Back to Home</Link>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="pill-label pill-label--yellow">FREE AUDIT</span>
            <h1 className="mt-5 text-5xl md:text-7xl">Request a DILGS Gastronomy Audit</h1>
            <p className="mt-5 text-lg">Submit your business details. The form saves the lead and audit request through the backend.</p>
            <div className="mt-6 rounded-[28px] border-3 border-brand-brown bg-white p-6">
              <p className="font-bold">Qualification note</p>
              <p className="mt-2 text-sm">The $10,000 implementation is intended for premium gastronomy businesses with serious brand, website, reservation, order, local presence, and tracking needs.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bento-card p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="field-block"><span>Your Name *</span><input value={form.name} onChange={(e) => update("name", e.target.value)} required placeholder="John Doe" /></label>
              <label className="field-block"><span>Business Name *</span><input value={form.business_name} onChange={(e) => update("business_name", e.target.value)} required placeholder="Business name" /></label>
              <label className="field-block"><span>Business Email *</span><input type="email" value={form.business_email} onChange={(e) => update("business_email", e.target.value)} required placeholder="contact@example.com" /></label>
              <label className="field-block"><span>Website URL</span><input value={form.website_url} onChange={(e) => update("website_url", e.target.value)} placeholder="https://example.com" /></label>
              <label className="field-block"><span>Business Category *</span><select value={form.business_category} onChange={(e) => update("business_category", e.target.value)} required><option value="">Select category</option>{categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label>
              <label className="field-block"><span>Timeline *</span><select value={form.timeline} onChange={(e) => update("timeline", e.target.value)} required><option value="">Select timeline</option><option value="Immediately after approval">Immediately after approval</option><option value="Within 30 days">Within 30 days</option><option value="Within 60 days">Within 60 days</option><option value="Planning only">Planning only</option></select></label>
              <label className="field-block"><span>City *</span><input value={form.city} onChange={(e) => update("city", e.target.value)} required placeholder="Miami" /></label>
              <label className="field-block"><span>State *</span><input value={form.state} onChange={(e) => update("state", e.target.value)} required placeholder="FL" /></label>
            </div>

            <label className="field-block mt-5"><span>Current Problem *</span><textarea value={form.current_problem} onChange={(e) => update("current_problem", e.target.value)} required placeholder="What is not working in your current digital presence?" rows={5} /></label>
            <label className="field-block mt-5"><span>Main Goal *</span><textarea value={form.main_goal} onChange={(e) => update("main_goal", e.target.value)} required placeholder="What should the new system improve?" rows={4} /></label>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <label className="check-card"><input type="checkbox" checked={form.needs_reservations} onChange={(e) => update("needs_reservations", e.target.checked)} /><span>Needs reservation flow</span></label>
              <label className="check-card"><input type="checkbox" checked={form.needs_orders} onChange={(e) => update("needs_orders", e.target.checked)} /><span>Needs order flow</span></label>
              <label className="check-card"><input type="checkbox" checked={form.needs_catering_inquiries} onChange={(e) => update("needs_catering_inquiries", e.target.checked)} /><span>Needs catering inquiries</span></label>
            </div>

            <label className="check-card mt-5"><input type="checkbox" checked={form.budget_confirmed} onChange={(e) => update("budget_confirmed", e.target.checked)} required /><span>I understand the implementation is $10,000 before monthly care.</span></label>

            {status === "error" && <div className="mt-5 rounded-[24px] border-3 border-brand-brown bg-white p-4 text-sm font-semibold text-brand-brown">{message}</div>}

            <button type="submit" disabled={status === "loading"} className="bubble-btn bubble-btn--yellow mt-7 w-full py-4 text-lg disabled:opacity-60">
              {status === "loading" ? "Saving Audit Request" : "Submit Free Audit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
