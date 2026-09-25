"use client";

import React, { useState } from "react";
import {
  FileText,
  Code,
  Download,
  Sparkles,
  CheckCircle2,
  Mail,
  Loader2,
  Lock,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [activeDownloadResource, setActiveDownloadResource] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [downloadReady, setDownloadReady] = useState(false);

  const freeResources = [
    {
      id: "res-1",
      title: "Next.js 15 App Router Architecture Cheatsheet",
      desc: "4-page high-density reference sheet detailing caching layers, parallel routes, Server Actions, and headers.",
      type: "PDF Cheatsheet",
      downloads: "2.4K",
      icon: FileText,
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: "res-2",
      title: "Full-Stack System Design Blueprint 2026",
      desc: "Architectural diagram patterns for rate limiting, message queues, MongoDB indexes, and multi-tenant SaaS.",
      type: "Architecture Diagram",
      downloads: "3.8K",
      icon: Code,
      color: "from-violet-600 to-indigo-500",
    },
    {
      id: "res-3",
      title: "50 Tricky JavaScript Coding Snippets & Polyfills",
      desc: "Printable cheat cards covering custom Promise.all, deep clone, throttle, debounce, and event delegation.",
      type: "Code Snippets",
      downloads: "4.1K",
      icon: BookOpen,
      color: "from-amber-600 to-orange-500",
    },
    {
      id: "res-4",
      title: "Flutter Clean Architecture Boilerplate Template",
      desc: "Lightweight starter repository structuring models, repositories, and GetX controllers with zero bloat.",
      type: "Starter Repo",
      downloads: "1.9K",
      icon: Download,
      color: "from-emerald-600 to-teal-500",
    },
  ];

  const handleUnlockResource = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `resource-${activeDownloadResource}` }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setDownloadReady(true);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Vault</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
            Free Engineering Resources
          </h1>
          <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
            Download free architectural blueprints, cheat sheets, and starter repositories to accelerate your development workflow.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freeResources.map((res) => {
            const Icon = res.icon;
            return (
              <div
                key={res.id}
                className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-5 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${res.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 light:bg-slate-100 text-slate-400">
                      {res.downloads} downloads
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      {res.type}
                    </span>
                    <h3 className="text-lg font-bold text-white light:text-slate-900 mt-1">
                      {res.title}
                    </h3>
                    <p className="text-xs text-slate-400 light:text-slate-600 mt-2 leading-relaxed">
                      {res.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => {
                      setActiveDownloadResource(res.id);
                      setDownloadReady(false);
                      setStatus("idle");
                    }}
                    className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Free Guide</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Capture Modal / Slide-down */}
        {activeDownloadResource && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 light:bg-white border border-white/10 light:border-slate-300 rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95">
              <button
                onClick={() => setActiveDownloadResource(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white light:text-slate-900">
                  Instant Resource Download
                </h3>
                <p className="text-xs text-slate-400 light:text-slate-600">
                  Enter your email address below to unlock this free resource and join 1,200+ engineers receiving weekly technical blueprints.
                </p>
              </div>

              {downloadReady ? (
                <div className="text-center space-y-4 py-4">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Resource Unlocked!</span>
                  </div>
                  <a
                    href="/api/downloads/dl-fullstack-roadmap-2026"
                    download
                    onClick={() => setActiveDownloadResource(null)}
                    className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Files Now (.zip)</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleUnlockResource} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="developer@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 border border-white/10 light:border-slate-300 text-xs text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Get Instant Free Access</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    Zero spam. Unsubscribe anytime with 1 click.
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
