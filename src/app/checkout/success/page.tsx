import { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug, getOrders } from "@/lib/db/mongodb";
import { CheckCircle2, Download, ArrowRight, Package, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Confirmed — Digital Download Ready",
  description: "Your digital product purchase is complete. Access your download files immediately.",
};

interface PageProps {
  searchParams: Promise<{
    order?: string;
    product?: string;
  }>;
}

export default async function CheckoutSuccessPage({ searchParams }: PageProps) {
  const { order: orderNumber, product: productSlug } = await searchParams;
  const product = productSlug ? await getProductBySlug(productSlug) : null;
  const orders = await getOrders();
  const order = orders.find((o) => o.orderNumber === orderNumber);

  const downloadToken = product?.downloadToken || "dl-js-interview-2026";

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8">
        {/* Success Icon Badge */}
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/10">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Payment Verified & Processed
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900 tracking-tight">
            Thank You for Your Order!
          </h1>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-lg mx-auto">
            Order Reference: <strong className="text-white light:text-slate-900">{orderNumber || "ORD-94812"}</strong>. A confirmation email with receipt and license documentation has been dispatched.
          </p>
        </div>

        {/* Access Box */}
        <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 text-left space-y-5 shadow-2xl">
          <div className="flex items-center gap-3 pb-4 border-b border-white/5 light:border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white light:text-slate-900">
                {product?.name || "Licensed Digital Product"}
              </h3>
              <p className="text-xs text-slate-400">
                Commercial License & Lifetime Updates Included
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">
            Your download files are secured behind our tokenized API. Click below to begin your instant download:
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`/api/downloads/${downloadToken}`}
              download
              className="flex-1 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Product Files (.zip)</span>
            </a>

            <Link
              href="/dashboard"
              className="py-3.5 px-6 rounded-xl font-semibold text-xs text-slate-200 light:text-slate-800 bg-slate-800 light:bg-slate-100 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span>Go to Dashboard</span>
            </Link>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Continue Browsing Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
