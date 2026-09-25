"use client";

import React from "react";
import {
  Lightbulb,
  FileSpreadsheet,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export function IdeaToProduction() {
  const steps = [
    { name: "Idea", desc: "Concept validation & product discovery", icon: Lightbulb, color: "text-amber-400" },
    { name: "Planning", desc: "Architecture diagrams & data modeling", icon: FileSpreadsheet, color: "text-blue-400" },
    { name: "UI/UX", desc: "Wireframes & modern design systems", icon: Palette, color: "text-pink-400" },
    { name: "Development", desc: "Full-stack coding & API integrations", icon: Code2, color: "text-indigo-400" },
    { name: "Testing", desc: "Performance, QA, and security audits", icon: CheckCheck, color: "text-emerald-400" },
    { name: "Deployment", desc: "Vercel edge, cloud database & CI/CD", icon: Rocket, color: "text-cyan-400" },
    { name: "Growth", desc: "Analytics, iterations & scaling", icon: TrendingUp, color: "text-violet-400" },
  ];

  return (
    <section className="py-20 relative bg-slate-950/60 light:bg-slate-50/50 border-y border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Engineering Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            From Idea to Production
          </h2>
          <p className="mt-4 text-lg font-medium text-blue-400 light:text-blue-600">
            &quot;I don&apos;t just build websites. I build complete digital products.&quot;
          </p>
        </div>

        {/* Pipeline Horizontal Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.name}
                className="relative p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 text-center flex flex-col items-center justify-between group hover:border-blue-500/50 transition-all hover:-translate-y-1"
              >
                {/* Step badge */}
                <span className="text-[10px] font-mono text-slate-500 font-semibold mb-2">
                  PHASE 0{idx + 1}
                </span>

                <div
                  className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${step.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-sm font-bold text-white light:text-slate-900 mb-1">
                  {step.name}
                </h3>
                <p className="text-[11px] text-slate-400 light:text-slate-500 leading-tight">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
