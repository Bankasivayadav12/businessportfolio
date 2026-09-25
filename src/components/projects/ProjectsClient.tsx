"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { GitHubIcon } from "@/components/ui/Icons";
import {
  Search,
  ExternalLink,
  BookOpen,
  Layers,
  Sparkles,
} from "lucide-react";

export function ProjectsClient({ initialProjects }: { initialProjects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Web", "Mobile", "SaaS", "Education", "Business", "AI"];

  const filtered = initialProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
          Featured Projects & Architecture
        </h1>
        <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
          Production applications, multi-tenant SaaS platforms, and mobile apps built with clean code and high performance.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25"
                    : "bg-slate-900/60 light:bg-slate-100 text-slate-400 light:text-slate-700 border-white/5 light:border-slate-200 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech, title..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 light:bg-white border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-white/5 space-y-3">
          <Layers className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No projects found</h3>
          <p className="text-xs text-slate-400">
            Try adjusting your search criteria or category filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Project Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-white backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-white/5 light:border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-white/5 light:border-slate-100 mt-4 flex items-center justify-between gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/20"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 light:text-slate-800 bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 border border-white/10 transition-colors flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
