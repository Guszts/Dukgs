import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Users } from 'lucide-react';

const COLUMNS = [
  "Company", "Niche", "Website", "Country", "Decision Maker", "Email",
  "WhatsApp / LinkedIn", "Status", "First Contact", "Last Contact",
  "Next Follow-up", "Objection", "Offered Value", "Checkout Sent", "Paid"
];

const STATUSES = [
  "New", "Qualified", "Contacted", "Interested", "Audit Sent",
  "Checkout Sent", "Paid", "Lost", "Follow-up Later"
];

const statusColors: Record<string, string> = {
  "New": "bg-cream text-brand-brown",
  "Qualified": "bg-brand-blue/20 text-brand-blue",
  "Contacted": "bg-brand-purple/20 text-brand-purple",
  "Interested": "bg-brand-yellow text-brand-brown",
  "Audit Sent": "bg-brand-orange/20 text-brand-orange",
  "Checkout Sent": "bg-brand-orange text-white",
  "Paid": "bg-brand-green text-white",
  "Lost": "bg-red-100 text-red-700",
  "Follow-up Later": "bg-cream-dark text-brand-brown",
};

export default function LeadCRM() {
  const downloadCSV = () => {
    const headers = COLUMNS.join(",");
    const blob = new Blob([headers], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "dilgs_leads_crm.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-brown">
      <div className="grain-overlay" />

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-[3px] border-brand-brown">
        <div className="bg-brand-purple text-white py-2 px-4 border-b-[3px] border-brand-brown">
          <div className="flex justify-center items-center text-[10px] sm:text-xs font-display tracking-wider max-w-7xl mx-auto">
            <div className="uppercase font-bold text-brand-yellow">Internal Tool — Keep lead data in a private CRM</div>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bento-card bg-white rounded-[34px] sm:rounded-[44px] border-[3px] border-brand-brown p-6 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-7 h-7 text-brand-orange" />
                <span className="text-xs font-mono tracking-widest text-brand-orange font-black uppercase">Internal Tool</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl text-brand-brown uppercase leading-tight tracking-tight font-black">
                Lead CRM
              </h1>
              <div className="h-1.5 w-20 bg-brand-orange rounded-full" />
              <p className="text-brand-brown/75 text-sm leading-relaxed font-semibold max-w-xl">
                Simple outbound sales tracking structure. This is a blank template — add real lead data only inside your private CRM, Google Sheet, Airtable, Notion, or database.
              </p>
            </div>
            <motion.button
              onClick={downloadCSV}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bubble-btn bg-brand-yellow hover:bg-brand-yellow-hover text-brand-brown px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider font-black flex items-center gap-2 shrink-0"
            >
              <Download className="w-4 h-4" />
              Download CSV Template
            </motion.button>
          </div>
        </motion.div>

        {/* ── Status Legend ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {STATUSES.map((status) => (
            <span
              key={status}
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-display font-black uppercase tracking-wider border-2 border-brand-brown ${statusColors[status] || 'bg-cream text-brand-brown'}`}
            >
              {status}
            </span>
          ))}
        </motion.div>

        {/* ── Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 80 }}
          className="bento-card bg-white rounded-[28px] border-[3px] border-brand-brown overflow-hidden"
        >
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-brand-brown text-cream">
                  {COLUMNS.map((col) => (
                    <th
                      key={col}
                      className="p-4 font-display font-black uppercase text-[10px] tracking-wider whitespace-nowrap border-r border-white/10 last:border-r-0"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={COLUMNS.length}
                    className="p-10 text-center font-bold text-sm text-brand-brown/50 italic"
                  >
                    Blank CRM template. Add real lead data only inside your private CRM, Google Sheet, Airtable, Notion, or database.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── Column Reference ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bento-card bg-cream rounded-[28px] border-[3px] border-brand-brown p-6 sm:p-8"
        >
          <h2 className="font-display text-xl uppercase text-brand-brown font-black mb-6">Column Reference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {COLUMNS.map((col, idx) => (
              <div
                key={col}
                className="flex items-center gap-3 bg-white rounded-xl border-2 border-brand-brown px-4 py-3"
              >
                <span className="text-[10px] font-mono text-brand-orange font-black w-5 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-brand-brown">{col}</span>
              </div>
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
