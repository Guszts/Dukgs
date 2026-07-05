import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  ["offer", "Offer"],
  ["value-stack", "Value Stack"],
  ["blocks", "Blocks"],
  ["process", "Process"],
  ["maintenance", "Care"],
  ["trust", "Trust"],
];

const packageBlocks = [
  {
    name: "Digital Presence Strategy",
    value: "US$3,000",
    summary: "Before we design anything, we map the customer journey, page structure, menu hierarchy, conversion paths, trust signals, and local presence gaps through a written audit and onboarding form.",
    items: ["Current digital presence audit", "Website and mobile structure review", "Menu and offer hierarchy", "Reservation and order path review", "Social proof and local presence analysis", "Page map, CTA planning, and competitor reference review"],
  },
  {
    name: "Premium Website System",
    value: "US$9,500",
    summary: "A premium website built to present the brand, menu, story, reviews, location, and customer actions in one polished experience.",
    items: ["Premium homepage", "About, Menu, Contact, Locations, Reviews, and FAQ structure", "Catering, events, or custom order page when applicable", "Featured product and brand story sections", "Mobile-first responsive interface", "Premium cards, grids, sections, and basic speed optimization"],
  },
  {
    name: "Menu & Product Presentation",
    value: "US$4,000",
    summary: "We structure the menu so visitors can understand the offer quickly, discover key items, and move toward reservations, orders, or inquiries.",
    items: ["Digital menu structure", "Category-based organization", "Best-seller and premium item highlights", "Mobile reading layout", "Seasonal, drinks, desserts, combos, and specials structure", "Reservation, order, or inquiry CTAs inside the menu"],
  },
  {
    name: "Reservation & Order Flow",
    value: "US$4,500",
    summary: "The website is structured to reduce friction and guide visitors toward the right action: reservation, order, catering inquiry, custom order, or contact.",
    items: ["Visible reservation buttons", "Booking tool integration when available", "Online order and delivery link placement", "Direct order, catering, event, and custom order forms", "Thank-you path and confirmation message", "Contextual CTAs for tables, orders, catering, custom orders, and contact"],
  },
  {
    name: "Local Presence & Google Structure",
    value: "US$4,500",
    summary: "We create the local presence foundation so the website, location information, reviews, Google profile, and customer actions work together.",
    items: ["Basic local SEO structure", "Page titles and descriptions", "City and location structure", "Hours, map, and location section", "Google Business Profile recommendations", "Review links, category suggestions, and Search Console setup when applicable"],
  },
  {
    name: "Review & Trust System",
    value: "US$2,500",
    summary: "We make trust visible by turning reviews, customer experience, brand strengths, and reputation into structured conversion sections.",
    items: ["Review section design", "Testimonial cards", "Google review highlights", "Local trust sections", "Brand strength blocks", "Review CTA or QR/link structure when applicable"],
  },
  {
    name: "Conversion Copywriting",
    value: "US$4,000",
    summary: "We write the website copy around customer behavior: trust, appetite, clarity, location, reservations, orders, and inquiries.",
    items: ["Main headlines and subheadlines", "Homepage, menu, About, FAQ, and location copy", "Reservation, order, catering, and event copy", "Form microcopy and confirmation messages", "Trust and social proof copy", "Google Business Profile description support"],
  },
  {
    name: "Tracking & Analytics",
    value: "US$3,500",
    summary: "We set up the tracking foundation so the business can understand which actions visitors are taking: reservations, orders, calls, forms, and key clicks.",
    items: ["Google Analytics setup", "Search Console setup", "Form conversion tracking", "Reservation, order, phone, email, and delivery click tracking", "Primary CTA event structure", "Thank-you page and launch tracking checklist"],
  },
  {
    name: "Basic Automation & Lead Routing",
    value: "US$3,000",
    summary: "Every inquiry should go somewhere clear. We structure lead routing, notifications, confirmations, and basic follow-up paths.",
    items: ["Owner or team notifications", "Customer confirmation messages", "Form routing to email, sheet, CRM, or Supabase when used", "Inquiry type organization", "Initial response structure", "Simple follow-up and lead record foundation"],
  },
  {
    name: "Launch, Testing & Handoff",
    value: "US$2,500",
    summary: "We do not just build and disappear. We test, launch, document, and hand off the system properly.",
    items: ["Pre-launch checklist", "Mobile and desktop testing", "Form, reservation, order, and external link testing", "Basic speed and SEO review", "Domain, SSL, and publication support", "Handoff document, walkthrough, and basic use instructions"],
  },
  {
    name: "30-Day Post-Launch Care",
    value: "US$2,500",
    summary: "After launch, we stay for 30 days to handle small corrections, check forms, review tracking, and stabilize the system.",
    items: ["30 days of post-launch support", "Small text, image, and link corrections", "Form and tracking checks", "Light bug fixes", "Email-based support", "Preparation for monthly maintenance"],
  },
];

