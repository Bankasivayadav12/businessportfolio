import { Metadata } from "next";
import Link from "next/link";
import { initialServices } from "@/lib/data/seedData";
import {
  Globe,
  Layers,
  Code2,
  Smartphone,
  Cloud,
  LayoutDashboard,
  Network,
  Database,
  Cpu,
  Zap,
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Consulting Services — Siva",
  description:
    "Explore 12 specialized engineering services: Next.js Web Development, Flutter Mobile Apps, SaaS Architecture, AI Automation, Database Optimization, and SLA Maintenance.",
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Code2,
  Smartphone,
  Cloud,
  LayoutDashboard,
  Network,
  Database,
  Cpu,
  Zap,
  Search,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consulting & Production Engineering</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
            Client Services & Solutions
          </h1>
          <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
            I help startups, agencies, and enterprises architect, build, and scale digital products with sub-second performance and production resilience.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="space-y-5">
                  {/* Top Bar with Icon and Timeline */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 bg-white/5 light:bg-slate-100 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>{service.estimatedTimeline}</span>
                      </span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">
                        {service.pricingEstimate}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white light:text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 light:text-slate-600 mt-1 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Problem vs Solution */}
                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-rose-400 mb-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>The Problem</span>
                      </div>
                      <p className="text-slate-300 light:text-slate-600 leading-relaxed">
                        {service.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>The Solution</span>
                      </div>
                      <p className="text-slate-300 light:text-slate-600 leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300 light:text-slate-700">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.technology.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-white/5 light:border-slate-100">
                  <Link
                    href={`/hire-me?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
                  >
                    <span>Hire Siva for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white light:text-slate-900">
            Have a custom requirement not listed above?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
            I frequently architect hybrid mobile apps, multi-cloud data pipelines, and custom AI agent solutions. Let&apos;s evaluate your technical scope together.
          </p>
          <div className="pt-2">
            <Link
              href="/hire-me"
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <span>Schedule Free Project Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
