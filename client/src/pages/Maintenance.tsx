import { useState } from "react";
import { Link } from "wouter";

const plans = [
  { key: "essential", name: "Essential Care", price: 500, features: ["Small content updates", "Basic technical monitoring", "Form and link checks", "Monthly support window"] },
  { key: "growth", name: "Growth Care", price: 750, features: ["Everything in Essential", "Conversion path review", "Menu and offer updates", "Monthly improvement notes"] },
  { key: "authority", name: "Authority Care", price: 1500, features: ["Everything in Growth", "Multi-location support", "Deeper reporting structure", "Priority update queue"] },
];

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
    <div className="min-h-screen bg-cream px-4 py-16 md:py-24">
      <div className="container">
        <Link href="/" className="bubble-btn bubble-btn--outline">Back to Home</Link>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="pill-label pill-label--purple">MONTHLY GROWTH CARE</span>
            <h1 className="mt-5 text-5xl md:text-7xl">Post-Launch Care for Premium Gastronomy Brands</h1>
            <p className="mt-5 text-lg">Maintenance plans keep the digital presence updated, monitored, and commercially clear after launch.</p>
          </div>
          <form onSubmit={startSubscription} className="bento-card p-6 md:p-8">
            <h2 className="text-3xl">Start Monthly Growth Care</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="field-block"><span>Business Name *</span><input value={businessName} onChange={(e) => setBusinessName(e.target.value)} required placeholder="Business name" /></label>
              <label className="field-block"><span>Business Email *</span><input type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} required placeholder="contact@example.com" /></label>
            </div>
            <div className="mt-6 grid gap-4">
              {plans.map((plan) => (
                <label key={plan.key} className="check-card">
                  <input type="radio" name="plan" checked={selectedPlan === plan.key} onChange={() => setSelectedPlan(plan.key)} />
                  <span><strong>{plan.name}</strong> — ${plan.price}/month</span>
                </label>
              ))}
            </div>
            {error && <div className="mt-5 rounded-[24px] border-3 border-brand-brown bg-white p-4 text-sm font-semibold">{error}</div>}
            <button type="submit" disabled={loading} className="bubble-btn bubble-btn--yellow mt-7 w-full py-4 text-lg disabled:opacity-60">
              {loading ? "Creating Checkout" : "Start Monthly Growth Care"}
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.key} className="bento-card p-7">
              <h2 className="text-3xl">{plan.name}</h2>
              <p className="mt-3 font-display text-5xl">${plan.price}/mo</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => <li key={feature} className="font-semibold">{feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
