import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "wouter";

export default function Audit() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bento-card p-12 max-w-md text-center">
          <h1 className="text-4xl font-display font-bold mb-4 text-brand-brown">Thank You!</h1>
          <p className="text-brand-brown mb-8">We received your audit request. Our team will review your business and send you a detailed audit report within 48 hours.</p>
          <Link href="/">
            <button className="bubble-btn bubble-btn--yellow w-full">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-display font-bold mb-4 text-brand-brown">Free Audit</h1>
        <p className="text-xl text-brand-brown mb-12">Tell us about your gastronomy business and we'll provide a comprehensive audit.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bento-card p-8">
            <label className="block text-brand-brown font-bold mb-2">Your Name *</label>
            <Input placeholder="John Doe" required className="border-brand-brown" />
          </div>

          <div className="bento-card p-8">
            <label className="block text-brand-brown font-bold mb-2">Business Name *</label>
            <Input placeholder="Restaurant Name" required className="border-brand-brown" />
          </div>

          <div className="bento-card p-8">
            <label className="block text-brand-brown font-bold mb-2">Business Email *</label>
            <Input type="email" placeholder="contact@restaurant.com" required className="border-brand-brown" />
          </div>

          <div className="bento-card p-8">
            <label className="block text-brand-brown font-bold mb-2">Current Website URL</label>
            <Input placeholder="https://yourwebsite.com" className="border-brand-brown" />
          </div>

          <div className="bento-card p-8">
            <label className="block text-brand-brown font-bold mb-2">What's Your Biggest Challenge? *</label>
            <Textarea placeholder="Describe your main business challenge..." required className="border-brand-brown" />
          </div>

          <div className="bento-card p-8">
            <label className="block text-brand-brown font-bold mb-2">City & State</label>
            <Input placeholder="New York, NY" className="border-brand-brown" />
          </div>

          <button type="submit" className="bubble-btn bubble-btn--yellow w-full py-4 text-lg">
            Request Audit
          </button>
        </form>
      </div>
    </div>
  );
}
