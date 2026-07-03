import { useState } from "react";
import { Link } from "wouter";

const navItems = [
  ["problem", "Problem"],
  ["system", "System"],
  ["included", "Included"],
  ["process", "Process"],
  ["pricing", "Pricing"],
  ["trust", "Trust"],
];

const pills = ["PREMIUM WEBSITE", "MENU SYSTEM", "RESERVATION FLOW", "LOCAL PRESENCE", "MONTHLY CARE"];
const ribbon = ["RESTAURANTS", "BAKERIES", "CAFÉS", "SUSHI", "PATISSERIES", "CATERING", "MENUS", "RESERVATIONS", "ORDERS", "REVIEWS", "LOCAL SEO", "MONTHLY CARE"];
const problems = ["Weak mobile experience", "Poor menu presentation", "No clear reservation flow", "No order or catering flow", "Weak local search structure", "Underused reviews", "No tracking foundation", "Too dependent on social media"];
const included = ["Premium custom website", "Conversion-focused homepage", "Menu structure", "Reservation flow", "Custom order flow", "Catering or event inquiry page", "Reviews and testimonial structure", "Local SEO foundation", "Tracking setup", "Conversion copywriting", "Launch support", "30-day post-launch care"];
const process = [["01", "Audit", "Review website, menu, local presence, booking path, inquiry flow, and trust gaps."], ["02", "Scope", "Define implementation, payment structure, materials needed, and launch path."], ["03", "Build", "Create the digital presence system with visuals, copy, forms, tracking, and mobile structure."], ["04", "Launch", "Test the system, connect the domain, verify forms, and prepare the release."]];
const care = [["Essential Care", "$500/mo", "Small updates, checks, corrections, and basic support."], ["Growth Care", "$750/mo", "Conversion review, content updates, monthly improvements, and stronger support."], ["Authority Care", "$1,500/mo", "Higher-touch maintenance for stronger brands and multi-location systems."]];
const trust = [["Secure Payments", "Payments are processed through Stripe. DILGS does not store full card numbers."], ["Clear Scope", "The $10,000 implementation covers a defined fixed-scope digital presence system."], ["No False Guarantees", "No guaranteed revenue, rankings, reservations, traffic, or customer volume claims."], ["Written Policies", "Terms, privacy, cookies, payment, refund, and third-party cost rules are available before checkout."], ["Buyer Path", "Audit, qualification, proposal, deposit, onboarding, build, review, final payment, launch, and care are explained before purchase."], ["Data Handling", "Lead, project, payment, and onboarding data is handled through server-side flows and protected database access."]];

const tabs: Record<string, string[]> = {
  Strategy: ["Digital presence audit", "Customer journey planning", "Page architecture", "CTA strategy", "Competitor reference review", "Offer and menu priority map"],
  Website: ["Premium homepage", "Menu page", "Contact page", "Location section", "FAQ section", "Mobile-first layout"],
  Reservations: ["Booking link integration", "Reservation CTA structure", "Private event inquiry flow", "Confirmation path", "Contact fallback"],
  Orders: ["Custom order inquiry flow", "Pickup and delivery CTA structure", "Product showcase", "Catering order structure", "Thank-you path"],
  Local: ["Local SEO foundation", "Google Business Profile guidance", "Map section", "Opening hours presentation", "Local trust sections"],
  Tracking: ["Google Analytics setup", "Search Console setup", "Form conversion tracking", "Reservation click tracking", "Order click tracking"],
  Launch: ["Domain connection support", "Mobile testing", "Form testing", "Speed review", "Final launch checklist"],
};

function Marker() {
  return (
    <div className="flex gap-2 items-center">
      <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-12" />
      <span className="w-2.5 h-8 bg-brand-orange rounded-full -rotate-12" />
      <span className="w-2.5 h-7 bg-brand-orange/80 rounded-full rotate-6" />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-brown uppercase tracking-tight font-black">{title}</h2>
      <div className="h-1.5 w-16 bg-brand-orange rounded-full" />
      {text && <p className="text-brand-brown/75 font-sans text-sm sm:text-base leading-relaxed font-medium">{text}</p>}
    </div>
  );
}

