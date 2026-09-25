"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  ArrowUpRight,
  User,
  Shield,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 bg-[#090d16]/80 light:bg-white/80 backdrop-blur-md border-b border-white/10 light:border-black/5 shadow-lg shadow-black/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 font-bold tracking-tight text-xl focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-1">
                  Builder
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 light:bg-slate-100/80 border border-white/10 light:border-black/5 backdrop-blur-md text-sm font-medium">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                      isActive
                        ? "text-white light:text-slate-900 bg-blue-600/30 light:bg-white shadow-sm font-semibold"
                        : "text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs & Tools */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl border border-white/10 light:border-slate-200 bg-slate-900/50 light:bg-slate-100 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>

              {/* Learning Dashboard Link */}
              <Link
                href="/dashboard"
                className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 bg-slate-900/40 hover:bg-slate-800/60 border border-white/10 transition-all"
                title="Learning Dashboard"
              >
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Dashboard</span>
              </Link>

              {/* Admin Portal Link */}
              <Link
                href="/admin"
                className="p-2 rounded-xl text-xs font-medium text-slate-400 hover:text-violet-400 hover:bg-slate-800/60 border border-white/10 transition-all"
                title="Admin CRM & CMS"
              >
                <Shield className="w-4 h-4" />
              </Link>

              {/* Primary Hire Me CTA */}
              <Link
                href="/hire-me"
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl border border-white/10 light:border-slate-200 bg-slate-900/50 light:bg-slate-100 flex items-center justify-center text-slate-300 light:text-slate-700"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-slate-800/80 light:bg-slate-100 border border-white/10 light:border-slate-300 flex items-center justify-center text-slate-200 light:text-slate-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden pt-20 px-4 pb-6 bg-[#090d16]/95 light:bg-white/95 backdrop-blur-xl overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5 pt-4">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10 font-bold"
                      : "text-slate-300 light:text-slate-700 hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-500" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 light:border-slate-200 flex flex-col gap-3">
            <Link
              href="/hire-me"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30"
            >
              Hire Me — Start a Project
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 rounded-xl text-center text-sm font-medium border border-white/10 light:border-slate-300 bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-800"
              >
                My Dashboard
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 rounded-xl text-center text-sm font-medium border border-white/10 light:border-slate-300 bg-slate-900/60 light:bg-slate-100 text-violet-400"
              >
                Admin CRM
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
