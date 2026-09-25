"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { YouTubeIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/Icons";
import {
  Sparkles,
  ArrowRight,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Could not subscribe at this time.");
      }
    } catch {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <footer className="border-t border-white/10 light:border-slate-200 bg-[#070b14] light:bg-slate-50 transition-colors pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Card */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 mb-16 bg-gradient-to-br from-blue-950/40 via-slate-900 to-indigo-950/40 light:from-blue-50 light:via-white light:to-indigo-50 border border-blue-500/20 light:border-blue-200">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Weekly Engineering & Product Drops</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
                Get practical development tips, new products and useful resources.
              </h3>
              <p className="mt-2 text-slate-400 light:text-slate-600 text-sm">
                No spam. Unsubscribe anytime. Join 1,200+ developers, builders and founders receiving the weekly digest.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your developer email..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 light:bg-white border border-white/10 light:border-slate-300 text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {status === "success" && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{message}</span>
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-rose-400 flex items-center gap-1.5 animate-in fade-in">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{message}</span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-sm">
          {/* Brand info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-slate-400 light:text-slate-600 text-sm max-w-sm mb-4 leading-relaxed">
              Full-Stack Developer & Digital Product Creator. Building modern websites, SaaS products, developer tools, educational products and digital experiences that scale.
            </p>
            <p className="text-xs text-slate-500 italic">
              &quot;{siteConfig.tagline}&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white light:text-slate-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-slate-400 light:text-slate-600">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products & Resources */}
          <div>
            <h4 className="text-xs font-semibold text-white light:text-slate-900 uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-slate-400 light:text-slate-600">
              <li><Link href="/products?category=Developer+Templates" className="hover:text-blue-400 transition-colors">Templates</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link href="/products?category=PDF+Guides" className="hover:text-blue-400 transition-colors">PDFs</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link href="/passive-income" className="hover:text-blue-400 transition-colors">Passive Income</Link></li>
              <li><Link href="/resume" className="hover:text-blue-400 transition-colors">Resume</Link></li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <h4 className="text-xs font-semibold text-white light:text-slate-900 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-slate-400 light:text-slate-600">
              <li>
                <a
                  href={`https://github.com/${siteConfig.links.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com/in/${siteConfig.links.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://youtube.com/@${siteConfig.links.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rose-400 transition-colors"
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${siteConfig.links.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 border-t border-white/5 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {siteConfig.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Client Projects & Consultation</span>
            </span>
            <Link href="/admin" className="hover:text-slate-400 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
