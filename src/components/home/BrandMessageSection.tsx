"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function BrandMessageSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 overflow-hidden bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-950/40 light:from-blue-50 light:via-white light:to-indigo-50 border border-blue-500/30 light:border-blue-200 text-center shadow-2xl">
          {/* Background blurred glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Future-Ready Engineering</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white light:text-slate-900 tracking-tight">
              Build. Launch. Scale.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed font-normal">
              {siteConfig.missionSubtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/hire-me"
                className="group px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200 flex items-center gap-2.5 hover:-translate-y-0.5"
              >
                <span>Let&apos;s Build Something Great</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-base font-semibold text-slate-200 light:text-slate-800 bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 border border-white/10 light:border-slate-300 transition-colors"
              >
                Contact Siva
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 light:text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Production-Grade Code</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Developer Communication</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Fast On-Time Delivery</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
