"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  ArrowRight,
  Shield,
  User,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        router.push(data.redirectTo || "/dashboard");
        router.refresh();
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fillAdmin = () => {
    setEmail("admin@siva.dev");
    setPassword("Admin@1234");
    setError("");
  };

  const fillUser = () => {
    setEmail("user@siva.dev");
    setPassword("User@1234");
    setError("");
  };

  return (
    <div className="py-20 flex items-center justify-center">
      <div className="max-w-md w-full mx-4 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white light:text-slate-900 tracking-tight">
            Account Sign In
          </h1>
          <p className="text-xs text-slate-400 light:text-slate-600">
            Access your courses, purchased developer kits, and administration tools.
          </p>
        </div>

        {/* Demo Credentials Quick Switcher */}
        <div className="p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-white/5 light:border-slate-300 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-semibold flex items-center gap-1 text-blue-400">
              <Sparkles className="w-3 h-3" />
              <span>Instant Demo Credentials:</span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={fillAdmin}
              className="py-1.5 px-3 rounded-lg text-xs font-semibold bg-violet-600/20 border border-violet-500/30 text-violet-300 hover:bg-violet-600/30 transition-colors flex items-center justify-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Role</span>
            </button>
            <button
              type="button"
              onClick={fillUser}
              className="py-1.5 px-3 rounded-lg text-xs font-semibold bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 transition-colors flex items-center justify-center gap-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span>User Role</span>
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="p-8 rounded-3xl bg-slate-900/80 light:bg-white border border-white/10 light:border-slate-200 shadow-2xl space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1">
              Email Address
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

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-[11px] text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-xs text-center text-slate-400 pt-2">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-400 font-semibold hover:underline">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
