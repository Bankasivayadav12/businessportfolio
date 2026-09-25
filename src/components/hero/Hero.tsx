"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  GraduationCap,
  Package,
  Layers,
  ChevronRight,
  Terminal,
} from "lucide-react";

export function Hero() {
  const [activeNode, setActiveNode] = useState<string>("saas");

  const nodes = [
    { id: "web", title: "Web Apps", icon: Globe, tech: "Next.js 15 • React 19 • Tailwind", color: "from-blue-500 to-cyan-500" },
    { id: "mobile", title: "Mobile Apps", icon: Smartphone, tech: "Flutter • Dart • iOS & Android", color: "from-sky-500 to-blue-600" },
    { id: "saas", title: "SaaS Platforms", icon: Cloud, tech: "Multi-tenant • Stripe • MongoDB", color: "from-indigo-500 to-purple-600" },
    { id: "ai", title: "AI Workflows", icon: Cpu, tech: "LLM APIs • Ollama • Automation", color: "from-violet-500 to-pink-500" },
    { id: "education", title: "Education", icon: GraduationCap, tech: "Bootcamps • Modules • Quizzes", color: "from-amber-500 to-orange-500" },
    { id: "products", title: "Digital Products", icon: Package, tech: "Templates • Starters • Guides", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Full-Stack Developer • Digital Creator • Product Builder</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white light:text-slate-900 leading-[1.1]">
              I Build Digital Products, <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                SaaS & Experiences
              </span>{" "}
              That Scale.
            </h1>

            {/* Tagline & Supporting description */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-medium text-slate-300 light:text-slate-700 italic border-l-2 border-blue-500 pl-4 py-0.5">
                &quot;{siteConfig.tagline}&quot;
              </p>
              <p className="text-base text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
                {siteConfig.supportingText} Turning complex ideas into resilient, production-ready applications, automated systems, and high-converting products.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/projects"
                className="group px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/hire-me"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 light:text-slate-800 bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 border border-white/10 light:border-slate-300 transition-all flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </Link>

              <Link
                href="/products"
                className="px-5 py-3.5 rounded-xl font-medium text-slate-300 light:text-slate-700 hover:text-white hover:bg-white/5 transition-all text-sm flex items-center gap-2"
              >
                <Package className="w-4 h-4 text-violet-400" />
                <span>View Digital Products</span>
              </Link>
            </div>

            {/* Floating Tech Badges */}
            <div className="pt-6 border-t border-white/10 light:border-slate-200">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Core Production Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 15+",
                  "React 19",
                  "TypeScript",
                  "MongoDB",
                  "Flutter",
                  "Node.js",
                  "Python",
                  "Tailwind CSS",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/60 light:bg-slate-200/70 border border-white/10 light:border-slate-300 text-slate-300 light:text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Ecosystem Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Dashboard / Tech Node Canvas */}
            <div className="w-full max-w-md p-6 rounded-3xl bg-slate-900/70 light:bg-white/80 border border-white/10 light:border-slate-200 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 light:border-slate-200 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-slate-300 font-medium">siva.ecosystem.ts</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Central Core Brand Hub */}
              <div className="relative my-4 p-5 rounded-2xl bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-500/30 text-center shadow-inner">
                <div className="inline-flex p-3 rounded-xl bg-blue-600/20 border border-blue-400/30 mb-2">
                  <Sparkles className="w-6 h-6 text-blue-400 animate-spin-slow" />
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-wide">
                  SIVA
                </h3>
                <p className="text-xs text-blue-300 font-medium tracking-wider uppercase">
                  Full-Stack Architecture Hub
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Orchestrating 6 Core Engineering Verticals
                </p>
              </div>

              {/* Surrounding Connected Ecosystem Nodes */}
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isSelected = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs relative ${
                        isSelected
                          ? "bg-blue-600/20 border-blue-500 shadow-md shadow-blue-500/20 text-white"
                          : "bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-tr ${node.color} flex items-center justify-center text-white`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-white">
                          {node.title}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 truncate">
                        {node.tech}
                      </p>
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active node details card */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="uppercase tracking-wider font-semibold text-blue-400">
                    Active Pipeline
                  </span>
                  <span>Latency: 28ms</span>
                </div>
                <p className="text-slate-300 font-mono text-[11px]">
                  {nodes.find((n) => n.id === activeNode)?.tech}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
