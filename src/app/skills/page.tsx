"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Cloud,
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface SkillCategory {
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  skills: { name: string; level: number; note: string }[];
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      desc: "Pixel-perfect, high-performance UI engineering with modern React paradigms",
      icon: Code2,
      color: "from-blue-600 to-cyan-500",
      skills: [
        { name: "Next.js (App Router)", level: 95, note: "Server Components, Server Actions, Streaming" },
        { name: "React 19", level: 95, note: "Hooks, Fiber reconciliation, Actions" },
        { name: "TypeScript", level: 90, note: "Strict typing, generics, infer, Zod" },
        { name: "Tailwind CSS", level: 98, note: "Custom tokens, responsive design, v4" },
        { name: "JavaScript (ES6+)", level: 96, note: "V8 engine, closures, event loop, async/await" },
        { name: "Redux & Zustand", level: 88, note: "Global state, slices, persistent stores" },
        { name: "HTML5 & Semantic SEO", level: 98, note: "Accessibility, microdata, JSON-LD" },
        { name: "Modern CSS / Animations", level: 92, note: "Glassmorphism, transitions, keyframes" },
      ],
    },
    {
      title: "Backend",
      desc: "Robust, scalable API servers, background workers, and business logic",
      icon: Server,
      color: "from-indigo-600 to-violet-500",
      skills: [
        { name: "Node.js", level: 92, note: "Event-driven async runtime, streams, cluster" },
        { name: "Express.js", level: 90, note: "Middleware pipelines, security headers, routing" },
        { name: "Python", level: 86, note: "Data structures, scripting, automation" },
        { name: "Django", level: 82, note: "ORM, authentication, admin dashboard" },
        { name: "REST APIs", level: 95, note: "RESTful standards, status codes, OpenAPI/Swagger" },
      ],
    },
    {
      title: "Database",
      desc: "Data modeling, indexing, aggregation pipelines, and ACID transactions",
      icon: Database,
      color: "from-emerald-600 to-teal-500",
      skills: [
        { name: "MongoDB", level: 95, note: "Aggregation framework, Atlas, 2dsphere indexes" },
        { name: "Mongoose", level: 94, note: "Schema validation, middleware, population" },
        { name: "PostgreSQL", level: 88, note: "Complex joins, indexing, constraints" },
        { name: "Prisma ORM", level: 90, note: "Migrations, type-safe client, relations" },
        { name: "MySQL", level: 85, note: "Relational queries and transactions" },
      ],
    },
    {
      title: "Mobile",
      desc: "Cross-platform mobile applications for iOS & Android with unified codebase",
      icon: Smartphone,
      color: "from-sky-600 to-blue-500",
      skills: [
        { name: "Flutter", level: 90, note: "Widget tree, custom painters, animations" },
        { name: "Dart", level: 90, note: "OOP, sound null safety, async streams" },
        { name: "GetX", level: 92, note: "Reactive state management, route navigation" },
        { name: "Firebase", level: 88, note: "FCM push alerts, auth, real-time database" },
      ],
    },
    {
      title: "DevOps & Cloud",
      desc: "Deployment automation, version control, edge networking, and CDN storage",
      icon: Cloud,
      color: "from-amber-600 to-orange-500",
      skills: [
        { name: "Git & GitHub", level: 95, note: "Git flow, PR reviews, merge strategies" },
        { name: "Vercel", level: 98, note: "Edge functions, environment secrets, deployments" },
        { name: "CI / CD Pipelines", level: 85, note: "Automated linting, testing & deployment" },
        { name: "Cloudflare R2 / S3", level: 88, note: "Secure object storage and bucket policies" },
      ],
    },
    {
      title: "AI & Automation",
      desc: "Integration with language models, vector embeddings, and automated workflows",
      icon: Cpu,
      color: "from-purple-600 to-pink-500",
      skills: [
        { name: "AI APIs (OpenAI / Claude)", level: 92, note: "Prompt engineering, function calling" },
        { name: "Ollama Local LLMs", level: 88, note: "Running open-source models locally" },
        { name: "Structured Data Generation", level: 94, note: "Deterministic JSON schema via Zod" },
        { name: "PDF Extraction", level: 90, note: "Parsing document text, metadata & tables" },
        { name: "AI Workflow Automation", level: 89, note: "Chaining agents and scheduled tasks" },
      ],
    },
  ];

  const displayedCategories =
    activeCategory === "All"
      ? categories
      : categories.filter((c) => c.title.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Competency Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
            Categorized Technical Skills
          </h1>
          <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
            A comprehensive overview of frameworks, languages, databases, mobile technologies, and AI tooling I use to deliver commercial software.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["All", "Frontend", "Backend", "Database", "Mobile", "DevOps & Cloud", "AI & Automation"].map(
            (cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25"
                      : "bg-slate-900/60 light:bg-slate-100 text-slate-400 light:text-slate-700 border-white/5 light:border-slate-200 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            }
          )}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 shadow-xl space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 light:border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white light:text-slate-900">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 light:text-slate-500">
                        {category.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 light:bg-slate-100 text-slate-400">
                    {category.skills.length} Skills
                  </span>
                </div>

                {/* Individual Skill Items with Progress Bar */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 light:text-slate-800">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress meter */}
                      <div className="w-full h-2 rounded-full bg-slate-800 light:bg-slate-200 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-500 light:text-slate-400">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-3xl bg-slate-900/40 light:bg-slate-50 border border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              Need these skills for your project or product?
            </h3>
            <p className="text-xs text-slate-400 light:text-slate-600 mt-1">
              I am available for freelance contracts, full-stack consulting, and technical advisory.
            </p>
          </div>
          <Link
            href="/hire-me"
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-blue-500/25"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
