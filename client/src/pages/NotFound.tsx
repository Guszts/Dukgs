import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
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

        {/* 404 Card */}
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
            className="w-20 h-20 bg-brand-yellow rounded-full border-[3px] border-brand-brown shadow-[4px_4px_0px_rgba(45,30,24,1)] flex items-center justify-center mx-auto"
          >
            <span className="font-display text-3xl font-black text-brand-brown">?</span>
          </motion.div>

          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">Error 404</span>
            <h1 className="font-display text-4xl sm:text-5xl text-brand-brown uppercase font-black tracking-tight">
              Page Not Found
            </h1>
            <div className="h-1.5 w-16 bg-brand-orange rounded-full mx-auto" />
          </div>

          <p className="text-brand-brown/70 text-sm sm:text-base font-semibold leading-relaxed max-w-sm mx-auto">
            The page you are looking for doesn't exist. It may have been moved, deleted, or the URL may be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-3.5 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#trust"
                className="bubble-btn bg-white text-brand-brown px-7 py-3.5 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(45,30,24,1)]"
              >
                <ArrowLeft className="w-4 h-4" />
                View Scope
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="text-xs text-brand-brown/50 font-mono"
        >
          © {new Date().getFullYear()} Dilgs. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}
