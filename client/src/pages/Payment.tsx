import { useState } from "react";
import { Link } from "wouter";

type PaymentStructure = "deposit_standard" | "deposit_alternative";

function getProposalId() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  return segments[1] || "standard";
}

const labelClass = "block text-[11px] font-display uppercase tracking-wider text-brand-brown font-black mb-2";
const inputClass = "w-full bg-white border-[3px] border-brand-brown rounded-2xl px-4 py-3 text-sm font-bold text-brand-brown outline-none focus:ring-4 focus:ring-brand-yellow/60";
const optionClass = "flex items-start gap-3 bg-white border-[3px] border-brand-brown rounded-2xl p-4 text-xs sm:text-sm font-bold text-brand-brown cursor-pointer";

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
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grain-overlay" />
      <div className="max-w-6xl mx-auto">
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
                <span className="text-xs font-mono tracking-widest text-brand-brown/60 uppercase ml-2">PRIVATE PAYMENT</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-brand-brown uppercase leading-tight tracking-tight font-black">Pay Project Deposit</h1>
              <p className="text-brand-brown/75 font-medium leading-relaxed">Qualified leads can pay the first implementation payment through a secure Stripe checkout session.</p>
              <div className="bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-5 shadow-[6px_6px_0px_rgba(45,30,24,1)]">
                <p className="font-display text-sm uppercase tracking-wider text-brand-brown font-black">Proposal ID</p>
                <p className="mt-2 break-all font-mono text-xs text-brand-brown/75">{proposalId}</p>
              </div>
            </div>

            <form onSubmit={startCheckout} className="lg:col-span-7 bg-cream border-[3px] border-brand-brown p-5 sm:p-8 rounded-[32px] shadow-[6px_6px_0px_rgba(45,30,24,1)] space-y-5">
              <div>
                <p className="text-[11px] font-mono tracking-widest text-brand-orange font-black uppercase">Payment Structure</p>
                <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-brown font-black mt-2">Choose the first payment</h2>
              </div>

              <label className={optionClass}>
                <input type="radio" name="payment_type" checked={paymentType === "deposit_standard"} onChange={() => setPaymentType("deposit_standard")} className="mt-0.5 accent-brand-orange" />
                <span><strong>Standard:</strong> $5,000 upfront deposit, $5,000 before launch.</span>
              </label>
              <label className={optionClass}>
                <input type="radio" name="payment_type" checked={paymentType === "deposit_alternative"} onChange={() => setPaymentType("deposit_alternative")} className="mt-0.5 accent-brand-orange" />
                <span><strong>Alternative:</strong> $4,000 upfront, $3,000 after design approval, $3,000 before launch.</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className={labelClass}>Business Name</label><input className={inputClass} value={businessName} onChange={(e) => setBusinessName(e.target.value)} required placeholder="Business name" /></div>
                <div><label className={labelClass}>Business Email</label><input className={inputClass} type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} required placeholder="contact@example.com" /></div>
              </div>

              <div className="bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-5">
                <p className="text-xs font-display uppercase tracking-wider font-black">First payment due now</p>
                <p className="font-display text-5xl text-brand-brown font-black mt-2">{paymentType === "deposit_standard" ? "$5,000" : "$4,000"}</p>
              </div>

              {error && <div className="rounded-2xl border-[3px] border-brand-brown bg-white p-4 text-sm font-bold text-brand-brown">{error}</div>}

              <button type="submit" disabled={loading} className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center w-full disabled:opacity-60">
                {loading ? "Creating Checkout" : "Pay Project Deposit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
