"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="py-20 flex items-center justify-center">
      <div className="max-w-md w-full mx-4 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white light:text-slate-900 tracking-tight">
            Reset Password
          </h1>
          <p className="text-xs text-slate-400 light:text-slate-600">
            Enter your email and we&apos;ll send you instructions to reset your account password.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-3xl bg-slate-900/80 light:bg-white border border-emerald-500/30 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white light:text-slate-900">
              Reset Link Sent
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If an account matches <strong className="text-white light:text-slate-900">{email}</strong>, a recovery token has been emailed.
            </p>
            <div className="pt-2">
              <Link
                href="/login"
                className="text-xs text-blue-400 font-semibold hover:underline"
              >
                Return to Login
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-slate-900/80 light:bg-white border border-white/10 light:border-slate-200 shadow-2xl space-y-5"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
                Your Account Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="developer@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Send Recovery Email</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-center text-slate-400 pt-2">
              <Link href="/login" className="inline-flex items-center gap-1 text-slate-400 hover:text-white">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to login</span>
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
