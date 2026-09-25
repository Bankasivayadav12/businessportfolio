"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { YouTubeIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/Icons";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setFeedback("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFeedback(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(data.message || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setFeedback("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Have a question about a product or course, or want to discuss a full-stack engineering contract? Send a message and I will reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and social placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-300 light:text-slate-700">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">
                      Email Address
                    </span>
                    <span>{siteConfig.links.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300 light:text-slate-700">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">
                      Location
                    </span>
                    <span>{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 border-t border-white/10 light:border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Social & Developer Profiles
                </h4>

                <div className="space-y-2 text-xs">
                  <a
                    href={`https://github.com/${siteConfig.links.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 hover:border-blue-500/30 text-slate-300 light:text-slate-700 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GitHubIcon className="w-4 h-4 text-slate-400" />
                      <span>GitHub</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">@{siteConfig.links.github}</span>
                  </a>

                  <a
                    href={`https://linkedin.com/in/${siteConfig.links.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 hover:border-blue-500/30 text-slate-300 light:text-slate-700 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedInIcon className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">@{siteConfig.links.linkedin}</span>
                  </a>

                  <a
                    href={`https://youtube.com/@${siteConfig.links.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 hover:border-rose-500/30 text-slate-300 light:text-slate-700 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <YouTubeIcon className="w-4 h-4 text-rose-400" />
                      <span>YouTube</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">@{siteConfig.links.youtube}</span>
                  </a>

                  <a
                    href={`https://instagram.com/${siteConfig.links.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 hover:border-pink-500/30 text-slate-300 light:text-slate-700 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <InstagramIcon className="w-4 h-4 text-pink-400" />
                      <span>Instagram</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">@{siteConfig.links.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-2xl space-y-6"
            >
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aman Verma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aman@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Next.js Consulting Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can Siva help with your product or engineering goals?"
                  className="w-full p-4 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
