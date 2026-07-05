import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCcw, Wrench, ArrowLeft } from 'lucide-react';

const included = [
  "One fixed-scope digital presence system for one business brand or one agreed location group",
  "Homepage", "About", "Menu or Services", "Location or Contact", "Reviews or Trust", "FAQ",
  "One conversion page when applicable",
  "Reservation/order/quote/catering/event/custom-order/contact flows when applicable",
  "Basic form routing", "Owner/team notification", "Customer confirmation message",
  "Lead record foundation", "Simple follow-up structure", "Stripe or checkout links",
  "Google Analytics", "Search Console", "Google Business Profile recommendations",
  "Map/location embeds", "Booking/order links",
  "CRM or sheet routing when access is supplied",
  "Domain, SSL and launch support", "Pre-launch checklist",
  "Mobile/desktop testing", "Form and link testing", "Handoff document",
  "30 days of light post-launch corrections",
];

const notIncluded = [
  "Paid ads", "Ad spend", "Guaranteed traffic", "Guaranteed revenue",
  "Guaranteed rankings", "Guaranteed sales", "Guaranteed leads",
  "Professional photography", "Video production", "Full brand identity",
  "Logo design", "Legal review", "Translation unless separately agreed",
  "Complex custom software", "Native apps", "Marketplace systems",
  "POS replacement", "Inventory systems", "Advanced CRM automation",
  "Third-party subscriptions", "Domains", "Hosting upgrades",
  "Booking tools", "SMS tools", "Email tools", "Paid plugins",
  "Unlimited revisions", "Unlimited pages", "Unlimited integrations",
  "Anything outside approved written scope",
];

const deliverySteps = [
  ["01", "Payment review"],
  ["02", "Onboarding"],
  ["03", "Build"],
  ["04", "Review"],
  ["05", "Launch"],
  ["06", "Care"],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

export default function OfferScope() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-brown">
      <div className="grain-overlay" />

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3px] border-brand-brown">
        <div className="bg-brand-purple text-white py-2 px-4 border-b-[3px] border-brand-brown">
          <div className="flex justify-center items-center text-[10px] sm:text-xs font-display tracking-wider max-w-7xl mx-auto">
            <div className="uppercase font-bold text-brand-yellow">Fixed-Scope Implementation — US$10,000</div>
          </div>
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        >
          <Link href="/" className="font-display text-2xl sm:text-3xl text-brand-brown font-black">
            Dilgs<span className="text-brand-orange">.</span>
          </Link>
          <Link
            href="/"
            className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black shadow-[3px_3px_0px_0px_rgba(45,30,24,1)] flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bento-card bg-white rounded-[34px] sm:rounded-[44px] border-[3px] border-brand-brown p-6 sm:p-10 md:p-14"
        >
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">Fixed Scope</span>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-brand-brown uppercase leading-tight tracking-tight font-black">
              What the US$10,000 Implementation Includes
            </h1>
            <div className="h-1.5 w-20 bg-brand-orange rounded-full" />
            <p className="text-brand-brown/75 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl">
              The Dilgs implementation is a fixed-scope service designed to build a complete digital presence foundation. This ensures speed, quality, and clarity for both parties.
            </p>
          </div>
        </motion.div>

        {/* ── Included ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          className="bento-card bg-cream rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-7 h-7 text-brand-green shrink-0" />
            <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-brown font-black">Included</h2>
          </div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {included.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start gap-2.5 bg-white rounded-2xl border-2 border-brand-brown px-4 py-3 text-xs sm:text-sm font-bold text-brand-brown"
              >
                <span className="text-brand-green font-black mt-0.5 shrink-0">→</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ── Not Included ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          className="bento-card bg-white rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <XCircle className="w-7 h-7 text-brand-orange shrink-0" />
            <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-brown font-black">Not Included</h2>
          </div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {notIncluded.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start gap-2.5 bg-cream rounded-2xl border-2 border-brand-brown/40 px-4 py-3 text-xs sm:text-sm font-bold text-brand-brown/70"
              >
                <span className="text-brand-orange font-black mt-0.5 shrink-0">×</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ── Revision & Maintenance ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
            className="bento-card bg-brand-brown rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-8 text-white"
          >
            <RefreshCcw className="w-7 h-7 text-brand-yellow mb-5" />
            <h2 className="font-display text-xl sm:text-2xl uppercase font-black mb-4">Revision Rule</h2>
            <ul className="space-y-3 text-sm font-semibold text-white/85">
              <li>• Up to 2 structured revision rounds before launch</li>
              <li>• Revisions must stay inside approved scope</li>
              <li>• New pages, new funnels, new integrations, rebranding, copy rewrites after approval, or strategic changes require a separate quote</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
            className="bento-card bg-brand-yellow rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-8 shadow-[6px_6px_0px_rgba(45,30,24,1)]"
          >
            <Wrench className="w-7 h-7 text-brand-brown mb-5" />
            <h2 className="font-display text-xl sm:text-2xl uppercase font-black mb-4 text-brand-brown">Maintenance</h2>
            <ul className="space-y-3 text-sm font-semibold text-brand-brown/85">
              <li>• Monthly maintenance is separate unless the checkout link or proposal explicitly includes it</li>
              <li>• Standard monthly care starts at US$500/month when selected</li>
            </ul>
          </motion.div>
        </div>

        {/* ── Delivery Process ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          className="bento-card bg-cream-dark rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-10"
        >
          <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">Delivery</span>
          <h2 className="font-display text-2xl sm:text-3xl uppercase text-brand-brown font-black mt-2 mb-8">Delivery Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {deliverySteps.map(([num, step], idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="bg-white rounded-[20px] border-[3px] border-brand-brown p-4 text-center shadow-[3px_3px_0px_rgba(45,30,24,1)]"
              >
                <div className="text-xs font-mono text-brand-orange font-black">{num}</div>
                <div className="font-display text-sm uppercase text-brand-brown font-black mt-1">{step}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Back CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center pt-4 pb-8"
        >
          <Link
            href="/"
            className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-8 py-4 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
