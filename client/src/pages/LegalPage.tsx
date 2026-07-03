import { createElement as h } from "react";
import { Link } from "wouter";

const policies: Record<string, { title: string; intro: string; sections: [string, string][] }> = {
  "/terms": {
    title: "Terms of Use",
    intro: "These terms describe how visitors, leads, and clients may use the DILGS website, audit form, payment pages, onboarding forms, and related digital services.",
    sections: [
      ["Service Scope", "DILGS provides premium digital presence implementation services for gastronomy businesses. The public website explains the standard offer, payment structure, maintenance options, and qualification process."],
      ["No Guaranteed Business Outcome", "DILGS does not guarantee revenue, reservations, rankings, sales, leads, traffic, customer volume, or third-party platform results. Outcomes depend on the business, market, offer, operations, and traffic sources."],
      ["Payments", "Payments are processed securely through Stripe. A project may require an upfront deposit, milestone payment, final payment, or subscription payment depending on the accepted proposal."],
      ["Client Materials", "Project timelines depend on receiving complete onboarding materials, including brand assets, menus, photos, booking links, order links, locations, approvals, and business information."],
      ["Third-Party Costs", "External tools, ad spend, paid software, domains, hosting, booking systems, delivery platforms, and third-party subscriptions are not included unless separately agreed."],
      ["Contact", "Questions about these terms can be sent to the DILGS contact email shown on the website footer."],
    ],
  },
  "/privacy": {
    title: "Privacy Policy",
    intro: "This policy explains what information DILGS collects through the website, audit form, payment pages, onboarding forms, and client communication flows.",
    sections: [
      ["Information Collected", "DILGS may collect names, business names, business emails, website URLs, business categories, locations, project goals, current problems, onboarding details, payment status, and Stripe customer or session identifiers."],
      ["How Information Is Used", "Information is used to review audit requests, qualify leads, prepare proposals, create payment sessions, manage onboarding, track project status, and provide maintenance services."],
      ["Payment Data", "DILGS does not store full card numbers. Payment details are handled by Stripe. DILGS stores payment status and Stripe identifiers needed for records and billing management."],
      ["Database", "Lead, project, onboarding, payment, and maintenance records may be stored in Supabase with access controls and server-side keys."],
      ["Data Sharing", "Information may be shared with service providers needed to operate the website, payments, database, project delivery, and communication workflows."],
      ["Contact", "Privacy questions can be sent to the DILGS contact email shown on the website footer."],
    ],
  },
  "/cookies": {
    title: "Cookie Policy",
    intro: "This policy explains how cookies and similar technologies may be used on the DILGS website.",
    sections: [
      ["Essential Cookies", "Essential cookies may be used to keep the website secure, remember basic session behavior, and allow payment or form flows to function."],
      ["Analytics", "Analytics or tracking tools may be used to understand page visits, form interactions, reservation clicks, order clicks, and conversion paths."],
      ["Third-Party Tools", "Stripe, Supabase, analytics tools, booking platforms, or embedded services may use their own cookies or similar technologies."],
      ["Browser Controls", "Visitors can manage cookies through browser settings. Blocking cookies may affect forms, checkout, or session-based features."],
    ],
  },
  "/refunds": {
    title: "Payment and Refund Policy",
    intro: "This policy explains the payment structure, project deposits, final payments, subscriptions, cancellations, and refund limitations.",
    sections: [
      ["Implementation Price", "The standard Gastronomy Digital Presence System implementation is $10,000 unless a custom proposal states otherwise."],
      ["Standard Payment Structure", "The standard structure is $5,000 upfront to start and $5,000 before launch."],
      ["Alternative Payment Structure", "When approved, the alternative structure is $4,000 upfront, $3,000 after design approval, and $3,000 before launch."],
      ["Deposits", "Deposits reserve production capacity, start planning, and begin implementation work. Deposit refund eligibility depends on the signed proposal or service agreement."],
      ["Maintenance", "Monthly Growth Care is billed as a recurring subscription through Stripe. Cancellation and billing management may be handled through Stripe Customer Portal when available."],
      ["No Revenue Guarantee", "Payments are for professional implementation and care services, not guaranteed commercial results."],
    ],
  },
};

function getPolicy() {
  return policies[window.location.pathname] || policies["/terms"];
}

export default function LegalPage() {
  const policy = getPolicy();
  return h("div", { className: "min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12" },
    h("div", { className: "grain-overlay" }),
    h("div", { className: "max-w-5xl mx-auto" },
      h("div", { className: "mb-6 flex items-center justify-between" },
        h(Link, { href: "/", className: "font-display text-2xl sm:text-3xl text-brand-brown font-black" }, "Dilgs", h("span", { className: "text-brand-orange" }, ".")),
        h(Link, { href: "/", className: "bubble-btn bg-white text-brand-brown px-5 py-2.5 rounded-full font-display text-xs uppercase tracking-wider font-black" }, "Back")
      ),
      h("div", { className: "bento-card bg-white rounded-[40px] sm:rounded-[54px] border-[3px] border-brand-brown p-6 sm:p-8 md:p-12" },
        h("p", { className: "text-xs font-mono tracking-widest text-brand-orange font-black uppercase" }, "DILGS LEGAL"),
        h("h1", { className: "mt-4 font-display text-4xl sm:text-5xl text-brand-brown uppercase leading-tight tracking-tight font-black" }, policy.title),
        h("p", { className: "mt-5 text-brand-brown/75 font-medium leading-relaxed max-w-3xl" }, policy.intro),
        h("div", { className: "mt-8 grid gap-5" },
          ...policy.sections.map(([title, text]) => h("section", { key: title, className: "bg-cream rounded-[28px] border-[3px] border-brand-brown p-5 sm:p-6" },
            h("h2", { className: "font-display text-xl sm:text-2xl uppercase text-brand-brown font-black" }, title),
            h("p", { className: "mt-3 text-sm sm:text-base text-brand-brown/75 font-medium leading-relaxed" }, text)
          ))
        ),
        h("p", { className: "mt-8 text-xs text-brand-brown/55 font-semibold" }, "Template notice: this page is operational website copy and should be reviewed by a qualified attorney before launch.")
      )
    )
  );
}