const maintenanceBlocks = [
  ["Technical Care", "Monitoring, light corrections, links, and forms", "US$500"],
  ["Menu Updates", "Menu, hours, items, and promotion updates", "US$500"],
  ["Local Presence Support", "Google Business Profile, posts, and local data", "US$500"],
  ["Tracking Review", "Events, forms, clicks, and action checks", "US$400"],
  ["Content Support", "Two ideas/posts, copy adjustments, and small sections", "US$400"],
  ["Conversion Improvements", "CTAs, section order, and small improvement tests", "US$300"],
  ["Monthly Report", "Simple monthly summary", "US$150"],
];

const trustItems = [
  ["No Calls Required", "The full buying path can happen asynchronously through written audit details, private proposal pages, checkout, onboarding forms, and email."],
  ["Secure Payments", "Payments are processed through Stripe. DILGS does not store full card numbers."],
  ["Clear Scope", "The $10,000 implementation covers one defined fixed-scope digital presence system."],
  ["No False Guarantees", "No guaranteed revenue, rankings, reservations, traffic, or customer volume claims."],
  ["Written Policies", "Terms, privacy, cookies, payment, refund, and third-party cost rules are available before checkout."],
  ["Written Buyer Path", "Audit, qualification, proposal, deposit, onboarding, build, review, final payment, launch, and care are handled through written steps."],
];

function Marker() {
  return (
    <div className="flex gap-2 items-center" aria-hidden="true">
      <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-12" />
      <span className="w-2.5 h-8 bg-brand-orange rounded-full -rotate-12" />
      <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-6" />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl space-y-4"
    >
      <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-brown uppercase tracking-tight font-black">{title}</h2>
      <div className="h-1.5 w-16 bg-brand-orange rounded-full" />
      {text && <p className="text-brand-brown/75 text-sm sm:text-base leading-relaxed font-medium">{text}</p>}
    </motion.div>
  );
}

function Card({ title, text }: { title: string; text?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5, x: -2, shadow: "7px 7px 0px rgba(45,30,24,1)" }}
      className="bg-cream rounded-[28px] border-[3px] border-brand-brown p-5 shadow-[5px_5px_0px_rgba(45,30,24,1)] transition-all"
    >
      <h3 className="font-display text-base uppercase text-brand-brown tracking-wide font-black">{title}</h3>
      {text && <p className="mt-3 text-xs sm:text-sm text-brand-brown/75 leading-relaxed font-medium">{text}</p>}
    </motion.div>
  );
}

