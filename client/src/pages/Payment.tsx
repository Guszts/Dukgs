import { useState } from "react";
import { Link } from "wouter";

type PaymentStructure = "deposit_standard" | "deposit_alternative";

function getProposalId() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  return segments[1] || "standard";
}

export default function Payment() {
  const [paymentType, setPaymentType] = useState<PaymentStructure>("deposit_standard");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const proposalId = getProposalId();

  const startCheckout = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/create-deposit-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposal_id: proposalId, payment_type: paymentType, business_email: businessEmail, business_name: businessName }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Checkout could not be created.");
      if (data.url) window.location.href = data.url;
      else throw new Error("Checkout URL was not returned.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout could not be created.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream px-4 py-16 md:py-24">
      <div className="container max-w-4xl">
        <Link href="/" className="bubble-btn bubble-btn--outline">Back to Home</Link>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="pill-label pill-label--yellow">PRIVATE PAYMENT</span>
            <h1 className="mt-5 text-5xl md:text-7xl">Pay Project Deposit</h1>
            <p className="mt-5 text-lg">Qualified leads can pay the upfront implementation deposit through a secure checkout session.</p>
            <div className="mt-6 rounded-[28px] border-3 border-brand-brown bg-white p-6">
              <p className="font-bold">Proposal ID</p>
              <p className="mt-1 break-all font-mono text-sm">{proposalId}</p>
            </div>
          </div>

          <form onSubmit={startCheckout} className="bento-card p-6 md:p-8">
            <h2 className="text-3xl">Payment Structure</h2>
            <div className="mt-5 grid gap-4">
              <label className="check-card"><input type="radio" name="payment_type" checked={paymentType === "deposit_standard"} onChange={() => setPaymentType("deposit_standard")} /><span><strong>Standard:</strong> $5,000 upfront deposit, $5,000 before launch</span></label>
              <label className="check-card"><input type="radio" name="payment_type" checked={paymentType === "deposit_alternative"} onChange={() => setPaymentType("deposit_alternative")} /><span><strong>Alternative:</strong> $4,000 upfront, $3,000 after design approval, $3,000 before launch</span></label>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label className="field-block"><span>Business Name *</span><input value={businessName} onChange={(e) => setBusinessName(e.target.value)} required placeholder="Business name" /></label>
              <label className="field-block"><span>Business Email *</span><input type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} required placeholder="contact@example.com" /></label>
            </div>
            <div className="mt-6 rounded-[28px] border-3 border-brand-brown bg-brand-yellow p-6">
              <p className="font-bold">First payment due now</p>
              <p className="mt-2 font-display text-5xl">{paymentType === "deposit_standard" ? "$5,000" : "$4,000"}</p>
            </div>
            {error && <div className="mt-5 rounded-[24px] border-3 border-brand-brown bg-white p-4 text-sm font-semibold">{error}</div>}
            <button type="submit" disabled={loading} className="bubble-btn bubble-btn--yellow mt-7 w-full py-4 text-lg disabled:opacity-60">
              {loading ? "Creating Checkout" : "Pay Project Deposit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