function Card({ title, text }: { title: string; text?: string }) {
  return (
    <div className="bg-cream rounded-[28px] border-[3px] border-brand-brown p-5 shadow-[5px_5px_0px_rgba(45,30,24,1)]">
      <h3 className="font-display text-base uppercase text-brand-brown tracking-wide font-black">{title}</h3>
      {text && <p className="mt-3 text-xs sm:text-sm text-brand-brown/75 leading-relaxed font-medium">{text}</p>}
    </div>
  );
}

function Shell({ id, children, cream = false }: { id?: string; children: React.ReactNode; cream?: boolean }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 scroll-mt-28">
      <div className={`bento-card rounded-[34px] sm:rounded-[44px] border-[3px] border-brand-brown p-6 sm:p-8 md:p-12 ${cream ? "bg-cream-dark" : "bg-white"}`}>{children}</div>
    </section>
  );
}

export default function Home() {
  const [tab, setTab] = useState("Strategy");
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-brown">
      <div className="grain-overlay" />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3px] border-brand-brown">
        <div className="bg-brand-purple text-white py-2 px-4 border-b-[3px] border-brand-brown">
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-display tracking-wider max-w-7xl mx-auto gap-1 sm:gap-4">
            <div className="uppercase opacity-95">Free professional audit of your current website</div>
            <div className="hidden md:block uppercase font-bold text-brand-yellow">Premium Digital Presence Systems for Gastronomy</div>
            <div className="uppercase opacity-95 text-right">Built for Trust and Better Flow</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight text-brand-brown font-black">Dilgs<span className="text-brand-orange">.</span></a>
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className="font-display text-xs uppercase tracking-wider text-brand-brown hover:text-brand-orange">{label}</a>)}
          </nav>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/audit" className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Get Free Audit</Link>
            <a href="#trust" className="p-2.5 bg-white border-2 border-brand-brown/70 rounded-full font-display text-xs font-black">Trust</a>
          </div>
          <button onClick={() => setMenu(!menu)} className="xl:hidden p-2 border-[3px] border-brand-brown rounded-xl bg-white text-brand-brown font-display font-black uppercase text-xs">Menu</button>
        </div>

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
          <div className="bento-card p-6 sm:p-8 md:p-12 bg-white rounded-[34px] sm:rounded-[54px] border-[3px] border-brand-brown">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex gap-3 items-center"><Marker /><span className="text-xs font-mono tracking-widest text-brand-brown/60 uppercase">GASTRONOMY DIGITAL PRESENCE SYSTEM</span></div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-brown leading-[1.05] tracking-tight font-black">Your Gastronomy Brand Needs More Than a Beautiful Website</h1>
                <p className="text-brand-brown font-display text-lg sm:text-xl md:text-2xl leading-normal max-w-3xl">DILGS builds premium digital presence systems for restaurants, bakeries, cafés, sushi brands, catering businesses, and gastronomy brands that need stronger trust, better presentation, better reservation flow, better order flow, and a more professional online experience.</p>
                <p className="text-brand-brown/70 text-sm sm:text-base max-w-2xl leading-relaxed">A complete system for your website, menu structure, reservations, custom orders, local presence, reviews, tracking, and post-launch care.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/audit" className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center">Get Free Audit</Link>
                  <a href="#included" className="bubble-btn bg-white hover:bg-cream-dark text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs sm:text-sm text-center">View System</a>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {pills.map((text, index) => <span key={text} className={`px-3 py-1.5 rounded-full border-2 border-brand-brown/10 font-display text-[10px] sm:text-xs uppercase tracking-wider font-black ${index === 0 ? "bg-brand-orange text-white" : index === 1 ? "bg-brand-blue text-white" : index === 2 ? "bg-brand-green text-white" : index === 3 ? "bg-brand-yellow text-brand-brown" : "bg-brand-purple text-white"}`}>{text}</span>)}
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="relative bg-cream rounded-[36px] border-[3px] border-brand-brown p-5 shadow-[8px_8px_0px_rgba(45,30,24,1)] rotate-1">
                  <div className="bg-brand-yellow rounded-[28px] border-[3px] border-brand-brown p-6 -rotate-2">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-brand-brown/70 font-black">Implementation</p>
                    <p className="font-display text-5xl sm:text-6xl text-brand-brown font-black mt-2">$10K</p>
                    <p className="font-display text-sm uppercase tracking-wider text-brand-brown font-black mt-2">30 days after materials</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-white rounded-2xl border-2 border-brand-brown p-4"><p className="font-display text-xl font-black">$5K</p><p className="text-[11px] font-bold uppercase">Deposit</p></div>
                    <div className="bg-white rounded-2xl border-2 border-brand-brown p-4"><p className="font-display text-xl font-black">$5K</p><p className="text-[11px] font-bold uppercase">Launch</p></div>
                    <div className="col-span-2 bg-brand-brown rounded-2xl border-2 border-brand-brown p-4"><p className="font-display text-xl text-cream font-black">Monthly Care</p><p className="text-[11px] text-cream/80 font-bold uppercase">$500 to $1,500/mo</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-brand-brown text-cream rounded-[28px] border-[3px] border-brand-brown px-4 py-4 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] sm:text-xs font-display uppercase tracking-wider font-black">
              {ribbon.map((item, index) => <span key={item}>{item}{index < ribbon.length - 1 && <span className="ml-4 opacity-40">/</span>}</span>)}
            </div>
          </div>
        </section>

        <Shell id="problem"><SectionTitle eyebrow="THE PROBLEM" title="Most Gastronomy Websites Look Nice but Still Lose Customers" text="A beautiful website is not enough. Your digital presence needs to guide visitors toward reservations, orders, inquiries, and trust." /><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">{problems.map((item) => <Card key={item} title={item} />)}</div></Shell>
        <Shell id="system" cream><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"><div className="lg:col-span-5"><SectionTitle eyebrow="THE SYSTEM" title="The DILGS Gastronomy Growth System" text="DILGS connects the visual brand, website, menu, reservations, orders, reviews, local presence, tracking, and ongoing updates into one complete digital presence system." /></div><div className="lg:col-span-7 bg-white p-5 rounded-[32px] border-[3px] border-brand-brown shadow-[6px_6px_0px_rgba(45,30,24,1)]"><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{["Visitor", "Brand Trust", "Menu or Offer", "Reservation / Order / Inquiry", "Tracking", "Follow-Up", "Monthly Updates"].map((step, index) => <div key={step} className="bg-cream rounded-2xl border-2 border-brand-brown p-4"><p className="font-mono text-[10px] uppercase tracking-widest text-brand-orange font-black">Step {index + 1}</p><p className="font-display text-lg uppercase tracking-wide font-black mt-1">{step}</p></div>)}</div></div></div></Shell>
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 scroll-mt-28"><div className="grid grid-cols-1 lg:grid-cols-12 gap-6"><div className="lg:col-span-5 bento-card bg-brand-yellow rounded-[34px] p-6 sm:p-10 border-[3px] border-brand-brown shadow-[8px_8px_0px_rgba(45,30,24,1)]"><span className="text-xs font-mono tracking-widest text-brand-brown/70 font-black uppercase">MAIN OFFER</span><h2 className="font-display text-4xl sm:text-5xl text-brand-brown uppercase tracking-tight font-black mt-4">Gastronomy Digital Presence System</h2><p className="font-display text-6xl text-brand-brown font-black mt-8">$10,000</p><p className="font-bold mt-4">$5,000 upfront deposit. $5,000 before launch.</p><p className="text-sm text-brand-brown/75 mt-3">Alternative structure: $4,000 upfront, $3,000 after design approval, $3,000 before launch.</p><div className="flex flex-col gap-3 mt-8"><Link href="/audit" className="bubble-btn bg-brand-brown text-white px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center">Request Free Audit</Link><Link href="/deposit/standard" className="bubble-btn bg-white text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center">Pay Project Deposit</Link></div></div><div id="included" className="lg:col-span-7 bento-card bg-white rounded-[34px] p-6 sm:p-10 border-[3px] border-brand-brown scroll-mt-28"><SectionTitle eyebrow="WHAT IS INCLUDED" title="Fixed-scope premium implementation" /><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">{included.map((item) => <div key={item} className="bg-cream rounded-2xl border-2 border-brand-brown p-4 font-display text-sm uppercase tracking-wide font-black">{item}</div>)}</div><p className="mt-6 text-xs sm:text-sm text-brand-brown/65 font-semibold">External tools, ad spend, paid software, hosting, domain, booking platforms, delivery fees, and third-party subscriptions are not included unless separately agreed.</p></div></div></section>
        <Shell><SectionTitle eyebrow="VALUE STACK" title="What You Receive" text="The system is organized by customer flow, not by random website pages." /><div className="flex gap-3 overflow-x-auto custom-scrollbar mt-8 pb-3">{Object.keys(tabs).map((item) => <button key={item} onClick={() => setTab(item)} className={`bubble-btn px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black whitespace-nowrap ${tab === item ? "bg-brand-yellow text-brand-brown" : "bg-white text-brand-brown"}`}>{item}</button>)}</div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">{tabs[tab].map((item) => <Card key={item} title={item} />)}</div></Shell>
        <Shell id="process" cream><SectionTitle eyebrow="PROCESS" title="From Audit to Launch" text="Audit, qualification, proposal, deposit, onboarding, build, review, final payment, launch, and care are explained before purchase." /><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">{process.map(([number, title, text]) => <Card key={number} title={`${number} ${title}`} text={text} />)}</div></Shell>
        <Shell id="trust"><SectionTitle eyebrow="BUYER CONFIDENCE" title="Clear terms before payment" text="A high-ticket purchase needs visible payment rules, privacy policies, third-party cost notes, and realistic expectations." /><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">{trust.map(([title, text]) => <Card key={title} title={title} text={text} />)}</div><div className="flex flex-wrap gap-3 mt-8"><Link href="/terms" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Terms</Link><Link href="/privacy" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Privacy</Link><Link href="/cookies" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Cookies</Link><Link href="/refunds" className="bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black">Refunds</Link></div></Shell>
        <Shell id="maintenance"><div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"><SectionTitle eyebrow="MONTHLY CARE" title="Monthly Growth Care" text="After launch, DILGS can keep the system updated, monitored, and commercially clean." /><Link href="/maintenance" className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center">Start Monthly Growth Care</Link></div><div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">{care.map(([title, price, text]) => <Card key={title} title={`${title} ${price}`} text={text} />)}</div></Shell>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="bg-brand-yellow rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-8 md:p-10 text-center shadow-[8px_8px_0px_rgba(45,30,24,1)]">
            <span className="text-xs font-mono tracking-widest text-brand-brown/70 font-black uppercase">FREE AUDIT</span>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-brown uppercase tracking-tight font-black mt-4 max-w-3xl mx-auto">Find the gaps before implementation</h2>
            <p className="max-w-2xl mx-auto mt-4 text-brand-brown/75 text-sm sm:text-base leading-relaxed font-semibold">Submit your gastronomy business for review. Qualified businesses can receive a private proposal and deposit payment page.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7">
              <Link href="/audit" className="bubble-btn bg-brand-brown text-white px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center">Get Free Audit</Link>
              <a href="#pricing" className="bubble-btn bg-white text-brand-brown px-7 py-4 rounded-full font-display font-black uppercase tracking-wider text-xs text-center">View Pricing</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-[32px] border-[3px] border-brand-brown p-6 sm:p-8 flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <p className="font-display text-3xl text-brand-brown font-black">Dilgs<span className="text-brand-orange">.</span></p>
            <p className="mt-2 text-sm text-brand-brown/65 font-semibold max-w-md">Premium digital presence systems for gastronomy businesses in the United States.</p>
            <p className="mt-3 text-xs text-brand-brown/55 font-bold">Payments processed securely by Stripe. Full card numbers are not stored by DILGS.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-display uppercase tracking-wider font-black"><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/refunds">Refunds</Link></div>
        </div>
      </footer>
    </div>
  );
}
