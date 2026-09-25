import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getProducts } from "@/lib/db/mongodb";
import { formatCurrency } from "@/lib/utils";
import {
  ArrowLeft,
  CheckCircle2,
  Star,
  Download,
  ShieldCheck,
  Zap,
  HelpCircle,
  FileCode,
  Package,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} — Digital Download & License`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back navigation */}
        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Marketplace</span>
          </Link>
        </div>

        {/* Hero Product Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl bg-slate-900 group">
              <Image
                src={product.coverImage}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-white backdrop-blur-md">
                  {product.productType}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {product.category}
                </span>
              </div>
            </div>

            {/* What's Included Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white light:text-slate-900">
                <Package className="w-4 h-4 text-emerald-400" />
                <span>What&apos;s Included in this Package</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 light:text-slate-700">
                {product.whatsIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements Card */}
            {product.requirements && product.requirements.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Prerequisites & Requirements
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 light:text-slate-700">
                  {product.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Pricing & Purchase Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/80 light:bg-white border border-white/10 light:border-slate-200 backdrop-blur-xl shadow-2xl space-y-6 sticky top-28">
              {/* Product Title */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-bold">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount} customer reviews)</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 leading-tight">
                  {product.name}
                </h1>
                <p className="mt-2 text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-white/5 light:border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-white light:text-slate-900">
                    {formatCurrency(product.price)}
                  </div>
                  {product.originalPrice && (
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-slate-500 line-through">
                        {formatCurrency(product.originalPrice)}
                      </span>
                      <span className="text-xs font-bold text-rose-400">
                        Save {product.discountPercentage}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold block mb-1">
                    Instant Access
                  </span>
                  <span className="text-[10px] text-slate-500">Commercial License</span>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="space-y-3">
                <Link
                  href={`/checkout?product=${product.slug}`}
                  className="w-full py-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Buy Now — {formatCurrency(product.price)}</span>
                </Link>

                <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Secure SSL Checkout via Stripe & Razorpay</span>
                </p>
              </div>

              {/* Features List */}
              <div className="pt-4 border-t border-white/10 light:border-slate-100 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Specifications
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 light:text-slate-700">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-white/10 light:border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 light:bg-slate-100 text-blue-300 light:text-blue-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-6">
          <h3 className="text-2xl font-bold text-white light:text-slate-900">
            About this Product
          </h3>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-700 leading-relaxed whitespace-pre-line">
            {product.description}
          </p>
        </div>

        {/* FAQ Section */}
        {product.faq && product.faq.length > 0 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.faq.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-950/50 light:bg-slate-50 border border-white/5 space-y-2"
                >
                  <h4 className="text-sm font-bold text-white light:text-slate-900">
                    {item.question}
                  </h4>
                  <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
