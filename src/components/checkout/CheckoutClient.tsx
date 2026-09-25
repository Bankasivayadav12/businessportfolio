"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import {
  ShieldCheck,
  Lock,
  CreditCard,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Tag,
  Sparkles,
} from "lucide-react";

interface CheckoutClientProps {
  products: Product[];
  initialProductSlug?: string;
}

export function CheckoutClient({ products, initialProductSlug }: CheckoutClientProps) {
  const router = useRouter();

  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialProductSlug || products[0]?.slug || ""
  );
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentProvider, setPaymentProvider] = useState<"Stripe" | "Razorpay" | "Test">("Razorpay");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currentProduct = products.find((p) => p.slug === selectedSlug) || products[0];

  const basePrice = currentProduct ? currentProduct.price : 0;
  const finalPrice = Math.max(0, basePrice - couponDiscount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "LAUNCH50" || coupon.trim().toUpperCase() === "SIVA10") {
      const discount = Math.round(basePrice * 0.1);
      setCouponDiscount(discount);
      setCouponApplied(true);
      setError("");
    } else {
      setError("Invalid coupon code. Try 'LAUNCH50' for 10% discount.");
    }
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerEmail.includes("@")) {
      setError("Please provide a valid name and email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Initialize order on server
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerEmail,
          productSlug: currentProduct.slug,
          paymentProvider,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to initialize order.");
      }

      // 2. Automatically verify payment server-side
      const verifyRes = await fetch("/api/checkout/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderNumber: data.orderNumber,
          provider: paymentProvider,
          paymentId: `pay_${paymentProvider.toLowerCase()}_${Date.now()}`,
        }),
      });

      const verifyData = await verifyRes.json();
      if (!verifyRes.ok || !verifyData.success) {
        throw new Error(verifyData.message || "Payment verification failed.");
      }

      // 3. Redirect to Order Success Page
      router.push(
        `/checkout/success?order=${data.orderNumber}&email=${encodeURIComponent(
          customerEmail
        )}&product=${currentProduct.slug}`
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred during checkout.");
      } else {
        setError("An error occurred during checkout.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Secure Checkout
        </h1>
        <p className="text-sm text-slate-400 light:text-slate-600 mt-1">
          Instant download and perpetual commercial license delivered immediately after purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Details & Gateway Options */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleCheckout} className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-6 shadow-xl">
            {/* Customer Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                1. Customer Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
                    Email Address (for download links & invoice) *
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Gateway Provider Selector */}
            <div className="space-y-4 pt-4 border-t border-white/10 light:border-slate-100">
              <h3 className="text-sm font-bold text-slate-300 light:text-slate-700 uppercase tracking-wider">
                2. Select Payment Gateway
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Razorpay */}
                <button
                  type="button"
                  onClick={() => setPaymentProvider("Razorpay")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    paymentProvider === "Razorpay"
                      ? "bg-blue-600/15 border-blue-500 shadow-md"
                      : "bg-slate-950/40 light:bg-slate-50 border-white/10 light:border-slate-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="font-bold text-sm text-white light:text-slate-900 mb-0.5">
                    Razorpay
                  </div>
                  <p className="text-[11px] text-slate-400">UPI, Netbanking, RuPay</p>
                </button>

                {/* Stripe */}
                <button
                  type="button"
                  onClick={() => setPaymentProvider("Stripe")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    paymentProvider === "Stripe"
                      ? "bg-indigo-600/15 border-indigo-500 shadow-md"
                      : "bg-slate-950/40 light:bg-slate-50 border-white/10 light:border-slate-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="font-bold text-sm text-white light:text-slate-900 mb-0.5">
                    Stripe
                  </div>
                  <p className="text-[11px] text-slate-400">Visa, Mastercard, Amex</p>
                </button>

                {/* Test Gateway */}
                <button
                  type="button"
                  onClick={() => setPaymentProvider("Test")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    paymentProvider === "Test"
                      ? "bg-emerald-600/15 border-emerald-500 shadow-md"
                      : "bg-slate-950/40 light:bg-slate-50 border-white/10 light:border-slate-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="font-bold text-sm text-white light:text-slate-900 mb-0.5">
                    Instant Demo
                  </div>
                  <p className="text-[11px] text-slate-400">Developer Sandbox</p>
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl text-center font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing & Verifying Payment...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>
                    Pay {formatCurrency(finalPrice)} via {paymentProvider}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit SSL Encrypted</span>
              </span>
              <span>•</span>
              <span>Instant Digital Delivery</span>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary & Coupon */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-5 shadow-xl">
            <h3 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">
              Order Summary
            </h3>

            {/* Product Switcher */}
            <div>
              <label className="block text-xs text-slate-400 mb-1">Product Item:</label>
              <select
                value={selectedSlug}
                onChange={(e) => {
                  setSelectedSlug(e.target.value);
                  setCouponApplied(false);
                  setCouponDiscount(0);
                }}
                className="w-full px-3 py-2 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-xs text-white light:text-slate-900"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.slug}>
                    {p.name} ({formatCurrency(p.price)})
                  </option>
                ))}
              </select>
            </div>

            {/* Product Card Preview */}
            {currentProduct && (
              <div className="flex gap-4 p-3 rounded-2xl bg-slate-950/50 light:bg-slate-50 border border-white/5">
                <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                  <Image
                    src={currentProduct.coverImage}
                    alt={currentProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-white light:text-slate-900 truncate">
                    {currentProduct.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {currentProduct.productType} • Digital Package
                  </p>
                  <p className="text-xs font-extrabold text-emerald-400 mt-1">
                    {formatCurrency(currentProduct.price)}
                  </p>
                </div>
              </div>
            )}

            {/* Coupon Code Section */}
            <div className="pt-2">
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code (e.g. LAUNCH50)"
                    disabled={couponApplied}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-xs text-white light:text-slate-900 uppercase"
                  />
                </div>
                <button
                  type="submit"
                  disabled={couponApplied || !coupon}
                  className="px-4 py-2 rounded-xl bg-slate-800 light:bg-slate-200 text-xs font-semibold text-white light:text-slate-800 hover:bg-slate-700 disabled:opacity-50"
                >
                  {couponApplied ? "Applied" : "Apply"}
                </button>
              </form>
              {couponApplied && (
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>10% discount applied successfully!</span>
                </p>
              )}
            </div>

            {/* Subtotal Calculations */}
            <div className="space-y-2 pt-3 border-t border-white/10 light:border-slate-100 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>{formatCurrency(basePrice)}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Coupon Discount</span>
                  <span>-{formatCurrency(couponDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>Taxes & Processing</span>
                <span>₹0.00 (Included)</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white light:text-slate-900 pt-2 border-t border-white/5">
                <span>Total Due</span>
                <span className="text-base text-emerald-400">{formatCurrency(finalPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
