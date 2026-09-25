"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function HireMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "SaaS",
    budget: "₹50K–₹1L",
    timeline: "1 Month",
    projectDescription: "",
    referenceWebsite: "",
    requiredFeatures: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const projectTypes = [
    { label: "SaaS Platform", value: "SaaS" },
    { label: "Web Application", value: "Website" },
    { label: "Flutter Mobile App", value: "Mobile App" },
    { label: "Admin CRM / Dashboard", value: "Admin Dashboard" },
    { label: "AI Integration / Workflow", value: "AI" },
    { label: "API / Backend Services", value: "API" },
    { label: "E-Commerce", value: "E-commerce" },
    { label: "Other Custom Solution", value: "Other" },
  ];

  const budgets = ["₹25K–₹50K", "₹50K–₹1L", "₹1L–₹3L", "₹3L+"];
  const timelines = ["1-2 Weeks", "1 Month", "2-3 Months", "3+ Months"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDescription) {
      setError("Please fill in all required fields (Name, Email, Project Description).");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit project inquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An unexpected error occurred. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Onboarding</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
            Start Your Next Project
          </h1>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Tell me about your product vision, timeline, and goals. I&apos;ll review your requirements and respond within 24 hours with architecture suggestions and an estimate.
          </p>
        </div>

        {/* Submitted Success View */}
        {submitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 light:bg-white border border-emerald-500/30 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white light:text-slate-900">
                Inquiry Received Successfully!
              </h2>
              <p className="text-sm text-slate-300 light:text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white light:text-slate-900">{formData.name}</strong>. Your project details have been logged in my CRM pipeline. You will receive a personal email reply from Siva at <span className="text-blue-400">{formData.email}</span> shortly.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Browse Past Work & Case Studies
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    projectType: "SaaS",
                    budget: "₹50K–₹1L",
                    timeline: "1 Month",
                    projectDescription: "",
                    referenceWebsite: "",
                    requiredFeatures: "",
                  });
                }}
                className="px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800"
              >
                Submit Another Project
              </button>
            </div>
          </div>
        ) : (
          /* Onboarding Form */
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-2xl space-y-8"
          >
            {/* 1. Project Type Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                1. What kind of product are we building? *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {projectTypes.map((pt) => {
                  const isSelected = formData.projectType === pt.value;
                  return (
                    <button
                      type="button"
                      key={pt.value}
                      onClick={() => setFormData({ ...formData, projectType: pt.value })}
                      className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all border ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20"
                          : "bg-slate-950/60 light:bg-slate-50 text-slate-300 light:text-slate-800 border-white/5 light:border-slate-200 hover:border-white/20"
                      }`}
                    >
                      {pt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Budget Range */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                2. Approximate Estimated Budget *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {budgets.map((b) => {
                  const isSelected = formData.budget === b;
                  return (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`p-3 rounded-2xl text-xs font-semibold text-center transition-all border ${
                        isSelected
                          ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-500/20"
                          : "bg-slate-950/60 light:bg-slate-50 text-slate-300 light:text-slate-800 border-white/5 light:border-slate-200 hover:border-white/20"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Desired Timeline */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                3. Expected Target Timeline *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timelines.map((t) => {
                  const isSelected = formData.timeline === t;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`p-3 rounded-2xl text-xs font-semibold text-center transition-all border ${
                        isSelected
                          ? "bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-500/20"
                          : "bg-slate-950/60 light:bg-slate-50 text-slate-300 light:text-slate-800 border-white/5 light:border-slate-200 hover:border-white/20"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Contact Details */}
            <div className="space-y-4 pt-4 border-t border-white/10 light:border-slate-100">
              <label className="block text-xs font-bold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                4. Your Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Phone / WhatsApp (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Tech Ventures"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 5. Project Description & References */}
            <div className="space-y-4 pt-4 border-t border-white/10 light:border-slate-100">
              <label className="block text-xs font-bold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                5. Project Scope & Features
              </label>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Project Description & Core Business Goal *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Describe what you want to build, who your users are, and any specific technical requirements..."
                  className="w-full p-4 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Reference Website or Competitor URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.referenceWebsite}
                    onChange={(e) => setFormData({ ...formData, referenceWebsite: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Required Integrations (e.g. Stripe, OpenAI, Twilio)
                  </label>
                  <input
                    type="text"
                    value={formData.requiredFeatures}
                    onChange={(e) => setFormData({ ...formData, requiredFeatures: e.target.value })}
                    placeholder="Stripe, Auth, Maps, Webhooks"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit CTA */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl text-center font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Project Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Strict NDA Confidentiality Guaranteed • 24h Response SLA</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
