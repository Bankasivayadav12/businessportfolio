"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Cloud,
  Smartphone,
  Package,
  GraduationCap,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export function WhatIBuild() {
  const cards = [
    {
      title: "Websites",
      description:
        "High-performance business websites, high-converting landing pages, and interactive web applications engineered for sub-second load times.",
      icon: Globe,
      link: "/services#website-development",
      cta: "Explore Websites",
      gradient: "from-blue-600/20 to-cyan-600/20",
      accent: "text-blue-400",
      border: "hover:border-blue-500/40",
      tag: "Next.js • Tailwind • SEO",
    },
    {
      title: "SaaS Products",
      description:
        "Subscription-based software platforms built with multi-tenant architecture, Stripe & Razorpay billing, RBAC, and secure databases.",
      icon: Cloud,
      link: "/services#saas-development",
      cta: "Explore SaaS",
      gradient: "from-indigo-600/20 to-violet-600/20",
      accent: "text-indigo-400",
      border: "hover:border-indigo-500/40",
      tag: "Auth • Subscriptions • APIs",
    },
    {
      title: "Mobile Apps",
      description:
        "Cross-platform iOS and Android applications written in Flutter with clean layered architecture, offline cache, and native hardware integration.",
      icon: Smartphone,
      link: "/services#flutter-app-development",
      cta: "Explore Mobile",
      gradient: "from-sky-600/20 to-blue-600/20",
      accent: "text-sky-400",
      border: "hover:border-sky-500/40",
      tag: "Flutter • Dart • Firebase",
    },
    {
      title: "Digital Products",
      description:
        "Production-grade developer boilerplates, PDF master guides, interview preparation handbooks, and UI design kits that save hundreds of build hours.",
      icon: Package,
      link: "/products",
      cta: "Browse Marketplace",
      gradient: "from-emerald-600/20 to-teal-600/20",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/40",
      tag: "Templates • Starters • Guides",
    },
    {
      title: "Educational Products",
      description:
        "Comprehensive coding courses, interactive module curricula, practical worksheets, and developer roadmaps designed for rapid skill mastery.",
      icon: GraduationCap,
      link: "/courses",
      cta: "View Courses",
      gradient: "from-amber-600/20 to-orange-600/20",
      accent: "text-amber-400",
      border: "hover:border-amber-500/40",
      tag: "Bootcamps • Videos • Quizzes",
    },
    {
      title: "Automation & AI",
      description:
        "Intelligent workflows powered by LLM APIs, document extraction, structured data pipelines, and custom business automation tools.",
      icon: Cpu,
      link: "/services#ai-integration",
      cta: "Explore AI Solutions",
      gradient: "from-violet-600/20 to-pink-600/20",
      accent: "text-violet-400",
      border: "hover:border-violet-500/40",
      tag: "LLMs • Ollama • Automation",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            What I Build
          </h2>
          <p className="mt-4 text-slate-400 light:text-slate-600 text-base leading-relaxed">
            From consumer websites to production-grade SaaS and cross-platform mobile apps, I engineer full-stack systems tailored to launch quickly and scale reliably.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`p-7 rounded-3xl bg-slate-900/50 light:bg-white border border-white/10 light:border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group ${card.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center border border-white/10`}
                    >
                      <Icon className={`w-6 h-6 ${card.accent}`} />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 light:bg-slate-100 text-slate-400 light:text-slate-600">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2 group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 light:border-slate-100">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
