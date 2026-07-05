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
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [confirmScope, setConfirmScope] = useState(false);
  const [confirmMaintenance, setConfirmMaintenance] = useState(false);
  const [confirmStart, setConfirmStart] = useState(false);
  const [confirmNoGuarantees, setConfirmNoGuarantees] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const proposalId = getProposalId();

  const startCheckout = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!acceptedTerms || !confirmScope || !confirmMaintenance || !confirmStart || !confirmNoGuarantees) {
      setError("Please check all confirmation boxes before proceeding.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/create-deposit-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposal_id: proposalId, payment_type: paymentType, business_email: businessEmail, business_name: businessName, legal_accepted: acceptedTerms }),
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
              <h1 className="font-display text-4xl sm:text-5xl text-brand-brown uppercase leading-tight tracking-tight font-black">Gastronomy Implementation</h1>
              <p className="text-brand-brown/75 font-medium leading-relaxed">Secure payment for the US$10,000 fixed-scope digital presence system. Work starts after payment review and onboarding completion.</p>
              
              <div className="bg-white rounded-[28px] border-[3px] border-brand-brown p-5 space-y-3">
                <p className="font-display text-sm uppercase tracking-wider text-brand-brown font-black">What's Included</p>
                <ul className="text-sm text-brand-brown/75 font-semibold space-y-1">
                  <li>• Premium Website System</li>
                  <li>• Menu & Product Presentation</li>
                  <li>• Reservation & Order Flow</li>
                  <li>• Local Presence Foundation</li>
                  <li>• 30-Day Post-Launch Care</li>
                  <li><Link href="/scope" className="text-brand-orange underline">View full fixed scope</Link></li>
                </ul>
              </div>

              <div className="bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-5 shadow-[6px_6px_0px_rgba(45,30,24,1)]">
                <p className="font-display text-sm uppercase tracking-wider text-brand-brown font-black">Next Steps After Payment</p>
                <ol className="mt-2 text-sm text-brand-brown/75 font-semibold space-y-1">
                  <li>1. Payment review & confirmation</li>
                  <li>2. <Link href="/onboarding/new" className="underline">Complete Onboarding Materials</Link></li>
                  <li>3. Scope confirmation</li>
                  <li>4. Implementation start</li>
                </ol>
              </div>

              <div className="text-xs text-brand-brown/60 font-bold space-x-4">
                <Link href="/terms" className="underline">Terms</Link>
                <Link href="/refunds" className="underline">Refund Policy</Link>
                <Link href="/onboarding/new" className="underline">Onboarding</Link>
              </div>
            </div>

            <form onSubmit={startCheckout} className="lg:col-span-7 bg-cream border-[3px] border-brand-brown p-5 sm:p-8 rounded-[32px] shadow-[6px_6px_0px_rgba(45,30,24,1)] space-y-5">
              <div>
                <p className="text-[11px] font-mono tracking-widest text-brand-orange font-black uppercase">Payment Structure</p>
                <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-brown font-black mt-2">Choose your payment path</h2>
              </div>

              <label className={optionClass}><input type="radio" name="payment_type" checked={paymentType === "deposit_standard"} onChange={() => setPaymentType("deposit_standard")} className="mt-0.5 accent-brand-orange" /><span><strong>Standard:</strong> $5,000 upfront deposit, $5,000 before launch.</span></label>
              <label className={optionClass}><input type="radio" name="payment_type" checked={paymentType === "deposit_alternative"} onChange={() => setPaymentType("deposit_alternative")} className="mt-0.5 accent-brand-orange" /><span><strong>Alternative:</strong> $4,000 upfront, $3,000 after design approval, $3,000 before launch.</span></label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className={labelClass}>Business Name</label><input className={inputClass} value={businessName} onChange={(e) => setBusinessName(e.target.value)} required placeholder="Business name" /></div>
                <div><label className={labelClass}>Business Email</label><input className={inputClass} type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} required placeholder="contact@example.com" /></div>
              </div>

              <div className="bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-5">
                <p className="text-xs font-display uppercase tracking-wider font-black">Payment due now via Stripe</p>
                <p className="font-display text-5xl text-brand-brown font-black mt-2">{paymentType === "deposit_standard" ? "$5,000" : "$4,000"}</p>
              </div>

              <div className="space-y-3 bg-white border-[3px] border-brand-brown rounded-2xl p-4">
                <p className="text-[11px] font-display uppercase tracking-wider text-brand-brown font-black mb-1">Confirmations</p>
                <label className="flex items-start gap-3 text-xs font-bold text-brand-brown cursor-pointer">
                  <input type="checkbox" checked={confirmScope} onChange={(e) => setConfirmScope(e.target.checked)} required className="mt-0.5 accent-brand-orange" />
                  <span>I understand this is a fixed-scope custom digital implementation service.</span>
                </label>
                <label className="flex items-start gap-3 text-xs font-bold text-brand-brown cursor-pointer">
                  <input type="checkbox" checked={confirmMaintenance} onChange={(e) => setConfirmMaintenance(e.target.checked)} required className="mt-0.5 accent-brand-orange" />
                  <span>I understand maintenance is separate unless explicitly included.</span>
                </label>
                <label className="flex items-start gap-3 text-xs font-bold text-brand-brown cursor-pointer">
                  <input type="checkbox" checked={confirmStart} onChange={(e) => setConfirmStart(e.target.checked)} required className="mt-0.5 accent-brand-orange" />
                  <span>I understand work starts after payment review, scope confirmation, and onboarding materials.</span>
                </label>
                <label className="flex items-start gap-3 text-xs font-bold text-brand-brown cursor-pointer">
                  <input type="checkbox" checked={confirmNoGuarantees} onChange={(e) => setConfirmNoGuarantees(e.target.checked)} required className="mt-0.5 accent-brand-orange" />
                  <span>I understand there are no guaranteed revenue, ranking, traffic, leads, or sales outcomes.</span>
                </label>
                <label className="flex items-start gap-3 text-xs font-bold text-brand-brown cursor-pointer border-t-2 border-brand-brown/10 pt-3 mt-2">
                  <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} required className="mt-0.5 accent-brand-orange" />
                  <span>I accept the <Link href="/terms" className="underline">Terms</Link>, <Link href="/privacy" className="underline">Privacy Policy</Link>, and <Link href="/refunds" className="underline">Refund Policy</Link>.</span>
                </label>
              </div>

              {error && <div className="rounded-2xl border-[3px] border-brand-brown bg-white p-4 text-sm font-bold text-brand-brown">{error}</div>}

              <button type="submit" disabled={loading} className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center w-full disabled:opacity-60">{loading ? "Creating Checkout" : "Pay Project Deposit"}</button>
              
              <p className="text-[10px] text-center font-bold text-brand-brown/50 uppercase tracking-tighter">Secure checkout via Stripe • Support: contact@dilgs.online</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
