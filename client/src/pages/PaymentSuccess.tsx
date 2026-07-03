import { Link } from "wouter";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="bento-card p-12 max-w-md text-center">
        <h1 className="text-5xl font-display font-bold mb-4 text-brand-brown">✓ Payment Confirmed!</h1>
        <p className="text-brand-brown mb-8 text-lg">Your deposit has been received. Our team will contact you within 24 hours to start the project.</p>
        
        <div className="bg-brand-yellow p-6 rounded-2xl mb-8">
          <p className="text-brand-brown font-bold">Deposit: $5,000</p>
          <p className="text-brand-brown text-sm mt-2">Final payment of $5,000 due before launch</p>
        </div>

        <Link href="/">
          <button className="bubble-btn bubble-btn--yellow w-full">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
