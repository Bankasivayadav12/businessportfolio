"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global runtime error:", error);
  }, [error]);

  return (
    <div className="py-24 text-center px-4">
      <div className="max-w-md mx-auto p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-rose-500/30 space-y-5 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
          Something went wrong
        </h2>
        <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
          An unexpected application error occurred while processing this request.
        </p>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/20"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 light:text-slate-700 bg-slate-800 light:bg-slate-100 hover:bg-slate-700"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
