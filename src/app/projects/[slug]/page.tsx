import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getProjects } from "@/lib/db/mongodb";
import { GitHubIcon } from "@/components/ui/Icons";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Workflow,
  Sparkles,
  Rocket,
  TrendingUp,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study & Technical Architecture`,
    description: project.caseStudy.overview,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight leading-tight">
            {project.title}: Engineering Case Study
          </h1>

          <p className="text-lg sm:text-xl text-blue-400 font-medium">
            {project.tagline}
          </p>

          <p className="text-base text-slate-300 light:text-slate-600 leading-relaxed max-w-3xl">
            {caseStudy.overview}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 light:text-slate-800 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 border border-white/10 light:border-slate-300 transition-colors flex items-center gap-2"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Source Code Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-rose-500/20 space-y-4">
            <div className="inline-flex p-3 rounded-xl bg-rose-500/10 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              The Problem & Friction Points
            </h3>
            <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-emerald-500/20 space-y-4">
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              The Engineered Solution
            </h3>
            <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Visual Diagram Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
              <Workflow className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                System Architecture
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-500">
                Data pipeline, client interfaces, and edge caching topology
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
            {caseStudy.architecture}
          </p>

          {/* Architecture Diagram Visualization */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 font-mono text-xs text-slate-300 space-y-4 overflow-x-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-500">
              <span>TOPOLOGY FLOW</span>
              <span className="text-emerald-400">LATENCY &lt; 85ms</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30">
                <span className="text-blue-400 font-bold block mb-1">CLIENT TIER</span>
                <span className="text-[11px] text-slate-400">Next.js Web / Flutter Mobile</span>
              </div>
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
                <span className="text-indigo-400 font-bold block mb-1">EDGE GATEWAY</span>
                <span className="text-[11px] text-slate-400">Vercel Edge / Cloudflare CDN</span>
              </div>
              <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-500/30">
                <span className="text-violet-400 font-bold block mb-1">COMPUTE & API</span>
                <span className="text-[11px] text-slate-400">Server Actions & REST</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <span className="text-emerald-400 font-bold block mb-1">PERSISTENCE</span>
                <span className="text-[11px] text-slate-400">MongoDB Atlas + Redis</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800 light:bg-slate-100 text-blue-300 light:text-blue-700 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Core Engineered Features */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Key Features Delivered
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-500">
                Core product functionalities implemented in production
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.features.map((feat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-950/40 light:bg-slate-50 border border-white/5 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-6">
          <h3 className="text-2xl font-bold text-white light:text-slate-900">
            Technical Challenges & Resolutions
          </h3>

          <div className="space-y-4">
            {caseStudy.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/50 light:bg-slate-50 border border-white/5 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Challenge: {ch}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 pl-5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Resolution: {caseStudy.solutions[idx] || "Optimized architecture and caching."}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Benchmarks */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/50 to-indigo-950/50 light:from-blue-50 light:to-indigo-50 border border-blue-500/20 space-y-6">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
            <TrendingUp className="w-4 h-4" />
            <span>Audited Production Benchmarks</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {caseStudy.performance.map((p, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950/60 text-center">
                <span className="text-2xl font-black text-white">{p.value}</span>
                <span className="text-xs text-slate-400 block mt-1">{p.metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              Interested in building a product like {project.title}?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Let&apos;s discuss architecture, timelines, and deliverables.
            </p>
          </div>
          <Link
            href="/hire-me"
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20 whitespace-nowrap"
          >
            <span>Start Your Project</span>
            <Rocket className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