function Shell({ id, children, cream = false }: { id?: string; children: ReactNode; cream?: boolean }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 scroll-mt-28">
      <div className={`bento-card rounded-[34px] sm:rounded-[44px] border-[3px] border-brand-brown p-6 sm:p-8 md:p-12 ${cream ? "bg-cream-dark" : "bg-white"}`}>{children}</div>
    </section>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-brown">
      <div className="grain-overlay" />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3px] border-brand-brown">
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
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#home" 
            className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight text-brand-brown font-black"
          >
            Dilgs<span className="text-brand-orange">.</span>
          </motion.a>
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map(([id, label], idx) => (
              <motion.a 
                key={id} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.3 }}
                whileHover={{ y: -2 }}
                href={`#${id}`} 
                className="font-display text-xs uppercase tracking-wider text-brand-brown hover:text-brand-orange"
              >
                {label}
              </motion.a>
            ))}
          </nav>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden sm:flex items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/audit" className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black shadow-[3px_3px_0px_0px_rgba(45,30,24,1)]">Get Free Audit</Link>
            </motion.div>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#value-stack" 
              className="p-2.5 bg-white border-2 border-brand-brown/70 rounded-full font-display text-xs font-black"
            >
              Value
            </motion.a>
          </motion.div>
          <button onClick={() => setMenu(!menu)} className="xl:hidden p-2 border-[3px] border-brand-brown rounded-xl bg-white text-brand-brown font-display font-black uppercase text-xs">Menu</button>
        </motion.div>

        {menu && (
          <div className="xl:hidden bg-white border-t-[3px] border-brand-brown">
            <div className="px-4 py-6 space-y-3">
              {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="block font-display text-base uppercase tracking-wide py-2 px-4 rounded-xl hover:bg-cream-dark text-brand-brown">{label}</a>)}
              <Link href="/audit" className="w-full bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown py-3 rounded-xl font-display text-sm uppercase tracking-wider text-center block font-black">Get Free Audit</Link>
            </div>
          </div>
        )}
      </header>

      <main className="pb-8 space-y-2">
        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bento-card p-6 sm:p-8 md:p-12 bg-white rounded-[34px] sm:rounded-[54px] border-[3px] border-brand-brown"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:col-span-8 space-y-6"
              >
                <div className="flex gap-3 items-center"><Marker /><span className="text-xs font-mono tracking-widest text-brand-brown/60 uppercase">NO-CALL GASTRONOMY DIGITAL PRESENCE SYSTEM</span></div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-brown leading-[1.05] tracking-tight font-black">One Complete Digital Presence System Without Sales Calls</h1>
                <p className="text-brand-brown font-display text-lg sm:text-xl md:text-2xl leading-normal max-w-3xl">The $10,000 implementation gives you the complete system: strategy, premium website, menu structure, reservation and order flow, local presence, reviews, copywriting, tracking, automation, launch support, and 30-day post-launch care.</p>
                <p className="text-brand-brown/70 text-sm sm:text-base max-w-2xl leading-relaxed">No discovery calls, no mandatory meetings, and no live sales process. The audit, proposal, payment, onboarding, material collection, review, and handoff can be handled through forms, email, and private pages.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/audit" className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center">Get Free Audit</Link>
                  <a href="#value-stack" className="bubble-btn bg-white hover:bg-cream-dark text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center">View Value Stack</a>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="lg:col-span-4"
              >
                <div className="relative bg-cream rounded-[36px] border-[3px] border-brand-brown p-5 shadow-[8px_8px_0px_rgba(45,30,24,1)]">
                  <div className="bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-6 -rotate-2">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-brand-brown/70 font-black">Async Implementation</p>
                    <p className="font-display text-5xl sm:text-6xl text-brand-brown font-black mt-2">US$10K</p>
                    <p className="font-display text-sm uppercase tracking-wider text-brand-brown font-black mt-2">No calls required</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-white rounded-2xl border-2 border-brand-brown p-4"><p className="font-display text-xl font-black">US$5K</p><p className="text-[11px] font-bold uppercase">Upfront</p></div>
                    <div className="bg-white rounded-2xl border-2 border-brand-brown p-4"><p className="font-display text-xl font-black">US$5K</p><p className="text-[11px] font-bold uppercase">Launch</p></div>
                    <div className="col-span-2 bg-brand-brown rounded-2xl border-2 border-brand-brown p-4"><p className="font-display text-xl text-cream font-black">Written Flow</p><p className="text-[11px] text-cream/80 font-bold uppercase">Audit, proposal, onboarding, review, and handoff</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Shell id="offer" cream>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7"><SectionTitle eyebrow="OFFER" title="Gastronomy Digital Presence System" text="Instead of hiring separate specialists for website design, copywriting, tracking, local presence, menu structure, and launch support, DILGS delivers the full system under one fixed implementation. The process is designed to be completed without mandatory calls." /></div>
            <div className="lg:col-span-5 bg-white rounded-[32px] border-[3px] border-brand-brown p-6 shadow-[6px_6px_0px_rgba(45,30,24,1)]">
              <div className="grid gap-4">
                <div><p className="text-xs font-mono uppercase tracking-widest text-brand-orange font-black">Product</p><p className="font-display text-2xl font-black uppercase">Gastronomy Digital Presence System</p></div>
                <div><p className="text-xs font-mono uppercase tracking-widest text-brand-orange font-black">Price</p><p className="font-display text-4xl font-black">US$10,000</p></div>
                <div><p className="text-xs font-mono uppercase tracking-widest text-brand-orange font-black">Payment</p><p className="font-bold">US$5,000 upfront. US$5,000 before launch.</p></div>
                <div><p className="text-xs font-mono uppercase tracking-widest text-brand-orange font-black">Communication</p><p className="font-bold">Async forms, email, private proposal pages, and written approvals.</p></div>
              </div>
            </div>
          </div>
        </Shell>

        <Shell id="value-stack">
          <SectionTitle eyebrow="VALUE STACK" title="Normally valued at US$25,000+, fixed implementation for US$10,000" text="The detailed internal buildout benchmark totals US$43,500 across strategy, website, copywriting, tracking, automation, launch, and care. The public offer is positioned more conservatively as a US$25,000+ buildout packaged into one fixed implementation." />
          <div className="mt-8 overflow-hidden rounded-[28px] border-[3px] border-brand-brown">
            <div className="grid grid-cols-[1fr_auto] bg-brand-brown text-cream font-display text-xs uppercase tracking-wider font-black"><div className="p-4">Block</div><div className="p-4 text-right">Benchmark</div></div>
            {packageBlocks.map((block) => <div key={block.name} className="grid grid-cols-[1fr_auto] border-t-[3px] border-brand-brown bg-white"><div className="p-4 font-bold text-brand-brown">{block.name}</div><div className="p-4 text-right font-display font-black text-brand-brown">{block.value}</div></div>)}
            <div className="grid grid-cols-[1fr_auto] border-t-[3px] border-brand-brown bg-cream-dark"><div className="p-4 font-display uppercase font-black">Internal Buildout Benchmark</div><div className="p-4 text-right font-display font-black">US$43,500</div></div>
            <div className="grid grid-cols-[1fr_auto] border-t-[3px] border-brand-brown bg-brand-yellow"><div className="p-4 font-display uppercase font-black">Fixed Implementation</div><div className="p-4 text-right font-display font-black">US$10,000</div></div>
          </div>
          <p className="mt-5 text-xs sm:text-sm text-brand-brown/65 font-semibold">This is not presented as a hype discount claim. It is a scope benchmark showing how many specialist areas are included in one fixed-scope implementation.</p>
        </Shell>

        <Shell id="blocks" cream>
          <SectionTitle eyebrow="PACKAGE BLOCKS" title="What You Receive" text="The lead receives one complete system divided into 11 operational blocks." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {packageBlocks.map((block, index) => (
              <div key={block.name} className="bg-white rounded-[30px] border-[3px] border-brand-brown p-5 sm:p-6 shadow-[6px_6px_0px_rgba(45,30,24,1)]">
                <div className="flex items-start justify-between gap-5"><div><p className="text-xs font-mono uppercase tracking-widest text-brand-orange font-black">Block {index + 1}</p><h3 className="font-display text-xl sm:text-2xl uppercase text-brand-brown font-black mt-2">{block.name}</h3></div><div className="shrink-0 rounded-full bg-brand-yellow border-2 border-brand-brown px-4 py-2 font-display text-xs font-black">{block.value}</div></div>
                <p className="mt-4 text-sm text-brand-brown/75 leading-relaxed font-semibold">{block.summary}</p>
                <ul className="mt-5 grid gap-2">{block.items.map((item) => <li key={item} className="bg-cream rounded-2xl border-2 border-brand-brown px-4 py-3 text-xs sm:text-sm font-bold text-brand-brown">{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </Shell>

        <Shell id="process">
          <SectionTitle eyebrow="NO-CALL PROCESS" title="From written audit to launch" text="No mandatory calls. The path is built around forms, email, private payment pages, onboarding documents, written approvals, and recorded handoff." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {[["01", "Written Audit", "Submit the free audit form with your current website, business details, goals, and issues."], ["02", "Private Proposal", "Qualified leads receive a written scope, pricing, terms, and private deposit page."], ["03", "Form Onboarding", "After deposit, materials are collected through structured onboarding forms and file links."], ["04", "Written Review", "Feedback, final approval, final payment, launch, and handoff can be completed in writing."]].map(([number, title, text]) => <Card key={number} title={`${number} ${title}`} text={text} />)}
          </div>
        </Shell>

        <Shell id="maintenance" cream>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5"><SectionTitle eyebrow="MONTHLY CARE" title="Growth Care — US$750/month" text="After launch, Monthly Growth Care keeps the system updated, monitored, and improving. Care can be handled asynchronously through email, task notes, and monthly written summaries." /><div className="mt-6 bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-5 shadow-[6px_6px_0px_rgba(45,30,24,1)]"><p className="font-display text-3xl font-black">US$2,250</p><p className="font-bold text-sm">Optional 3-month prepaid maintenance package.</p><p className="font-display text-xl font-black mt-3">US$12,250</p><p className="font-bold text-sm">Initial total with implementation and 3 months of Growth Care.</p></div></div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[28px] border-[3px] border-brand-brown">
                <div className="grid grid-cols-[1fr_auto] bg-brand-brown text-cream font-display text-xs uppercase tracking-wider font-black"><div className="p-4">Monthly Block</div><div className="p-4 text-right">Benchmark</div></div>
                {maintenanceBlocks.map(([name, content, value]) => <div key={name} className="grid grid-cols-[1fr_auto] border-t-[3px] border-brand-brown bg-white"><div className="p-4"><p className="font-bold">{name}</p><p className="text-xs text-brand-brown/65 font-semibold mt-1">{content}</p></div><div className="p-4 text-right font-display font-black">{value}</div></div>)}
                <div className="grid grid-cols-[1fr_auto] border-t-[3px] border-brand-brown bg-cream-dark"><div className="p-4 font-display uppercase font-black">Monthly Benchmark</div><div className="p-4 text-right font-display font-black">US$2,750</div></div>
                <div className="grid grid-cols-[1fr_auto] border-t-[3px] border-brand-brown bg-brand-yellow"><div className="p-4 font-display uppercase font-black">Growth Care Price</div><div className="p-4 text-right font-display font-black">US$750/mo</div></div>
              </div>
              <Link href="/maintenance" className="mt-6 bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center w-full">Start Monthly Growth Care</Link>
            </div>
          </div>
        </Shell>

        <Shell id="trust">
          <SectionTitle eyebrow="BUYER CONFIDENCE" title="Clear written terms before payment" text="A high-ticket purchase does not need a mandatory meeting. It needs clear scope, written terms, payment rules, privacy policies, third-party cost notes, and realistic expectations." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">{trustItems.map(([title, text]) => <Card key={title} title={title} text={text} />)}</div>
          <div className="flex flex-wrap gap-3 mt-8"><Link href="/scope" className="bubble-btn bg-brand-orange text-white px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Scope</Link><Link href="/terms" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Terms</Link><Link href="/privacy" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Privacy</Link><Link href="/cookies" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Cookies</Link><Link href="/refunds" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Refunds</Link></div>
        </Shell>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="bg-brand-yellow rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-8 md:p-10 text-center shadow-[8px_8px_0px_rgba(45,30,24,1)]">
            <span className="text-xs font-mono tracking-widest text-brand-brown/70 font-black uppercase">NO-CALL FREE AUDIT</span>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-brown uppercase tracking-tight font-black mt-4 max-w-3xl mx-auto">Find the gaps before implementation</h2>
            <p className="max-w-2xl mx-auto mt-4 text-brand-brown/75 text-sm sm:text-base leading-relaxed font-semibold">Submit your gastronomy business for written review. Qualified businesses can receive a private proposal and deposit payment page without a mandatory sales call.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7"><Link href="/audit" className="bubble-btn bg-brand-brown text-white px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center">Get Free Audit</Link><a href="#offer" className="bubble-btn bg-white text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center">View Offer</a></div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] border-[3px] border-brand-brown p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-8"
        >
          <div>
            <motion.p 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl text-brand-brown font-black"
            >
              Dilgs<span className="text-brand-orange">.</span>
            </motion.p>
            <p className="mt-2 text-sm text-brand-brown/65 font-semibold max-w-md">Premium digital presence systems for gastronomy businesses in the United States. No calls required.</p>
            <p className="mt-3 text-xs text-brand-brown/55 font-bold">Payments processed securely by Stripe. Full card numbers are not stored by DILGS.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 text-xs font-display uppercase tracking-wider font-black"><Link href="/scope">Scope</Link><Link href="/onboarding/new">Onboarding</Link><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/refunds">Refunds</Link></div>
        </motion.div>
      </footer>
    </div>
  );
}
