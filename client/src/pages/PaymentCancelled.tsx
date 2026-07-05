import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft, RefreshCcw, Mail } from 'lucide-react';

export default function PaymentCancelled() {
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

        {/* Cancelled Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 80 }}
          className="bento-card bg-white rounded-[40px] border-[3px] border-brand-brown p-10 sm:p-14 space-y-6"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: 10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
            className="w-20 h-20 bg-cream rounded-full border-[3px] border-brand-brown shadow-[4px_4px_0px_rgba(45,30,24,1)] flex items-center justify-center mx-auto"
          >
            <XCircle className="w-10 h-10 text-brand-orange" />
          </motion.div>

          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">Payment Status</span>
            <h1 className="font-display text-3xl sm:text-4xl text-brand-brown uppercase font-black tracking-tight">
              Payment Cancelled
            </h1>
            <div className="h-1.5 w-16 bg-brand-orange rounded-full mx-auto" />
          </div>

          <div className="bg-cream rounded-[24px] border-[3px] border-brand-brown p-5 space-y-2">
            <p className="text-brand-brown text-sm font-bold leading-relaxed">
              Your payment was cancelled. No amount was charged to your account.
            </p>
            <p className="text-brand-brown/65 text-xs font-semibold leading-relaxed">
              If this was a mistake, you can try again or contact us for assistance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-3.5 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#trust"
                className="bubble-btn bg-white text-brand-brown px-7 py-3.5 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(45,30,24,1)]"
              >
                <RefreshCcw className="w-4 h-4" />
                Try Again
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-brand-brown/60"
        >
          <span className="font-bold">Need help?</span>
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
