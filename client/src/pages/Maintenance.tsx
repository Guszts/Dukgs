import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Maintenance() {
  const plans = [
    { name: "Growth", price: 500, features: ["Weekly updates", "Performance monitoring", "Basic support"] },
    { name: "Premium", price: 750, features: ["Bi-weekly updates", "Advanced analytics", "Priority support", "Monthly strategy calls"] },
    { name: "Enterprise", price: 1500, features: ["Daily updates", "Full analytics suite", "24/7 support", "Weekly strategy calls", "Custom integrations"] },
  ];

  return (
    <div className="min-h-screen bg-cream py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-display font-bold mb-4 text-brand-brown text-center">Maintenance Plans</h1>
        <p className="text-xl text-brand-brown mb-12 text-center">Keep your digital presence growing with our monthly maintenance plans.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bento-card p-8">
              <h2 className="text-2xl font-bold text-brand-brown mb-2">{plan.name}</h2>
              <p className="text-4xl font-bold text-brand-yellow mb-6">${plan.price}/mo</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-brand-brown flex items-start">
                    <span className="text-brand-yellow mr-3">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="bubble-btn bubble-btn--brown w-full">Subscribe Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
