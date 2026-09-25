"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Printer,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Sparkles,
} from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownload = () => {
    // Generate text/pdf trigger
    const element = document.createElement("a");
    const file = new Blob(
      [
        `SIVA — Full-Stack Developer & Product Builder
Email: ${siteConfig.links.email}
Location: ${siteConfig.location}
Website: https://siva.dev

SUMMARY:
${siteConfig.supportingText}

EXPERIENCE:
Full-Stack Developer & Digital Product Creator (2024 - Present)
- Architected RideALott mobility platform using Next.js, Flutter, MongoDB, and Firebase.
- Built EduALott adaptive educational platform with AI-generated quizzes and student telemetry.
- Created digital product ecosystem delivering 10+ developer boilerplates, guides, and courses.

SKILLS:
Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS, Redux
Backend: Node.js, Express, Python, Django, REST APIs
Database: MongoDB, Mongoose, PostgreSQL, Prisma
Mobile: Flutter, Dart, GetX, Firebase
DevOps: Vercel, Docker, Git, CI/CD
`,
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "Siva-FullStack-Developer-Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Print / Download Controls Bar */}
        <div className="flex items-center justify-between no-print p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-white/5 light:border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Updated for 2026 Production Standards</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 light:bg-white text-slate-200 light:text-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Resume</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Resume Paper Container */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/80 light:bg-white border border-white/10 light:border-slate-300 shadow-2xl space-y-10 text-slate-300 light:text-slate-800">
          {/* Header */}
          <div className="border-b border-white/10 light:border-slate-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900 tracking-tight">
                {siteConfig.fullName}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-blue-400 mt-1">
                {siteConfig.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Specializing in Next.js • React • TypeScript • MongoDB • Flutter
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1 font-mono sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{siteConfig.links.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.location}</span>
              </div>
              <div>Portfolio: https://siva.dev</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              Full-Stack Developer and Digital Product Builder with {siteConfig.experience} of dedicated engineering experience architecting responsive web applications, high-performance cross-platform Flutter mobile applications, and scalable SaaS platforms. Proven track record delivering 10+ end-to-end commercial solutions with sub-second page performance, robust database schemas, and clean, type-safe codebases.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 space-y-1">
                <strong className="text-white light:text-slate-900">Frontend:</strong>
                <p className="text-slate-400 light:text-slate-600">
                  Next.js (App Router, RSC), React 19, TypeScript, Tailwind CSS, Redux, Zustand, HTML5 Semantic SEO
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 space-y-1">
                <strong className="text-white light:text-slate-900">Backend & APIs:</strong>
                <p className="text-slate-400 light:text-slate-600">
                  Node.js, Express, Python, Django, Server Actions, RESTful APIs, JWT Auth, Webhooks
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 space-y-1">
                <strong className="text-white light:text-slate-900">Databases & Storage:</strong>
                <p className="text-slate-400 light:text-slate-600">
                  MongoDB, Mongoose, PostgreSQL, Prisma ORM, Redis Caching, Cloudflare R2
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-white/5 space-y-1">
                <strong className="text-white light:text-slate-900">Mobile & Cloud:</strong>
                <p className="text-slate-400 light:text-slate-600">
                  Flutter, Dart, GetX, Firebase Cloud Messaging, Vercel Edge, Git, CI/CD
                </p>
              </div>
            </div>
          </div>

          {/* Flagship Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              Key Projects Delivered
            </h2>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <h3 className="font-bold text-white light:text-slate-900 text-sm">
                    RideALott — Peer-to-Peer Mobility Platform
                  </h3>
                  <span className="text-slate-400 font-mono">Production</span>
                </div>
                <p className="text-xs text-blue-400 font-mono">Next.js • Flutter • MongoDB • Firebase</p>
                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  Engineered car-sharing portal and cross-platform Flutter client featuring sub-second geospatial search via MongoDB 2dsphere indexes and automated KYC driver verification.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <h3 className="font-bold text-white light:text-slate-900 text-sm">
                    EduALott — AI-Powered Learning Platform
                  </h3>
                  <span className="text-slate-400 font-mono">Live</span>
                </div>
                <p className="text-xs text-blue-400 font-mono">Next.js • MongoDB • AI APIs • TypeScript</p>
                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  Constructed adaptive educational platform serving 8,000+ enrolled students with real-time interactive coding playgrounds and Zod-validated automated AI assessments.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <h3 className="font-bold text-white light:text-slate-900 text-sm">
                    EVCafe — EV Charging Station Hub
                  </h3>
                  <span className="text-slate-400 font-mono">Live</span>
                </div>
                <p className="text-xs text-blue-400 font-mono">Next.js • Tailwind CSS • MongoDB</p>
                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  Built discovery web application for electric vehicle stations with cafe amenities, real-time connector statuses, and 100/100 Core Web Vitals Lighthouse audit scores.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 light:border-slate-200">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                Education
              </h2>
              <div className="text-xs">
                <h4 className="font-bold text-white light:text-slate-900">
                  Bachelor of Computer Science / Engineering
                </h4>
                <p className="text-slate-400">Core Focus: Algorithms, Distributed Systems, Software Engineering</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                Key Achievements
              </h2>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• Built digital product store with 850+ developer downloads</li>
                <li>• Creator of Siva TechVibes technical education channel</li>
                <li>• 99.9% uptime track record across client production deployments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
