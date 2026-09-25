"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Code, Smartphone, Rocket, Sparkles } from "lucide-react";

export function TrustSection() {
  const stats = [
    {
      value: "2+",
      label: "Years Experience",
      sub: "Hands-on engineering",
      icon: ShieldCheck,
      color: "text-blue-400",
    },
    {
      value: "10+",
      label: "Projects Delivered",
      sub: "From MVP to scale",
      icon: Rocket,
      color: "text-indigo-400",
    },
    {
      value: "Full-Stack",
      label: "Modern Architecture",
      sub: "Next.js, Node & Mongo",
      icon: Code,
      color: "text-violet-400",
    },
    {
      value: "Web + Mobile",
      label: "Cross-Platform",
      sub: "React & Flutter",
      icon: Smartphone,
      color: "text-emerald-400",
    },
    {
      value: "SaaS + Digital",
      label: "Product Ecosystem",
      sub: "Passive income engines",
      icon: Sparkles,
      color: "text-amber-400",
    },
  ];

  return (
    <section className="py-14 border-y border-white/10 light:border-slate-200 bg-slate-950/40 light:bg-slate-100/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-white/5 light:border-slate-200 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </span>
                  <div className={`p-2 rounded-xl bg-white/5 ${stat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 light:text-slate-800">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-400 light:text-slate-500 mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
