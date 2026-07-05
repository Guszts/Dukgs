import { useState, ChangeEvent } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ClipboardCopy, CheckCircle2, AlertCircle } from 'lucide-react';

const labelClass = "block text-[11px] font-display uppercase tracking-wider text-brand-brown font-black mb-2";
const inputClass = "w-full bg-white border-[3px] border-brand-brown rounded-2xl px-4 py-3 text-sm font-bold text-brand-brown outline-none focus:ring-4 focus:ring-brand-yellow/60 transition-all";
const textareaClass = `${inputClass} resize-none`;

const fields = [
  { label: "Business Name", name: "businessName", type: "input", placeholder: "e.g. Bella Cucina" },
  { label: "Current Website (if any)", name: "currentWebsite", type: "input", placeholder: "https://..." },
  { label: "Main Objective", name: "mainObjective", type: "textarea", placeholder: "What is the primary goal of this project?" },
  { label: "Target Audience", name: "targetAudience", type: "textarea", placeholder: "Who are your ideal customers?" },
  { label: "Products / Services / Menu", name: "productsServices", type: "textarea", placeholder: "List your main offerings..." },
  { label: "Reference Websites or Styles", name: "referenceWebsites", type: "textarea", placeholder: "Links or descriptions of styles you like..." },
  { label: "Required Logins / Access", name: "requiredLogins", type: "textarea", placeholder: "CMS, Google Analytics, etc." },
  { label: "Desired Integrations", name: "desiredIntegrations", type: "textarea", placeholder: "Booking tools, payment, email, etc." },
  { label: "Brand Tone", name: "brandTone", type: "input", placeholder: "e.g. Warm, premium, casual, bold..." },
  { label: "Desired Launch Date", name: "desiredLaunchDate", type: "input", placeholder: "e.g. August 15, 2026" },
] as const;

type FormData = { [K in (typeof fields)[number]['name']]: string };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

export default function Onboarding() {
  const initialData: FormData = {
    businessName: '', currentWebsite: '', mainObjective: '', targetAudience: '',
    productsServices: '', referenceWebsites: '', requiredLogins: '',
    desiredIntegrations: '', brandTone: '', desiredLaunchDate: '',
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copySummary = () => {
    const summary = `ONBOARDING SUMMARY — DILGS
--------------------------
Business Name: ${formData.businessName}
Current Website: ${formData.currentWebsite}
Main Objective: ${formData.mainObjective}
Target Audience: ${formData.targetAudience}
Products / Services / Menu: ${formData.productsServices}
Reference Websites / Styles: ${formData.referenceWebsites}
Required Logins / Access: ${formData.requiredLogins}
Desired Integrations: ${formData.desiredIntegrations}
Brand Tone: ${formData.brandTone}
Desired Launch Date: ${formData.desiredLaunchDate}`.trim();

    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-brown">
      <div className="grain-overlay" />

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3px] border-brand-brown">
        <div className="bg-brand-purple text-white py-2 px-4 border-b-[3px] border-brand-brown">
          <div className="flex justify-center items-center text-[10px] sm:text-xs font-display tracking-wider max-w-7xl mx-auto">
            <div className="uppercase font-bold text-brand-yellow">Onboarding — Complete all fields before sending</div>
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bento-card bg-white rounded-[34px] sm:rounded-[44px] border-[3px] border-brand-brown p-6 sm:p-10 md:p-14 mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">Client Materials</span>
              <h1 className="font-display text-3xl sm:text-5xl text-brand-brown uppercase leading-tight tracking-tight font-black">
                Project Onboarding
              </h1>
              <div className="h-1.5 w-20 bg-brand-orange rounded-full" />
              <p className="text-brand-brown/75 text-sm sm:text-base leading-relaxed font-semibold max-w-xl">
                Fill in all fields below and use the copy button to send the summary to the project email. Incomplete materials can pause the delivery timeline.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {[
                { icon: AlertCircle, text: "Work starts after payment review, scope confirmation, and complete onboarding materials.", color: "text-brand-orange" },
                { icon: AlertCircle, text: "Incomplete materials can pause the delivery timeline.", color: "text-brand-orange" },
                { icon: CheckCircle2, text: "Client is responsible for accurate information and access.", color: "text-brand-green" },
              ].map(({ icon: Icon, text, color }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 bg-cream rounded-2xl border-2 border-brand-brown px-4 py-3"
                >
                  <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${color}`} />
                  <p className="text-xs font-bold text-brand-brown leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 80 }}
          className="bento-card bg-cream rounded-[34px] border-[3px] border-brand-brown p-6 sm:p-10 shadow-[6px_6px_0px_rgba(45,30,24,1)]"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {fields.map((field) => (
              <motion.div
                key={field.name}
                variants={itemVariants}
                className={field.type === 'textarea' ? 'sm:col-span-2' : ''}
              >
                <label className={labelClass}>{field.label}</label>
                {field.type === 'input' ? (
                  <input
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                ) : (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    rows={3}
                    className={textareaClass}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mt-8 space-y-4"
          >
            <motion.button
              type="button"
              onClick={copySummary}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full bubble-btn py-4 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all ${
                copied
                  ? 'bg-brand-green text-white border-brand-green'
                  : 'bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <ClipboardCopy className="w-5 h-5" />
                  Copy Onboarding Summary
                </>
              )}
            </motion.button>
            <p className="text-[10px] text-center font-bold text-brand-brown/50 uppercase tracking-tighter">
              After copying, send to dilgs.online@gmail.com with subject: Onboarding — [Business Name]
            </p>
          </motion.div>
        </motion.div>

        {/* ── Back CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center pt-8 pb-4"
        >
          <Link
            href="/"
            className="bubble-btn bg-white text-brand-brown px-8 py-4 rounded-full font-display font-black uppercase tracking-wider text-sm flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(45,30,24,1)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
