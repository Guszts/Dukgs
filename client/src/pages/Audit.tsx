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

const labelClass = "block text-[11px] font-display uppercase tracking-wider text-brand-brown font-black mb-2";
const inputClass = "w-full bg-white border-[3px] border-brand-brown rounded-2xl px-4 py-3 text-sm font-bold text-brand-brown outline-none focus:ring-4 focus:ring-brand-yellow/60";
const checkClass = "flex items-start gap-3 bg-white border-[3px] border-brand-brown rounded-2xl p-4 text-xs sm:text-sm font-bold text-brand-brown";

export default function Audit() {
  const [form, setForm] = useState<AuditForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = <K extends keyof AuditForm>(key: K, value: AuditForm[K]) => setForm((current) => ({ ...current, [key]: value }));

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
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bento-card max-w-xl p-8 sm:p-10 text-center rounded-[40px] border-[3px] border-brand-brown shadow-[8px_8px_0px_rgba(45,30,24,1)]">
          <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">REQUEST SAVED</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-brand-brown uppercase font-black">Free Audit Request Received</h1>
          <p className="mt-5 text-brand-brown/75 font-medium">Your request was saved. Qualified businesses can receive a private proposal and deposit page after review.</p>
          <p className="mt-5 rounded-2xl border-[3px] border-brand-brown bg-cream p-4 text-xs font-black text-brand-brown">{message}</p>
          <Link href="/" className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center mt-8 inline-flex">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grain-overlay" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl sm:text-3xl text-brand-brown font-black">Dilgs<span className="text-brand-orange">.</span></Link>
          <Link href="/" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Back</Link>
        </div>

        <div className="bento-card bg-white rounded-[40px] sm:rounded-[54px] border-[3px] border-brand-brown p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4 space-y-5">
              <div className="flex gap-2 items-center">
                <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-12" />
                <span className="w-2.5 h-8 bg-brand-orange rounded-full -rotate-12" />
                <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-6" />
                <span className="text-xs font-mono tracking-widest text-brand-brown/60 uppercase ml-2">FREE AUDIT</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-brand-brown uppercase leading-tight tracking-tight font-black">Request a DILGS Gastronomy Audit</h1>
              <p className="text-brand-brown/75 font-medium leading-relaxed">Submit your business details. The request is saved server-side and reviewed before a private payment page is shared.</p>
              <div className="bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-5 shadow-[6px_6px_0px_rgba(45,30,24,1)]">
                <p className="font-display text-sm uppercase tracking-wider text-brand-brown font-black">Qualification note</p>
                <p className="mt-2 text-sm text-brand-brown/75 font-semibold">The implementation is $10,000 before monthly care.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-8 bg-cream border-[3px] border-brand-brown p-5 sm:p-8 rounded-[32px] shadow-[6px_6px_0px_rgba(45,30,24,1)] space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className={labelClass}>Your Name</label><input className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} required placeholder="John Doe" /></div>
                <div><label className={labelClass}>Business Name</label><input className={inputClass} value={form.business_name} onChange={(e) => update("business_name", e.target.value)} required placeholder="Business name" /></div>
                <div><label className={labelClass}>Business Email</label><input className={inputClass} type="email" value={form.business_email} onChange={(e) => update("business_email", e.target.value)} required placeholder="contact@example.com" /></div>
                <div><label className={labelClass}>Website URL</label><input className={inputClass} value={form.website_url} onChange={(e) => update("website_url", e.target.value)} placeholder="https://example.com" /></div>
                <div><label className={labelClass}>Business Category</label><select className={inputClass} value={form.business_category} onChange={(e) => update("business_category", e.target.value)} required><option value="">Select category</option>{categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></div>
                <div><label className={labelClass}>Timeline</label><select className={inputClass} value={form.timeline} onChange={(e) => update("timeline", e.target.value)} required><option value="">Select timeline</option><option value="Immediately after approval">Immediately after approval</option><option value="Within 30 days">Within 30 days</option><option value="Within 60 days">Within 60 days</option><option value="Planning only">Planning only</option></select></div>
                <div><label className={labelClass}>City</label><input className={inputClass} value={form.city} onChange={(e) => update("city", e.target.value)} required placeholder="Miami" /></div>
                <div><label className={labelClass}>State</label><input className={inputClass} value={form.state} onChange={(e) => update("state", e.target.value)} required placeholder="FL" /></div>
              </div>

              <div><label className={labelClass}>Current Problem</label><textarea className={inputClass} value={form.current_problem} onChange={(e) => update("current_problem", e.target.value)} required placeholder="What is not working in your current digital presence?" rows={4} /></div>
              <div><label className={labelClass}>Main Goal</label><textarea className={inputClass} value={form.main_goal} onChange={(e) => update("main_goal", e.target.value)} required placeholder="What should the new system improve?" rows={3} /></div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className={checkClass}><input type="checkbox" checked={form.needs_reservations} onChange={(e) => update("needs_reservations", e.target.checked)} className="mt-0.5 accent-brand-orange" />Needs reservation flow</label>
                <label className={checkClass}><input type="checkbox" checked={form.needs_orders} onChange={(e) => update("needs_orders", e.target.checked)} className="mt-0.5 accent-brand-orange" />Needs order flow</label>
                <label className={checkClass}><input type="checkbox" checked={form.needs_catering_inquiries} onChange={(e) => update("needs_catering_inquiries", e.target.checked)} className="mt-0.5 accent-brand-orange" />Needs catering inquiries</label>
              </div>

              <label className={checkClass}><input type="checkbox" checked={form.budget_confirmed} onChange={(e) => update("budget_confirmed", e.target.checked)} required className="mt-0.5 accent-brand-orange" />I understand the implementation is $10,000 before monthly care.</label>

              {status === "error" && <div className="rounded-2xl border-[3px] border-brand-brown bg-white p-4 text-sm font-bold text-brand-brown">{message}</div>}

              <button type="submit" disabled={status === "loading"} className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center w-full disabled:opacity-60">
                {status === "loading" ? "Saving Audit Request" : "Submit Free Audit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
