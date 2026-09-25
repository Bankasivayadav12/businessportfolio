import { Metadata } from "next";
import Link from "next/link";
import { getAnalyticsSummary } from "@/lib/db/mongodb";
import { formatCurrency } from "@/lib/utils";
import { YouTubeIcon } from "@/components/ui/Icons";
import {
  TrendingUp,
  Package,
  Layers,
  GraduationCap,
  Cloud,
  Share2,
  DollarSign,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Build Once. Sell Repeatedly — The Passive Income Ecosystem",
  description:
    "Discover how Siva engineers digital products, boilerplates, courses, and SaaS tools that generate sustainable developer income around the clock.",
};

export default async function PassiveIncomePage() {
  const analytics = await getAnalyticsSummary();

  const metrics = [
    { label: "Gross Platform Revenue", value: formatCurrency(analytics.totalRevenue), icon: DollarSign, color: "text-emerald-400" },
    { label: "Active Customers", value: "850+", icon: Users, color: "text-blue-400" },
    { label: "Digital Products & Guides", value: analytics.productsCount.toString(), icon: Package, color: "text-indigo-400" },
    { label: "Comprehensive Bootcamps", value: analytics.coursesCount.toString(), icon: GraduationCap, color: "text-violet-400" },
    { label: "Newsletter Subscribers", value: "1,200+", icon: Sparkles, color: "text-amber-400" },
    { label: "Monthly Conversion Rate", value: analytics.conversionRate, icon: TrendingUp, color: "text-cyan-400" },
  ];

  const pillars = [
    {
      title: "Digital Products",
      desc: "Comprehensive PDF guides, senior coding interview preparation blueprints, and system design roadmaps.",
      revenueType: "One-Time High-Margin Purchase",
      icon: Package,
      gradient: "from-blue-600/20 to-cyan-600/20",
      accent: "text-blue-400",
      link: "/products",
      cta: "Browse Guides",
    },
    {
      title: "Production Boilerplates & Templates",
      desc: "Clean Next.js SaaS starters and Flutter app kits that save teams 150+ hours of setup.",
      revenueType: "Commercial Developer Licensing",
      icon: Layers,
      gradient: "from-indigo-600/20 to-purple-600/20",
      accent: "text-indigo-400",
      link: "/products?category=Developer+Templates",
      cta: "Explore Starters",
    },
    {
      title: "Educational Video Courses",
      desc: "Project-based curriculum in modern JavaScript, React 19, and full-stack Next.js architecture.",
      revenueType: "Lifetime Student Enrollment",
      icon: GraduationCap,
      gradient: "from-violet-600/20 to-pink-600/20",
      accent: "text-violet-400",
      link: "/courses",
      cta: "View Courses",
    },
    {
      title: "Micro-SaaS Subscriptions",
      desc: "Lightweight software products solving focused business pain points with recurring Stripe/Razorpay billing.",
      revenueType: "Monthly & Annual Recurring (MRR)",
      icon: Cloud,
      gradient: "from-emerald-600/20 to-teal-600/20",
      accent: "text-emerald-400",
      link: "/services#saas-development",
      cta: "Explore SaaS",
    },
    {
      title: "Technical Content & Media",
      desc: "High-value YouTube video tutorials and engineering writeups that build trust and drive organic inbound discovery.",
      revenueType: "AdSense, Sponsorships & Reach",
      icon: YouTubeIcon,
      gradient: "from-rose-600/20 to-red-600/20",
      accent: "text-rose-400",
      link: "/youtube",
      cta: "Watch Content",
    },
    {
      title: "Affiliate & Recommended Tooling",
      desc: "Transparent recommendations for developer infrastructure, hosting providers, and software tools I actively use.",
      revenueType: "Performance-Based Commissions",
      icon: Share2,
      gradient: "from-amber-600/20 to-orange-600/20",
      accent: "text-amber-400",
      link: "/resources",
      cta: "View Resources",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>The Developer Leverage Model</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white light:text-slate-900 tracking-tight leading-tight">
            Build Once. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Sell Repeatedly.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed font-normal">
            Trading hours for dollars creates a hard ceiling on impact. By engineering digital assets, developer boilerplates, and modular educational courses, I build digital assets that work and scale 24/7.
          </p>
        </div>

        {/* Live Ecosystem Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-white/5 light:border-slate-200 text-center flex flex-col justify-between"
              >
                <div className={`p-2 rounded-xl bg-white/5 w-fit mx-auto mb-2 ${m.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-white light:text-slate-900">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 truncate">
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Flywheel Architecture Flow */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white light:text-slate-900">
              The Digital Product Flywheel
            </h3>
            <p className="text-xs text-slate-400 light:text-slate-600">
              Each component feeds traffic and trust to the others, compounding long-term value.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs font-mono">
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30">
              <span className="text-blue-400 font-bold block mb-1">01. CONTENT</span>
              <span className="text-[11px] text-slate-400">YouTube & Articles</span>
            </div>
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
              <span className="text-cyan-400 font-bold block mb-1">02. FREE VALUE</span>
              <span className="text-[11px] text-slate-400">Cheatsheets & Roadmaps</span>
            </div>
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
              <span className="text-indigo-400 font-bold block mb-1">03. GUIDES</span>
              <span className="text-[11px] text-slate-400">PDF Master Blueprints</span>
            </div>
            <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-500/30">
              <span className="text-violet-400 font-bold block mb-1">04. STARTERS</span>
              <span className="text-[11px] text-slate-400">Next.js & Flutter Kits</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30">
              <span className="text-purple-400 font-bold block mb-1">05. COURSES</span>
              <span className="text-[11px] text-slate-400">Full Bootcamps</span>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <span className="text-emerald-400 font-bold block mb-1">06. SAAS</span>
              <span className="text-[11px] text-slate-400">Recurring Subscriptions</span>
            </div>
          </div>
        </div>

        {/* 6 Income Pillars */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white light:text-slate-900">
            The 6 Pillars of the Ecosystem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center border border-white/10`}
                      >
                        <Icon className={`w-6 h-6 ${pillar.accent}`} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <span className="text-[11px] text-emerald-400 font-semibold block mt-0.5">
                        {pillar.revenueType}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4">
                    <Link
                      href={pillar.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>{pillar.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
