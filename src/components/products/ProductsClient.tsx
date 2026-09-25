"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import {
  Search,
  Star,
  ShoppingCart,
  Sparkles,
  Download,
  Filter,
  CheckCircle2,
} from "lucide-react";

export function ProductsClient({ initialProducts }: { initialProducts: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = [
    "All",
    "Interview Preparation",
    "Next.js Templates",
    "Flutter Templates",
    "PDF Guides",
    "UI Kits",
    "Developer Templates",
  ];

  let filtered = initialProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Sorting logic
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "sales") return b.salesCount - a.salesCount;
    return b.featured ? 1 : -1;
  });

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production Developer Assets</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
          Digital Products Marketplace
        </h1>
        <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
          Production boilerplates, interview preparation handbooks, and architecture starters. Built to save hundreds of engineering hours.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-white/5 light:border-slate-200">
        {/* Category Pills */}
        <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-500 shadow-sm"
                    : "bg-slate-900 light:bg-white text-slate-400 light:text-slate-700 border-white/5 light:border-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search and Sort controls */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 light:bg-white border border-white/10 light:border-slate-300 text-xs text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 light:bg-white border border-white/10 light:border-slate-300 text-xs text-slate-300 light:text-slate-800 focus:outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="sales">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-white/5 space-y-2">
          <p className="text-white font-bold">No digital products found</p>
          <p className="text-xs text-slate-400">Try changing your search keywords or filter category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <Image
                    src={product.coverImage}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-white backdrop-blur-md">
                      {product.productType}
                    </span>
                  </div>
                  {product.discountPercentage && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500 text-white shadow-sm">
                        {product.discountPercentage}% OFF
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  {/* Rating & Downloads */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-slate-500">({product.reviewsCount})</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {product.salesCount}+ purchased
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1 pt-2">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300 light:text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {product.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 border-t border-white/5 light:border-slate-100 mt-2">
                <div className="flex items-baseline justify-between pt-3 mb-3">
                  <div>
                    <span className="text-2xl font-black text-white light:text-slate-900">
                      {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-xs text-slate-500 line-through">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    Instant Download
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="py-2.5 rounded-xl text-center text-xs font-semibold border border-white/10 light:border-slate-300 text-slate-300 light:text-slate-700 hover:bg-white/5 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/checkout?product=${product.slug}`}
                    className="py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Get Access</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
