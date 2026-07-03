import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Link } from "wouter";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<"leads" | "payments" | "projects">("leads");

  if (loading) {
    return <div className="min-h-screen bg-cream flex items-center justify-center">Loading...</div>;
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bento-card p-12 max-w-md text-center">
          <h1 className="text-3xl font-bold text-brand-brown mb-4">Access Denied</h1>
          <p className="text-brand-brown mb-8">You don't have permission to access this page.</p>
          <Link href="/">
            <button className="bubble-btn bubble-btn--yellow w-full">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-display font-bold mb-8 text-brand-brown">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("leads")}
            className={`bubble-btn ${activeTab === "leads" ? "bubble-btn--yellow" : "bubble-btn--outline"}`}
          >
            Leads
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`bubble-btn ${activeTab === "payments" ? "bubble-btn--yellow" : "bubble-btn--outline"}`}
          >
            Payments
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`bubble-btn ${activeTab === "projects" ? "bubble-btn--yellow" : "bubble-btn--outline"}`}
          >
            Projects
          </button>
        </div>

        {/* Content */}
        <div className="bento-card p-8">
          {activeTab === "leads" && (
            <div>
              <h2 className="text-2xl font-bold text-brand-brown mb-4">Recent Leads</h2>
              <div className="text-brand-brown">No leads yet. Check back soon!</div>
            </div>
          )}

          {activeTab === "payments" && (
            <div>
              <h2 className="text-2xl font-bold text-brand-brown mb-4">Recent Payments</h2>
              <div className="text-brand-brown">No payments yet. Check back soon!</div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h2 className="text-2xl font-bold text-brand-brown mb-4">Active Projects</h2>
              <div className="text-brand-brown">No projects yet. Check back soon!</div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link href="/">
            <button className="bubble-btn bubble-btn--outline">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
