import { createElement, useState, ChangeEvent } from "react";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalSection } from "@/components/BrutalSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const h = createElement;

export default function Onboarding() {
  const [formData, setFormData] = useState({
    businessName: "",
    currentWebsite: "",
    mainObjective: "",
    targetAudience: "",
    productsServices: "",
    referenceWebsites: "",
    requiredLogins: "",
    desiredIntegrations: "",
    brandTone: "",
    desiredLaunchDate: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copySummary = () => {
    const summary = `
ONBOARDING SUMMARY
------------------
Business Name: ${formData.businessName}
Current Website: ${formData.currentWebsite}
Main Objective: ${formData.mainObjective}
Target Audience: ${formData.targetAudience}
Products/Services/Menu: ${formData.productsServices}
Reference Websites/Styles: ${formData.referenceWebsites}
Required Logins/Access: ${formData.requiredLogins}
Desired Integrations: ${formData.desiredIntegrations}
Brand Tone: ${formData.brandTone}
Desired Launch Date: ${formData.desiredLaunchDate}
    `.trim();
    
    navigator.clipboard.writeText(summary);
    alert("Onboarding summary copied to clipboard!");
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
        { className: "max-w-3xl mx-auto" },
        h(
          "h1",
          { className: "text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter" },
          "Onboarding"
        ),
        
        h(
          "div",
          { className: "mb-12 space-y-4 font-bold border-l-8 border-black pl-6" },
          h("p", null, "• Work starts after payment review, scope confirmation, and complete onboarding materials."),
          h("p", null, "• Incomplete materials can pause the delivery timeline."),
          h("p", null, "• Client is responsible for accurate information and access.")
        ),

        h(
          BrutalCard,
          { variant: "yellow" },
          h(
            "div",
            null,
            h(
              "form",
              { className: "space-y-6" },
              [
                { label: "Business name", name: "businessName", type: "input" },
                { label: "Current website", name: "currentWebsite", type: "input" },
                { label: "Main objective", name: "mainObjective", type: "textarea" },
                { label: "Target audience", name: "targetAudience", type: "textarea" },
                { label: "Products/services/menu", name: "productsServices", type: "textarea" },
                { label: "Reference websites or styles", name: "referenceWebsites", type: "textarea" },
                { label: "Required logins/access", name: "requiredLogins", type: "textarea" },
                { label: "Desired integrations", name: "desiredIntegrations", type: "textarea" },
                { label: "Brand tone", name: "brandTone", type: "input" },
                { label: "Desired launch date", name: "desiredLaunchDate", type: "input" }
              ].map(field => h(
                "div",
                { key: field.name, className: "space-y-2" },
                h("label", { className: "block font-black uppercase text-sm" }, field.label),
                h(field.type === "input" ? "input" : "textarea", {
                  name: field.name,
                  value: formData[field.name as keyof typeof formData],
                  onChange: handleChange,
                  className: "w-full border-4 border-black p-3 font-bold focus:bg-white outline-none bg-yellow-50",
                  rows: field.type === "textarea" ? 3 : undefined
                })
              )),
              h(
                "button",
                {
                  type: "button",
                  onClick: copySummary,
                  className: "w-full bg-black text-white py-4 font-black uppercase text-xl hover:translate-x-1 hover:-translate-y-1 transition-transform"
                },
                "Copy onboarding summary"
              )
            )
          )
        )
      )
    ),
    h(Footer)
  );
}
