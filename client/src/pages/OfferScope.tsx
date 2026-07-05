import { createElement } from "react";
import { Link } from "wouter";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalSection } from "@/components/BrutalSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const h = createElement;

export default function OfferScope() {
  return h(
    "div",
    { className: "min-h-screen bg-white" },
    h(Header),
    h(
      BrutalSection,
      { className: "pt-32 pb-20" },
      h(
        "div",
        { className: "max-w-4xl mx-auto" },
        h(
          "h1",
          { className: "text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter" },
          "What the US$10,000 implementation includes"
        ),
        h(
          "p",
          { className: "text-xl mb-12 font-bold border-l-8 border-black pl-6" },
          "The DILGS implementation is a fixed-scope service designed to build a complete digital presence foundation. This ensures speed, quality, and clarity for both parties."
        ),

        h(
          "div",
          { className: "grid gap-8" },
          h(
            BrutalCard,
            { variant: "yellow" },
            h(
              "div",
              null,
              h("h2", { className: "text-3xl font-black mb-6 uppercase" }, "Included"),
              h(
                "ul",
                { className: "grid md:grid-cols-2 gap-4" },
                [
                  "One fixed-scope digital presence system for one business brand or one agreed location group",
                  "Homepage",
                  "About",
                  "Menu or Services",
                  "Location or Contact",
                  "Reviews or Trust",
                  "FAQ",
                  "One conversion page when applicable",
                  "Reservation/order/quote/catering/event/custom-order/contact flows when applicable",
                  "Basic form routing",
                  "Owner/team notification",
                  "Customer confirmation message",
                  "Lead record foundation",
                  "Simple follow-up structure",
                  "Stripe or checkout links",
                  "Google Analytics",
                  "Search Console",
                  "Google Business Profile recommendations",
                  "Map/location embeds",
                  "Booking/order links",
                  "CRM or sheet routing when access is supplied",
                  "Domain, SSL and launch support",
                  "Pre-launch checklist",
                  "Mobile/desktop testing",
                  "Form and link testing",
                  "Handoff document",
                  "30 days of light post-launch corrections"
                ].map((item) => h("li", { key: item, className: "flex items-start gap-2 font-bold" }, h("span", null, "→"), item))
              )
            )
          ),

          h(
            BrutalCard,
            { variant: "default" },
            h(
              "div",
              null,
              h("h2", { className: "text-3xl font-black mb-6 uppercase" }, "Not included"),
              h(
                "ul",
                { className: "grid md:grid-cols-2 gap-4" },
                [
                  "Paid ads",
                  "Ad spend",
                  "Guaranteed traffic",
                  "Guaranteed revenue",
                  "Guaranteed rankings",
                  "Guaranteed sales",
                  "Guaranteed leads",
                  "Professional photography",
                  "Video production",
                  "Full brand identity",
                  "Logo design",
                  "Legal review",
                  "Translation unless separately agreed",
                  "Complex custom software",
                  "Native apps",
                  "Marketplace systems",
                  "POS replacement",
                  "Inventory systems",
                  "Advanced CRM automation",
                  "Third-party subscriptions",
                  "Domains",
                  "Hosting upgrades",
                  "Booking tools",
                  "SMS tools",
                  "Email tools",
                  "Paid plugins",
                  "Unlimited revisions",
                  "Unlimited pages",
                  "Unlimited integrations",
                  "Anything outside approved written scope"
                ].map((item) => h("li", { key: item, className: "flex items-start gap-2 font-bold opacity-70" }, h("span", null, "×"), item))
              )
            )
          ),

          h(
            "div",
            { className: "grid md:grid-cols-2 gap-8" },
            h(
              BrutalCard,
              { variant: "black", className: "text-white" },
              h(
                "div",
                null,
                h("h2", { className: "text-2xl font-black mb-4 uppercase" }, "Revision rule"),
                h(
                  "ul",
                  { className: "space-y-4 font-bold" },
                  h("li", null, "• Up to 2 structured revision rounds before launch"),
                  h("li", null, "• Revisions must stay inside approved scope"),
                  h("li", null, "• New pages, new funnels, new integrations, rebranding, copy rewrites after approval or strategic changes require separate quote")
                )
              )
            ),
            h(
              BrutalCard,
              { variant: "yellow" },
              h(
                "div",
                null,
                h("h2", { className: "text-2xl font-black mb-4 uppercase" }, "Maintenance"),
                h(
                  "ul",
                  { className: "space-y-4 font-bold" },
                  h("li", null, "• Monthly maintenance is separate unless the checkout link or proposal explicitly includes it"),
                  h("li", null, "• Standard monthly care starts at US$997/month when selected")
                )
              )
            )
          ),

          h(
            BrutalCard,
            { variant: "default" },
            h(
              "div",
              null,
              h("h2", { className: "text-3xl font-black mb-6 uppercase" }, "Delivery process"),
              h(
                "div",
                { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" },
                ["Payment review", "Onboarding", "Build", "Review", "Launch", "Care"].map((step, i) =>
                  h(
                    "div",
                    { key: step, className: "border-4 border-black p-4 text-center font-black uppercase" },
                    h("div", { className: "text-sm opacity-50" }, `0${i + 1}`),
                    h("div", null, step)
                  )
                )
              )
            )
          )
        ),

        h(
          "div",
          { className: "mt-12 flex justify-center" },
          h(
            Link,
            { href: "/" },
            h(
              "a",
              { className: "bg-black text-white px-8 py-4 font-black uppercase text-xl hover:translate-x-1 hover:-translate-y-1 transition-transform" },
              "Back to Home"
            )
          )
        )
      )
    ),
    h(Footer)
  );
}
