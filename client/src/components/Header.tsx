import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Offer', href: '/#offer' },
    { label: 'Value Stack', href: '/#value-stack' },
    { label: 'Blocks', href: '/#blocks' },
    { label: 'Process', href: '/#process' },
    { label: 'Care', href: '/#maintenance' },
    { label: 'Trust', href: '/#trust' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3px] border-brand-brown">
      {/* Announcement bar */}
      <div className="bg-brand-purple text-white py-2 px-4 border-b-[3px] border-brand-brown">
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-display tracking-wider max-w-7xl mx-auto gap-1 sm:gap-4">
          <div className="uppercase opacity-95">No calls required — written audit and async onboarding</div>
          <div className="hidden md:block uppercase font-bold text-brand-yellow">Normally valued at US$25,000+ when built with separate specialists</div>
          <div className="uppercase opacity-95 text-right">Fixed implementation for US$10,000</div>
        </div>
      </div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight text-brand-brown font-black">
            Dilgs<span className="text-brand-orange">.</span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map(({ label, href }, idx) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.3 }}
              whileHover={{ y: -2 }}
              className="font-display text-xs uppercase tracking-wider text-brand-brown hover:text-brand-orange transition-colors"
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="hidden sm:flex items-center gap-3"
        >
          <motion.a
            href="/#trust"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-5 py-2.5 rounded-full font-display text-[10px] sm:text-xs uppercase tracking-wider font-black"
          >
            View Scope
          </motion.a>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 border-[3px] border-brand-brown rounded-lg bg-white text-brand-brown active:scale-95 transition-transform"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="xl:hidden bg-white border-t-[3px] border-brand-brown overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-display text-base uppercase tracking-wide py-2 px-4 rounded-xl hover:bg-cream-dark text-brand-brown transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-brown/10">
                <a
                  href="/#trust"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown py-3 rounded-xl font-display text-sm uppercase tracking-wider text-center block font-black"
                >
                  View Scope
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
