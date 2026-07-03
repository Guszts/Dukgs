import { useState } from "react";
import { Link } from "wouter";

const heroPills = [
  "PREMIUM WEBSITE",
  "MENU SYSTEM",
  "RESERVATION FLOW",
  "LOCAL PRESENCE",
  "REVIEW STRUCTURE",
  "ORDER FLOW",
  "MONTHLY CARE",
];

const ribbonLabels = [
  "RESTAURANTS",
  "BAKERIES",
  "CAFÉS",
  "SUSHI",
  "PATISSERIES",
  "CATERING",
  "MENUS",
  "RESERVATIONS",
  "ORDERS",
  "REVIEWS",
  "LOCAL SEO",
  "MAINTENANCE",
];

const problems = [
  "Weak mobile experience",
  "Poor menu presentation",
  "No clear reservation flow",
  "No custom order flow",
  "No catering or event page",
  "Weak local search structure",
  "Underused reviews",
  "No clear brand story",
  "No tracking",
  "No monthly update system",
  "Too much dependence on Instagram",
  "Too much dependence on third-party delivery platforms",
];

const tabs: Record<string, string[]> = {
  Strategy: [
    "Digital presence audit",
    "Brand positioning review",
    "Website structure planning",
    "Customer journey planning",
    "Conversion path planning",
    "Offer and menu priority map",
    "Competitor reference review",
    "Page architecture",
    "CTA strategy",
  ],
  Website: [
    "Premium homepage",
    "About section",
    "Menu page",
    "Contact page",
    "Reservation section",
    "Order and inquiry section",
    "Review section",
    "Location section",
    "FAQ section",
    "Mobile-first layout",
    "Fast responsive interface",
    "Premium visual hierarchy",
  ],
  Menu: [
    "Organized menu structure",
    "Featured items section",
    "Category-based menu layout",
    "Best-seller highlights",
    "Dietary notes structure if needed",
    "High-value product presentation",
    "Menu CTA placement",
    "Mobile-friendly menu experience",
  ],
  Reservations: [
    "Reservation CTA structure",
    "Booking link integration",
    "Private event inquiry flow",
    "Table booking section",
    "Confirmation path",
    "Contact fallback",
    "Reservation-focused copy",
  ],
  Orders: [
    "Custom order inquiry flow",
    "Catering order structure",
    "Pickup and delivery CTA structure",
    "Third-party delivery link placement",
    "Direct order section",
    "Product showcase",
    "Inquiry form",
    "Thank-you page",
  ],
  "Local Presence": [
    "Local SEO foundation",
    "Location structure",
    "Google Business Profile improvement guidance",
    "Service and category recommendations",
    "Business description improvement",
    "Local trust sections",
    "Map and location section",
    "Opening hours presentation",
  ],
  Reviews: [
    "Review section design",
    "Testimonial cards",
    "Review request structure",
    "Social proof placement",
    "Google review CTA",
    "Trust signal hierarchy",
    "Customer experience highlights",
  ],
  Tracking: [
    "Google Analytics setup",
    "Search Console setup",
    "Form conversion tracking",
    "Reservation click tracking",
    "Order click tracking",
    "Click-to-call tracking",
    "Basic event structure",
    "Launch checklist",
    "Reporting foundation",
  ],
  Content: [
    "Website copywriting",
    "Brand story copy",
    "Menu section copy",
    "CTA copy",
    "FAQ copy",
    "Offer descriptions",
    "Google Business Profile post ideas",
    "Social post ideas",
    "Promotion section copy",
  ],
  Launch: [
    "Domain connection support",
    "Technical checks",
    "Mobile testing",
    "Form testing",
    "Reservation link testing",
    "Order link testing",
    "Speed review",
    "SEO basics",
    "Final launch checklist",
  ],
  Support: [
    "30-day post-launch care",
    "Small corrections",
    "Basic guidance",
    "Recorded walkthrough",
    "Handoff documentation",
    "Maintenance offer",
    "Email-based support",
  ],
};

const before = [
  "Generic website",
  "Weak mobile experience",
  "Menu hard to navigate",
  "No clear reservation path",
  "No custom order path",
  "Underused reviews",
  "Weak local visibility structure",
  "No tracking",
  "No update rhythm",
  "Too dependent on social media",
];

const after = [
  "Premium digital presence",
  "Mobile-first experience",
  "Clear menu structure",
  "Clear reservation flow",
  "Order and inquiry flow",
  "Trust-focused review sections",
  "Local SEO foundation",
  "Tracking foundation",
  "Monthly care available",
  "Stronger brand experience",
];

