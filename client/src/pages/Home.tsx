import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-brand-brown leading-tight">
                Premium Digital Presence for Gastronomy
              </h1>
              <p className="text-lg text-brand-brown mb-8 leading-relaxed">
                Transform your restaurant, café, or gastronomy business with a complete digital system designed for premium establishments.
              </p>
              <div className="flex gap-4">
                <Link href="/audit">
                  <button className="bubble-btn bubble-btn--yellow">Get Free Audit</button>
                </Link>
                <button className="bubble-btn bubble-btn--outline">View Portfolio</button>
              </div>
            </div>
            <div className="bento-card p-12 bg-brand-yellow">
              <div className="text-center">
                <p className="text-brand-brown font-display text-2xl font-bold">DILGS</p>
                <p className="text-brand-brown mt-2">Gastronomy Digital System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-brand-brown text-center">
            The $10,000 Implementation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bento-card p-8">
              <span className="pill-label pill-label--yellow">Standard</span>
              <h3 className="text-2xl font-bold mt-4 mb-4 text-brand-brown">$5,000 + $5,000</h3>
              <p className="text-brand-brown mb-6">Deposit to start, final payment before launch</p>
              <Link href="/pay/standard">
                <button className="bubble-btn bubble-btn--brown w-full">Pay Deposit</button>
              </Link>
            </div>
            <div className="bento-card p-8 border-4 border-brand-yellow">
              <span className="pill-label pill-label--orange">Alternative</span>
              <h3 className="text-2xl font-bold mt-4 mb-4 text-brand-brown">$4k + $3k + $3k</h3>
              <p className="text-brand-brown mb-6">Flexible 3-payment structure</p>
              <button className="bubble-btn bubble-btn--brown w-full">Choose Plan</button>
            </div>
            <div className="bento-card p-8">
              <span className="pill-label pill-label--green">Maintenance</span>
              <h3 className="text-2xl font-bold mt-4 mb-4 text-brand-brown">$500-$1,500/mo</h3>
              <p className="text-brand-brown mb-6">Monthly growth care plans included</p>
              <Link href="/maintenance">
                <button className="bubble-btn bubble-btn--brown w-full">View Plans</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Ribbon */}
      <section className="dark-ribbon">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-cream">Start with a free audit and see exactly what your gastronomy business needs.</p>
          <Link href="/audit">
            <button className="bubble-btn bubble-btn--yellow">Request Free Audit</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
