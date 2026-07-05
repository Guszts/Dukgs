import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Mail } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 selection:bg-brand-yellow selection:text-brand-brown">
      <div className="grain-overlay" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        className="w-full max-w-lg text-center space-y-8"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Link href="/" className="font-display text-3xl text-brand-brown font-black">
            Dilgs<span className="text-brand-orange">.</span>
          </Link>
        </motion.div>

        {/* Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 80 }}
          className="bento-card bg-white rounded-[40px] border-[3px] border-brand-brown p-10 sm:p-14 space-y-6"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
            className="w-20 h-20 bg-brand-green rounded-full border-[3px] border-brand-brown shadow-[4px_4px_0px_rgba(45,30,24,1)] flex items-center justify-center mx-auto"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>

          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-brand-green font-black uppercase">Payment Confirmed</span>
            <h1 className="font-display text-3xl sm:text-4xl text-brand-brown uppercase font-black tracking-tight">
              Deposit Received
            </h1>
            <div className="h-1.5 w-16 bg-brand-green rounded-full mx-auto" />
          </div>

          <p className="text-brand-brown/75 text-sm font-semibold leading-relaxed max-w-sm mx-auto">
            Your deposit has been received. The project team will review the payment and follow up within 24 hours to confirm scope and next steps.
          </p>

          <div className="bg-brand-yellow rounded-[24px] border-[3px] border-brand-brown p-5 shadow-[4px_4px_0px_rgba(45,30,24,1)] space-y-2">
            <p className="font-display text-sm uppercase tracking-wider text-brand-brown font-black">Payment Summary</p>
            <p className="font-display text-3xl text-brand-brown font-black">$5,000</p>
            <p className="text-brand-brown/70 text-xs font-bold">Deposit received. Final balance of $5,000 due before launch.</p>
          </div>

          <div className="bg-cream rounded-[20px] border-2 border-brand-brown p-4 text-left space-y-2">
            <p className="font-display text-xs uppercase tracking-wider text-brand-brown font-black">Next Steps</p>
            <ol className="text-xs text-brand-brown/75 font-semibold space-y-1">
              <li>1. Payment review & confirmation</li>
              <li>2. <Link href="/onboarding/new" className="underline text-brand-orange">Complete Onboarding Materials</Link></li>
              <li>3. Scope confirmation</li>
              <li>4. Implementation start</li>
            </ol>
          </div>

          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-3.5 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 w-full"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-brand-brown/60"
        >
          <span className="font-bold">Questions?</span>
          <a
            href="mailto:dilgs.online@gmail.com"
            className="flex items-center gap-1.5 font-bold hover:text-brand-orange transition-colors"
          >
            <Mail className="w-4 h-4" />
            dilgs.online@gmail.com
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-xs text-brand-brown/50 font-mono"
        >
          © {new Date().getFullYear()} Dilgs. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}
