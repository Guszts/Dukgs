import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Payment() {
  const [paymentType, setPaymentType] = useState<"deposit" | "alternative">("deposit");
  const [businessEmail, setBusinessEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Call Stripe checkout session
      // const response = await trpc.stripe.createDepositCheckout.mutate({...});
      // window.location.href = response.url;
      
      // For now, redirect to success page
      setTimeout(() => {
        window.location.href = "/payment-success";
      }, 1000);
    } catch (error) {
      console.error("Payment error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-display font-bold mb-4 text-brand-brown">Payment</h1>
        <p className="text-xl text-brand-brown mb-12">Choose your payment structure for the $10,000 implementation.</p>

        <form onSubmit={handlePayment} className="space-y-8">
          {/* Payment Type Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-brown">Payment Structure</h2>
            
            <div className="bento-card p-6 cursor-pointer border-4" style={{borderColor: paymentType === "deposit" ? "#FFD700" : "#E0E0E0"}} onClick={() => setPaymentType("deposit")}>
              <input type="radio" name="payment" value="deposit" checked={paymentType === "deposit"} onChange={() => setPaymentType("deposit")} className="mr-3" />
              <label className="text-brand-brown font-bold">Standard: $5,000 Deposit + $5,000 Final</label>
              <p className="text-brand-brown mt-2 text-sm">Pay deposit to start, final payment before launch</p>
            </div>

            <div className="bento-card p-6 cursor-pointer border-4" style={{borderColor: paymentType === "alternative" ? "#FFD700" : "#E0E0E0"}} onClick={() => setPaymentType("alternative")}>
              <input type="radio" name="payment" value="alternative" checked={paymentType === "alternative"} onChange={() => setPaymentType("alternative")} className="mr-3" />
              <label className="text-brand-brown font-bold">Alternative: $4k + $3k + $3k</label>
              <p className="text-brand-brown mt-2 text-sm">Flexible 3-payment structure spread over 3 months</p>
            </div>
          </div>

          {/* Email */}
          <div className="bento-card p-8">
            <label className="block text-brand-brown font-bold mb-2">Business Email *</label>
            <Input 
              type="email" 
              placeholder="contact@restaurant.com" 
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              required 
              className="border-brand-brown"
            />
          </div>

          {/* Payment Amount */}
          <div className="bento-card p-8 bg-brand-yellow">
            <p className="text-brand-brown font-bold text-lg">
              {paymentType === "deposit" ? "First Payment: $5,000" : "First Payment: $4,000"}
            </p>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="bubble-btn bubble-btn--yellow w-full py-4 text-lg"
          >
            {loading ? "Processing..." : "Proceed to Checkout"}
          </button>

          <Link href="/">
            <button type="button" className="bubble-btn bubble-btn--outline w-full py-3">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
