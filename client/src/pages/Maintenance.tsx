import { useState } from "react";
import { Link } from "wouter";

const plans = [
  { key: "essential", name: "Essential Care", price: 500, features: ["Small content updates", "Basic technical monitoring", "Form and link checks", "Monthly support window"] },
  { key: "growth", name: "Growth Care", price: 750, features: ["Everything in Essential", "Conversion path review", "Menu and offer updates", "Monthly improvement notes"] },
  { key: "authority", name: "Authority Care", price: 1500, features: ["Everything in Growth", "Multi-location support", "Deeper reporting structure", "Priority update queue"] },
];

const labelClass = "block text-[11px] font-display uppercase tracking-wider text-brand-brown font-black mb-2";
const inputClass = "w-full bg-white border-[3px] border-brand-brown rounded-2xl px-4 py-3 text-sm font-bold text-brand-brown outline-none focus:ring-4 focus:ring-brand-yellow/60";
const optionClass = "flex items-start gap-3 bg-white border-[3px] border-brand-brown rounded-2xl p-4 text-xs sm:text-sm font-bold text-brand-brown cursor-pointer";

export default function Maintenance() {
  const [selectedPlan, setSelectedPlan] = useState("growth");
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startSubscription = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/create-maintenance-subscription-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selected_plan: selectedPlan, business_name: businessName, business_email: businessEmail }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Subscription checkout could not be created.");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Subscription checkout could not be created.");
      setLoading(false);
    }
  };

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
            <div className="lg:col-span-5 space-y-5">
              <div className="flex gap-2 items-center">
                <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-12" />
                <span className="w-2.5 h-8 bg-brand-orange rounded-full -rotate-12" />
                <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-6" />
                <span className="text-xs font-mono tracking-widest text-brand-brown/60 uppercase ml-2">MONTHLY CARE</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-brand-brown uppercase leading-tight tracking-tight font-black">Post-Launch Care for Premium Gastronomy Brands</h1>
              <p className="text-brand-brown/75 font-medium leading-relaxed">Monthly Growth Care keeps the digital presence updated, monitored, and commercially clean after launch.</p>
            </div>

            <form onSubmit={startSubscription} className="lg:col-span-7 bg-cream border-[3px] border-brand-brown p-5 sm:p-8 rounded-[32px] shadow-[6px_6px_0px_rgba(45,30,24,1)] space-y-5">
              <div>
                <p className="text-[11px] font-mono tracking-widest text-brand-orange font-black uppercase">Start Care Plan</p>
                <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-brown font-black mt-2">Choose monthly care</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className={labelClass}>Business Name</label><input className={inputClass} value={businessName} onChange={(e) => setBusinessName(e.target.value)} required placeholder="Business name" /></div>
                <div><label className={labelClass}>Business Email</label><input className={inputClass} type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} required placeholder="contact@example.com" /></div>
              </div>

              <div className="grid gap-3">
                {plans.map((plan) => (
                  <label key={plan.key} className={optionClass}>
                    <input type="radio" name="plan" checked={selectedPlan === plan.key} onChange={() => setSelectedPlan(plan.key)} className="mt-0.5 accent-brand-orange" />
                    <span><strong>{plan.name}</strong> — ${plan.price}/month</span>
                  </label>
                ))}
              </div>

              {error && <div className="rounded-2xl border-[3px] border-brand-brown bg-white p-4 text-sm font-bold text-brand-brown">{error}</div>}

              <button type="submit" disabled={loading} className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center w-full disabled:opacity-60">
                {loading ? "Creating Checkout" : "Start Monthly Growth Care"}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {plans.map((plan) => (
            <div key={plan.key} className="bento-card bg-white rounded-[32px] border-[3px] border-brand-brown p-6 shadow-[6px_6px_0px_rgba(45,30,24,1)]">
              <h2 className="font-display text-2xl uppercase text-brand-brown font-black">{plan.name}</h2>
              <p className="font-display text-5xl text-brand-brown font-black mt-4">${plan.price}</p>
              <p className="text-xs font-display uppercase tracking-wider font-black text-brand-orange">per month</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => <li key={feature} className="text-sm text-brand-brown/75 font-bold">{feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