const process = [
  ["01", "Audit", "Review the current website, search presence, menu structure, reservation path, order flow, and visible trust gaps."],
  ["02", "Scope", "Define the fixed implementation structure, payment plan, content requirements, and launch path."],
  ["03", "Onboarding", "Collect brand assets, menu files, booking links, delivery links, locations, approvals, and operational details."],
  ["04", "Build", "Create the premium digital presence system with mobile-first UX, copy, tracking, and conversion paths."],
  ["05", "Launch", "Test forms, links, tracking, speed, mobile layouts, and launch readiness before final release."],
  ["06", "Care", "Move into monthly update, monitoring, content, and improvement support when selected."],
];

const carePlans = [
  ["Essential Care", "$500/month", "Core updates, minor corrections, basic monitoring, and support."],
  ["Growth Care", "$750/month", "More active updates, conversion review, content assistance, and monthly improvement work."],
  ["Authority Care", "$1,500/month", "Higher-touch care for multi-location brands, campaigns, content structure, and deeper reporting."],
];

const faqs = [
  ["Is the implementation price fixed?", "The standard implementation is $10,000 for the defined Gastronomy Digital Presence System scope. Extra tools, paid software, ad spend, domains, hosting, booking platforms, delivery fees, and third-party subscriptions are separate unless agreed in writing."],
  ["When does the 30-day timeline start?", "The 30-day implementation timeline starts after onboarding materials are received and the project scope is confirmed."],
  ["Can restaurants use their current booking or ordering tools?", "Yes. Existing reservation, delivery, pickup, catering, and order links can be integrated into a stronger website flow."],
  ["Does DILGS guarantee more reservations or sales?", "No. DILGS improves presentation, structure, tracking, and customer flow. Results depend on the business, market, offer, operations, and traffic sources."],
  ["Can I start with maintenance only?", "Maintenance is primarily for active DILGS clients, but qualified gastronomy brands can request a review through the audit form."],
];

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bento-card p-7 md:p-8">
      <h3 className="mb-5 text-2xl">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-brown md:text-base">
            <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-brand-brown" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Strategy");
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ["Problem", "System", "What's Included", "Process", "Pricing", "Maintenance", "FAQ"];

  return (
    <div className="min-h-screen bg-cream text-brand-brown">
      <div className="grain-overlay" />

      <header className="sticky top-0 z-50 border-b-3 border-brand-brown bg-cream/95 backdrop-blur">
        <div className="container flex min-h-20 items-center justify-between gap-6 py-4">
          <Link href="/" className="font-display text-3xl tracking-tight text-brand-brown">DILGS</Link>
          <nav className="hidden items-center gap-5 text-sm font-bold lg:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`} className="hover:opacity-70">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#portfolio" className="bubble-btn bubble-btn--outline">View Portfolio</a>
            <Link href="/audit" className="bubble-btn bubble-btn--yellow">Get Free Audit</Link>
          </div>
          <button className="bubble-btn bubble-btn--outline lg:hidden" onClick={() => setMenuOpen((value) => !value)}>
            Menu
          </button>
        </div>
        {menuOpen && (
          <div className="border-t-3 border-brand-brown bg-cream px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-base font-bold">
              {nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <Link href="/audit" className="bubble-btn bubble-btn--yellow text-center">Get Free Audit</Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="px-5 py-20 md:py-28">
          <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-slide-in-left">
              <div className="mb-7 flex flex-wrap gap-2">
                {heroPills.map((pill, index) => (
                  <span key={pill} className={`pill-label ${index % 5 === 0 ? "pill-label--yellow" : index % 5 === 1 ? "pill-label--orange" : index % 5 === 2 ? "pill-label--green" : index % 5 === 3 ? "pill-label--blue" : "pill-label--purple"}`}>
                    {pill}
                  </span>
                ))}
              </div>
              <h1 className="max-w-5xl text-6xl md:text-7xl lg:text-8xl">
                Your Gastronomy Brand Needs More Than a Beautiful Website
              </h1>
              <p className="mt-7 max-w-3xl text-lg md:text-xl">
                DILGS builds premium digital presence systems for restaurants, bakeries, cafés, sushi brands, catering businesses, and gastronomy brands that need stronger trust, better presentation, better reservation flow, better order flow, and a more professional online experience.
              </p>
              <p className="mt-5 max-w-2xl text-base md:text-lg">
                A complete system for your website, menu structure, reservations, custom orders, local presence, reviews, tracking, and post-launch care.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/audit" className="bubble-btn bubble-btn--yellow text-center">Get Free Audit</Link>
                <a href="#portfolio" className="bubble-btn bubble-btn--outline text-center">View Portfolio</a>
              </div>
            </div>
            <div className="animate-slide-in-right bento-card bg-brand-yellow p-6 md:p-8">
              <div className="rounded-[32px] border-3 border-brand-brown bg-cream p-6">
                <p className="font-display text-5xl">DILGS</p>
                <p className="mt-2 font-bold uppercase tracking-[0.2em]">Gastronomy Digital Presence System</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {["$10,000 implementation", "30-day build window", "$5,000 deposit", "Monthly Growth Care"].map((item) => (
                  <div key={item} className="rounded-[28px] border-3 border-brand-brown bg-white p-5 font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="dark-ribbon py-6">
          <div className="container flex flex-wrap items-center justify-center gap-3 text-sm font-black tracking-wide text-cream">
            {ribbonLabels.map((label, index) => (
              <span key={label} className="inline-flex items-center gap-3">
                <span>{label}</span>
                {index < ribbonLabels.length - 1 && <span className="opacity-35">/</span>}
              </span>
            ))}
          </div>
        </section>

        <section id="problem" className="bg-cream-dark">
          <div className="container">
            <div className="max-w-4xl">
              <span className="pill-label pill-label--orange">PROBLEM</span>
              <h2 className="mt-5">Most Gastronomy Websites Look Nice but Still Lose Customers</h2>
              <p className="mt-5 text-lg">A beautiful website is not enough. Your digital presence needs to guide visitors toward reservations, orders, inquiries, and trust.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((item) => (
                <div key={item} className="bento-card p-6 font-bold">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="system">
          <div className="container">
            <span className="pill-label pill-label--green">SYSTEM</span>
            <div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2>The DILGS Gastronomy Growth System</h2>
                <p className="mt-5 text-lg">DILGS connects the visual brand, website, menu, reservations, orders, reviews, local presence, tracking, and ongoing updates into one complete digital presence system.</p>
              </div>
              <div className="bento-card bg-brand-brown p-6 text-white">
                <div className="grid gap-3 md:grid-cols-2">
                  {["Visitor", "Brand Trust", "Menu or Offer", "Reservation / Order / Inquiry", "Tracking", "Follow-Up", "Monthly Updates"].map((step, index) => (
                    <div key={step} className="rounded-[28px] border-3 border-cream bg-cream p-5 text-brand-brown">
                      <span className="font-display text-2xl">{String(index + 1).padStart(2, "0")}</span>
                      <p className="mt-1 font-bold">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bento-card bg-brand-yellow p-8">
                <span className="pill-label pill-label--purple">MAIN OFFER</span>
                <h2 className="mt-5">Gastronomy Digital Presence System</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[30px] border-3 border-brand-brown bg-white p-6">
                    <p className="font-display text-5xl">$10,000</p>
                    <p className="font-bold">Total implementation</p>
                  </div>
                  <div className="rounded-[30px] border-3 border-brand-brown bg-white p-6">
                    <p className="font-display text-5xl">30 Days</p>
                    <p className="font-bold">After materials are received</p>
                  </div>
                </div>
                <p className="mt-6 font-bold">$5,000 upfront. $5,000 before launch.</p>
                <p className="mt-3">Alternative structure available: $4,000 upfront, $3,000 after design approval, $3,000 before launch.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/audit" className="bubble-btn bubble-btn--brown text-center">Request Free Audit</Link>
                  <Link href="/deposit/standard" className="bubble-btn bubble-btn--outline text-center">Pay Project Deposit</Link>
                </div>
              </div>
              <ListCard
                title="Included in the fixed scope"
                items={[
                  "Premium custom website",
                  "Conversion-focused homepage",
                  "Menu structure",
                  "Reservation flow",
                  "Custom order flow",
                  "Catering or event inquiry page",
                  "Product showcase",
                  "Reviews and testimonial structure",
                  "Local SEO foundation",
                  "Google Business Profile improvement guidance",
                  "Tracking setup",
                  "Conversion copywriting",
                  "Mobile-first design",
                  "Launch support",
                  "30-day post-launch care",
                ]}
              />
            </div>
            <div className="mt-6 rounded-[28px] border-3 border-brand-brown bg-cream-dark p-6 text-sm font-semibold">
              External tools, ad spend, paid software, hosting, domain, booking platforms, delivery platform fees, and third-party subscriptions are not included unless separately agreed.
            </div>
          </div>
        </section>

        <section id="whats-included">
          <div className="container">
            <span className="pill-label pill-label--blue">WHAT YOU RECEIVE</span>
            <h2 className="mt-5">A complete implementation stack, organized by customer flow</h2>
            <div className="mt-8 flex gap-3 overflow-x-auto pb-3 custom-scrollbar">
              {Object.keys(tabs).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`bubble-btn whitespace-nowrap ${activeTab === tab ? "bubble-btn--yellow" : "bubble-btn--outline"}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-7 bento-card p-7 md:p-10">
              <h3 className="mb-6">{activeTab}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {tabs[activeTab].map((item) => (
                  <div key={item} className="rounded-[24px] border-2 border-brand-brown bg-cream p-4 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-cream-dark">
          <div className="container">
            <span className="pill-label pill-label--yellow">PORTFOLIO STYLE</span>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2>Built with the same DILGS visual language</h2>
                <p className="mt-5 text-lg">The offer site uses the same rounded editorial rhythm, bold type, warm background, colorful labels, dark ribbons, and premium card structure from the finished DILGS portfolio.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {["Editorial hero", "Rounded cards", "Premium flow"].map((item) => (
                  <div key={item} className="bento-card p-6">
                    <p className="font-display text-3xl">{item}</p>
                    <p className="mt-4 text-sm">A sales-focused translation of the DILGS portfolio system.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container grid gap-6 lg:grid-cols-2">
            <ListCard title="Before" items={before} />
            <ListCard title="After" items={after} />
          </div>
        </section>

        <section className="dark-ribbon">
          <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="pill-label pill-label--yellow">WHY $10,000</span>
              <h2 className="mt-5">Why This Is a $10,000 Implementation</h2>
              <p className="mt-5 text-cream">This is not a basic restaurant website. This is a full digital presence implementation built around brand trust, menu presentation, reservation flow, order flow, local presence, tracking, testing, launch support, and post-launch care.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {["Complete system, not just pages", "Built for gastronomy customer behavior", "Premium visual presentation", "Clear reservation and order paths", "Fixed strategic scope with launch support"].map((item) => (
                <div key={item} className="rounded-[28px] border-3 border-cream bg-cream p-5 font-bold text-brand-brown">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white">
          <div className="container">
            <span className="pill-label pill-label--green">PROCESS</span>
            <h2 className="mt-5">From free audit to launch and monthly care</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {process.map(([number, title, text]) => (
                <div key={number} className="bento-card p-7">
                  <p className="font-display text-5xl text-brand-yellow">{number}</p>
                  <h3 className="mt-4">{title}</h3>
                  <p className="mt-3">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="maintenance" className="bg-cream-dark">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="pill-label pill-label--purple">MAINTENANCE</span>
                <h2 className="mt-5">Monthly Growth Care</h2>
                <p className="mt-4 max-w-2xl text-lg">Post-launch care for updates, monitoring, content improvements, technical checks, and billing through Stripe subscriptions.</p>
              </div>
              <Link href="/maintenance" className="bubble-btn bubble-btn--yellow text-center">Start Monthly Growth Care</Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {carePlans.map(([name, price, text]) => (
                <div key={name} className="bento-card p-7">
                  <h3>{name}</h3>
                  <p className="mt-3 font-display text-4xl">{price}</p>
                  <p className="mt-4">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <span className="pill-label pill-label--orange">FAQ</span>
            <h2 className="mt-5">Commercial terms without inflated claims</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <div key={question} className="bento-card p-7">
                  <h3>{question}</h3>
                  <p className="mt-4">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-ribbon text-center">
          <div className="container max-w-4xl">
            <span className="pill-label pill-label--yellow">FREE AUDIT</span>
            <h2 className="mt-5">Find the gaps before you pay for implementation</h2>
            <p className="mx-auto mt-5 max-w-2xl text-cream">Submit your gastronomy business for a review. Qualified businesses can receive a private proposal and payment link for the upfront deposit.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/audit" className="bubble-btn bubble-btn--yellow text-center">Get Free Audit</Link>
              <a href="#pricing" className="bubble-btn bubble-btn--outline border-cream text-center text-cream">View Pricing</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
