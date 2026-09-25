import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  FileText,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Rocket,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Siva — Full-Stack Developer & Product Builder",
  description:
    "Learn about Siva's engineering journey, development philosophies, and track record building full-stack applications, mobile apps, and digital product businesses.",
};

export default function AboutPage() {
  const timeline = [
    {
      period: "The Foundation",
      stage: "Learning & Fundamentals",
      desc: "Immersed in computer science essentials, algorithm design, data structures, and the inner workings of browsers and the V8 JavaScript engine.",
      icon: Compass,
      color: "border-blue-500 text-blue-400",
    },
    {
      period: "Phase 1",
      stage: "Frontend Development",
      desc: "Engineered responsive, accessible, pixel-perfect user interfaces using React, TypeScript, and modern CSS systems. Obsessed over Core Web Vitals.",
      icon: Code2,
      color: "border-cyan-500 text-cyan-400",
    },
    {
      period: "Phase 2",
      stage: "Full-Stack Development",
      desc: "Expanded into Node.js, Express, Python, Django, MongoDB, and PostgreSQL. Mastered RESTful APIs, database index optimization, and caching.",
      icon: Layers,
      color: "border-indigo-500 text-indigo-400",
    },
    {
      period: "Phase 3",
      stage: "Mobile Development",
      desc: "Adopted Flutter and Dart to deliver 60fps cross-platform iOS and Android apps with Clean Architecture, GetX, and offline-first persistence.",
      icon: Cpu,
      color: "border-purple-500 text-purple-400",
    },
    {
      period: "Phase 4",
      stage: "Product Development",
      desc: "Transitioned from writing code on command to end-to-end product engineering: UX design, user onboarding, analytics funnels, and payment flows.",
      icon: Sparkles,
      color: "border-emerald-500 text-emerald-400",
    },
    {
      period: "Present & Ahead",
      stage: "SaaS & Digital Products",
      desc: "Building an independent digital product ecosystem: developer boilerplates, technical educational guides, and scalable SaaS platforms.",
      icon: Rocket,
      color: "border-amber-500 text-amber-400",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Story Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <span>Engineering Story</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight leading-tight">
              I&apos;m Siva — Developer, Builder & Digital Product Creator.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed font-medium">
              I build web applications, mobile apps, and SaaS platforms that solve genuine problems and generate long-term value.
            </p>

            <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              With 2+ years of professional full-stack development experience, I bridge the gap between technical rigor and entrepreneurial execution. I don&apos;t just write clean code — I architect resilient digital systems engineered to scale reliably.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/resume"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </Link>
              <Link
                href="/hire-me"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 border border-white/10 light:border-slate-300 transition-colors"
              >
                Work With Me
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Siva"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-bold text-white">Siva</p>
                <p className="text-xs text-blue-400 font-mono">
                  Full-Stack Developer • Founder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Development & Product Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              Development Philosophy
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 light:text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Simplicity over cleverness:</strong> Clear code is maintainable code. Premature abstraction is the root of technical debt.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Type-safety throughout:</strong> From database models to API contracts and frontend props, TypeScript eliminates entire classes of runtime bugs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Speed is a feature:</strong> Every millisecond of latency shaves conversion. Server Components and smart caching ensure sub-second loads.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              Product-Building Philosophy
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 light:text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                <span><strong>Build once, sell repeatedly:</strong> Craft digital assets with near-zero marginal reproduction costs that generate revenue continuously.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                <span><strong>Validate with working software:</strong> Interactive prototypes and minimal viable products reveal user truths far faster than decks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                <span><strong>Flawless aesthetics matter:</strong> Software that looks and feels like a tier-one product commands trust and premium pricing.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900">
              Evolutionary Timeline
            </h2>
            <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
              The deliberate path from foundational principles to full-stack architectural mastery.
            </p>
          </div>

          <div className="relative border-l border-white/10 light:border-slate-300 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 rounded-full bg-slate-900 border-2 ${item.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/40 light:bg-white border border-white/5 light:border-slate-200 group-hover:border-blue-500/30 transition-all">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold text-white light:text-slate-900 mt-1">
                      {item.stage}
                    </h4>
                    <p className="text-sm text-slate-400 light:text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Focus & Future Goals */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 light:from-blue-50 light:to-indigo-50 border border-blue-500/20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white light:text-slate-900 mb-2">
              Current Focus
            </h3>
            <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
              Actively expanding the digital template store, teaching advanced Next.js & React 19 paradigms via YouTube (<strong className="text-white light:text-slate-900">{siteConfig.youtubeBrand}</strong>), and taking on selective high-impact client projects in SaaS and mobile architecture.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white light:text-slate-900 mb-2">
              Future Goals
            </h3>
            <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
              Scaling a portfolio of micro-SaaS tools to 10,000+ monthly active developers, publishing complete interactive system design bootcamps, and incubating automated AI agent applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
