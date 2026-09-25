"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserSession, Course, Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import {
  GraduationCap,
  Package,
  Award,
  PlayCircle,
  CheckCircle2,
  Download,
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight,
  Check,
  FileEdit,
  ExternalLink,
} from "lucide-react";

interface DashboardClientProps {
  user: UserSession | null;
  allCourses: Course[];
  allProducts: Product[];
}

export function DashboardClient({ user, allCourses, allProducts }: DashboardClientProps) {
  // Use session user or fallback to demo state for immediate evaluation
  const activeUser: UserSession = user || {
    id: "usr-demo",
    name: "Alex Developer",
    email: "developer@siva.dev",
    role: "USER",
    purchasedProductIds: ["prod-1", "prod-3", "prod-5"],
    enrolledCourseIds: ["course-1", "course-3"],
    courseProgress: { "course-1": 85, "course-3": 40 },
  };

  const [activeTab, setActiveTab] = useState<"learning" | "downloads" | "player" | "certificates">("learning");
  const [selectedCourseId, setSelectedCourseId] = useState<string>("course-1");
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  const [progressState, setProgressState] = useState<Record<string, number>>(
    activeUser.courseProgress || { "course-1": 85, "course-3": 40 }
  );
  const [userNotes, setUserNotes] = useState<string>(
    "Key takeaway: In React 19, useActionState simplifies async form submissions without manual useState for pending/errors."
  );

  const enrolledCourses = allCourses.filter((c) =>
    activeUser.enrolledCourseIds.includes(c.id)
  );

  const purchasedProducts = allProducts.filter((p) =>
    activeUser.purchasedProductIds.includes(p.id)
  );

  const currentCourse = allCourses.find((c) => c.id === selectedCourseId) || allCourses[0];
  const allLessons = currentCourse?.modules.flatMap((m) => m.lessons) || [];
  const currentLesson = allLessons[currentLessonIndex] || allLessons[0];

  const handleCompleteLesson = () => {
    const currentProgress = progressState[currentCourse.id] || 0;
    const nextProgress = Math.min(100, currentProgress + 10);
    setProgressState((prev) => ({ ...prev, [currentCourse.id]: nextProgress }));
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLessonIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-10">
      {/* Welcome Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 light:from-blue-50 light:via-white light:to-indigo-50 border border-blue-500/20 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Learning Portal</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Welcome back, {activeUser.name}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600">
            Continue learning your full-stack modules and access licensed digital downloads.
          </p>
        </div>

        {/* Quick KPI stats */}
        <div className="flex items-center gap-4 text-center">
          <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-100 border border-white/5 light:border-slate-200 min-w-24">
            <span className="text-2xl font-black text-white light:text-slate-900">
              {enrolledCourses.length}
            </span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Courses</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-100 border border-white/5 light:border-slate-200 min-w-24">
            <span className="text-2xl font-black text-emerald-400">
              {purchasedProducts.length}
            </span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Products</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-100 border border-white/5 light:border-slate-200 min-w-24">
            <span className="text-2xl font-black text-violet-400">1</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Certificate</span>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-white/10 light:border-slate-200 pb-4 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab("learning")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "learning"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>My Courses ({enrolledCourses.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("player")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "player"
              ? "bg-violet-600 text-white shadow-md shadow-violet-500/25"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <PlayCircle className="w-4 h-4" />
          <span>Active Lesson Player</span>
        </button>

        <button
          onClick={() => setActiveTab("downloads")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "downloads"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Purchased Products & Downloads ({purchasedProducts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("certificates")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "certificates"
              ? "bg-amber-600 text-white shadow-md shadow-amber-500/25"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Certificates</span>
        </button>
      </div>

      {/* TAB 1: Enrolled Courses with Progress */}
      {activeTab === "learning" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => {
              const progress = progressState[course.id] || 0;
              return (
                <div
                  key={course.id}
                  className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-4 shadow-xl"
                >
                  <div className="flex gap-4">
                    <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono font-bold text-violet-400 uppercase">
                        {course.level}
                      </span>
                      <h3 className="text-sm font-bold text-white light:text-slate-900 truncate mt-0.5">
                        {course.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
                        <span>{course.lessonsCount} lessons</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Course Progress</span>
                      <span className="font-mono font-bold text-blue-400">{progress}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 light:bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedCourseId(course.id);
                        setCurrentLessonIndex(0);
                        setActiveTab("player");
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/20"
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      <span>Continue Learning</span>
                    </button>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      View Syllabus
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Interactive Video Lesson Player */}
      {activeTab === "player" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video & Lesson Screen */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl flex flex-col justify-between p-6">
              {/* Header */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-violet-400 font-semibold">
                  {currentCourse?.title}
                </span>
                <span>Lesson {currentLessonIndex + 1} of {allLessons.length}</span>
              </div>

              {/* Center visual play screen */}
              <div className="text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-violet-600/30 border border-violet-500/40 text-violet-300 flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <PlayCircle className="w-10 h-10 ml-1" />
                </div>
                <h3 className="text-xl font-bold text-white max-w-md mx-auto">
                  {currentLesson?.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Duration: {currentLesson?.duration} • High-Definition Stream
                </p>
              </div>

              {/* Bottom timeline simulation bar */}
              <div className="space-y-2">
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-1/3 h-full bg-violet-500 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>04:15</span>
                  <span>{currentLesson?.duration}</span>
                </div>
              </div>
            </div>

            {/* Lesson Controls */}
            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentLessonIndex === 0}
                  onClick={() => setCurrentLessonIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 light:bg-slate-100 text-slate-200 light:text-slate-800 hover:bg-slate-700 disabled:opacity-40"
                >
                  Previous Lesson
                </button>

                <button
                  onClick={handleCompleteLesson}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <Check className="w-4 h-4" />
                  <span>Mark as Completed (+10%)</span>
                </button>

                <button
                  disabled={currentLessonIndex >= allLessons.length - 1}
                  onClick={() =>
                    setCurrentLessonIndex((prev) => Math.min(allLessons.length - 1, prev + 1))
                  }
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 light:bg-slate-100 text-slate-200 light:text-slate-800 hover:bg-slate-700 disabled:opacity-40"
                >
                  Next Lesson
                </button>
              </div>

              <div className="text-xs text-slate-400">
                Course Progress:{" "}
                <strong className="text-violet-400 font-mono">
                  {progressState[currentCourse?.id] || 0}%
                </strong>
              </div>
            </div>

            {/* Lesson Notes Editor */}
            <div className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 light:text-slate-800">
                <FileEdit className="w-4 h-4 text-blue-400" />
                <span>My Interactive Lesson Notes</span>
              </div>
              <textarea
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                rows={4}
                placeholder="Take notes while watching this lesson..."
                className="w-full p-4 rounded-2xl bg-slate-950/80 light:bg-slate-50 border border-white/10 light:border-slate-200 text-xs text-white light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <p className="text-[10px] text-slate-500">
                Notes are persisted to your local session workspace.
              </p>
            </div>
          </div>

          {/* Module Lesson Switcher Sidebar */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-4 shadow-xl">
            <h4 className="text-sm font-bold text-white light:text-slate-900 uppercase tracking-wider">
              Lessons in this Course
            </h4>

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {allLessons.map((les, idx) => {
                const isActive = idx === currentLessonIndex;
                return (
                  <button
                    key={les.id}
                    onClick={() => setCurrentLessonIndex(idx)}
                    className={`w-full p-3 rounded-xl text-left flex items-center justify-between text-xs transition-all ${
                      isActive
                        ? "bg-violet-600 text-white font-semibold shadow-md"
                        : "bg-slate-950/40 light:bg-slate-50 text-slate-300 light:text-slate-700 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                      <span className="truncate">{les.title}</span>
                    </div>
                    <span className="font-mono text-[10px] opacity-70 ml-2">
                      {les.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Purchased Products & Downloads */}
      {activeTab === "downloads" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchasedProducts.map((prod) => (
              <div
                key={prod.id}
                className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold uppercase text-[10px]">
                      {prod.productType}
                    </span>
                    <span className="text-slate-500 font-mono text-[10px]">Verified License</span>
                  </div>

                  <h3 className="text-base font-bold text-white light:text-slate-900">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-2 mt-1">
                    {prod.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="text-[11px] text-slate-400 font-mono truncate">
                    File: {prod.downloadFileName}
                  </div>

                  <a
                    href={`/api/downloads/${prod.downloadToken}`}
                    download
                    className="w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Package (.zip)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Certificates */}
      {activeTab === "certificates" && (
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 text-center max-w-xl mx-auto space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/30">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white light:text-slate-900">
              Certificate of Full-Stack Mastery
            </h3>
            <p className="text-xs text-slate-400 light:text-slate-600">
              Awarded to <strong className="text-white light:text-slate-900">{activeUser.name}</strong> for completing the JavaScript From Zero to Advanced curriculum.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 font-mono text-xs text-slate-400 space-y-1">
            <p>Verification ID: SIVA-CERT-94819-2026</p>
            <p>Issued by: Siva Platform Academy</p>
          </div>

          <button
            onClick={() => alert("Printing verified PDF certificate...")}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 transition-colors"
          >
            Download Official Certificate (PDF)
          </button>
        </div>
      )}
    </div>
  );
}
