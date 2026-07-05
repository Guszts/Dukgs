import { createElement, useState } from "react";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalSection } from "@/components/BrutalSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const h = createElement;

const COLUMNS = [
  "Company", "Niche", "Website", "Country", "Decision maker", "Email", 
  "WhatsApp/LinkedIn", "Status", "First contact date", "Last contact", 
  "Next follow-up", "Objection", "Offered value", "Checkout sent", "Paid"
];

const STATUSES = [
  "New", "Qualified", "Contacted", "Interested", "Audit sent", 
  "Checkout sent", "Paid", "Lost", "Follow-up later"
];

export default function LeadCRM() {
  const [leads] = useState([
    {
      Company: "Example Corp",
      Niche: "Real Estate",
      Website: "example.com",
      Country: "USA",
      "Decision maker": "John Doe",
      Email: "john@example.com",
      "WhatsApp/LinkedIn": "linkedin.com/in/johndoe",
      Status: "New",
      "First contact date": "2024-03-20",
      "Last contact": "2024-03-20",
      "Next follow-up": "2024-03-25",
      Objection: "-",
      "Offered value": "US$10,000",
      "Checkout sent": "No",
      Paid: "No"
    }
  ]);

  const downloadCSV = () => {
    const headers = COLUMNS.join(",");
    const rows = leads.map(lead => 
      COLUMNS.map(col => `"${lead[col as keyof typeof lead] || ""}"`).join(",")
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "leads_crm.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return h(
    "div",
    { className: "min-h-screen bg-white" },
    h(Header),
    h(
      BrutalSection,
      { className: "pt-32 pb-20" },
      h(
        "div",
        { className: "max-w-full overflow-x-auto" },
        h(
          "div",
          { className: "flex justify-between items-end mb-8 gap-4" },
          h(
            "div",
            null,
            h(
              "h1",
              { className: "text-5xl font-black uppercase tracking-tighter" },
              "Lead CRM"
            ),
            h("p", { className: "font-bold opacity-70" }, "Simple outbound sales tracking structure")
          ),
          h(
            "button",
            { 
              onClick: downloadCSV,
              className: "bg-black text-white px-6 py-3 font-black uppercase hover:translate-x-1 hover:-translate-y-1 transition-transform"
            },
            "Download CSV Template"
          )
        ),

        h(
          BrutalCard,
          { className: "p-0 overflow-hidden" },
          h(
            "div",
            null,
            h(
              "table",
              { className: "w-full text-left border-collapse" },
              h(
                "thead",
                { className: "bg-black text-white" },
                h(
                  "tr",
                  null,
                  COLUMNS.map(col => h("th", { key: col, className: "p-4 font-black uppercase text-xs whitespace-nowrap border-r border-white/20" }, col))
                )
              ),
              h(
                "tbody",
                null,
                leads.map((lead, i) => h(
                  "tr",
                  { key: i, className: "border-b-4 border-black" },
                  COLUMNS.map(col => h(
                    "td", 
                    { key: col, className: "p-4 font-bold text-sm whitespace-nowrap border-r-4 border-black" },
                    col === "Status" ? h(
                      "select",
                      { className: "bg-yellow-400 border-2 border-black p-1 font-black text-xs uppercase", defaultValue: lead.Status },
                      STATUSES.map(s => h("option", { key: s, value: s }, s))
                    ) : lead[col as keyof typeof lead]
                  ))
                ))
              )
            )
          )
        )
      )
    ),
    h(Footer)
  );
}
