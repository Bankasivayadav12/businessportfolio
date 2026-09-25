"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import {
  Search,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export function BlogClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Next.js",
    "React",
    "JavaScript",
    "Flutter",
    "MongoDB",
    "SaaS",
    "Career",
  ];

  const filtered = initialPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Journal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
          Articles & System Design Writeups
        </h1>
        <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
          In-depth architectural guides, real-world case studies, and engineering lessons learned building digital products.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-white/5 light:border-slate-200">
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-500 shadow-sm"
                    : "bg-slate-900 light:bg-white text-slate-400 light:text-slate-700 border-white/5 light:border-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 light:bg-white border border-white/10 light:border-slate-300 text-xs text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Posts Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-white/5 space-y-2">
          <p className="text-white font-bold">No articles found</p>
          <p className="text-xs text-slate-400">Try searching for other terms or selecting &apos;All&apos;.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-blue-300 backdrop-blur-md border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>{post.readingTime}</span>
                    </span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/5 light:bg-slate-100 text-slate-400 light:text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author and Read Link */}
              <div className="p-6 pt-0 border-t border-white/5 light:border-slate-100 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 pt-3">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-800">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 light:text-slate-800">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="pt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
