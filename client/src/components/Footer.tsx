import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Scope', href: '/scope' },
    { label: 'Onboarding', href: '/onboarding/new' },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Refunds', href: '/refunds' },
  ];

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        className="bg-white rounded-[32px] border-[3px] border-brand-brown p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-8"
      >
        <div className="space-y-4">
          <motion.p
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl text-brand-brown font-black"
          >
            Dilgs<span className="text-brand-orange">.</span>
          </motion.p>
          <p className="text-sm text-brand-brown/65 font-semibold max-w-md leading-relaxed">
            Premium digital presence systems for gastronomy businesses. No calls required.
          </p>
          <div className="flex items-center gap-2 text-sm text-brand-brown/60 font-bold">
            <Mail className="w-4 h-4 text-brand-orange" />
            <a href="mailto:dilgs.online@gmail.com" className="hover:text-brand-orange transition-colors">
              dilgs.online@gmail.com
            </a>
          </div>
          <p className="text-xs text-brand-brown/55 font-bold">
            Payments processed securely by Stripe. Full card numbers are not stored by Dilgs.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-display uppercase tracking-wider font-black">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-brand-brown hover:text-brand-orange transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-brand-brown/50 font-mono mt-2">
            © {currentYear} Dilgs. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
