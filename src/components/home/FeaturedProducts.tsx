"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Star, ArrowRight, Download, Sparkles, ShoppingCart } from "lucide-react";

export function FeaturedProducts({ products }: { products: Product[] }) {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 relative bg-slate-950/30 light:bg-slate-50 border-t border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Store</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Developer Starters & Guides
            </h2>
            <p className="mt-3 text-slate-400 light:text-slate-600 text-base max-w-xl">
              Save weeks of engineering effort. Battle-tested boilerplates, interview blueprints, and templates ready to deploy.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Explore All Digital Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Cover Image */}
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
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500 text-white">
                        {product.discountPercentage}% OFF
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {/* Rating & Sales */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <div className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-slate-500">({product.reviewsCount})</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {product.salesCount}+ downloads
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white light:text-slate-900 mb-1.5 line-clamp-1 group-hover:text-emerald-400 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
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

              {/* Price & CTA */}
              <div className="p-5 pt-0 border-t border-white/5 light:border-slate-100 mt-2">
                <div className="flex items-center justify-between mb-3 pt-3">
                  <div>
                    <span className="text-lg font-black text-white light:text-slate-900">
                      {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-xs text-slate-500 line-through">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">Instant Access</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="py-2 rounded-xl text-center text-xs font-semibold border border-white/10 light:border-slate-300 text-slate-300 light:text-slate-700 hover:bg-white/5 transition-colors"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/checkout?product=${product.slug}`}
                    className="py-2 rounded-xl text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Buy Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
