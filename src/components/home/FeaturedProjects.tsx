"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import {
  ExternalLink,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<string>(projects[0]?.id || "");

  const selectedProject = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Featured Flagship Projects
            </h2>
            <p className="mt-3 text-slate-400 light:text-slate-600 text-base max-w-xl">
              Scalable web and mobile applications delivered with clean architecture, high uptime, and delightful user experiences.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-3 mb-8 no-scrollbar">
          {projects.map((proj) => {
            const isSelected = selectedProject?.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveTab(proj.id)}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-3 border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                    : "bg-slate-900/60 light:bg-slate-100 text-slate-400 light:text-slate-700 border-white/5 light:border-slate-200 hover:text-white hover:border-white/20"
                }`}
              >
                <span>{proj.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-white/5 light:bg-slate-200 text-slate-400"
                  }`}
                >
                  {proj.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project In-Depth Showcase Card */}
        {selectedProject && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual & Live links */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-lg group">
                  <Image
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-900/90 text-emerald-400 border border-emerald-500/30">
                      Status: {selectedProject.status}
                    </span>
                    <span className="text-xs text-white/80 font-mono">
                      Category: {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 light:bg-slate-100 text-blue-300 light:text-blue-700 border border-white/5 light:border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/projects/${selectedProject.slug}`}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-md shadow-blue-500/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Case Study</span>
                  </Link>

                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 border border-white/10 light:border-slate-300 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Case study breakdown (Problem, Solution, Features, Results) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">
                    {selectedProject.tagline}
                  </p>
                  <p className="mt-3 text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Problem & Solution Snippets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-white/5 light:border-slate-200">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>The Problem</span>
                    </div>
                    <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-white/5 light:border-slate-200">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>The Solution</span>
                    </div>
                    <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Engineered Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.caseStudy.features.slice(0, 3).map((feat, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-300 light:text-slate-700 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Results */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 light:from-blue-50 light:to-indigo-50 border border-blue-500/20">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Real-World Performance Benchmarks</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {selectedProject.caseStudy.performance.map((perf, i) => (
                      <div key={i} className="text-center p-2 rounded-lg bg-black/20">
                        <div className="text-sm font-extrabold text-white light:text-slate-900">
                          {perf.value}
                        </div>
                        <div className="text-[10px] text-slate-400 light:text-slate-600 truncate">
                          {perf.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
