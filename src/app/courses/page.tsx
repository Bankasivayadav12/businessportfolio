import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCourses } from "@/lib/db/mongodb";
import { formatCurrency } from "@/lib/utils";
import {
  GraduationCap,
  Clock,
  BookOpen,
  Star,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full-Stack & Mobile Developer Courses — Siva",
  description:
    "Comprehensive, practical engineering courses in JavaScript, React 19, Next.js Full-Stack, Flutter, and Senior Technical Interview preparation.",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Education & Bootcamps</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
            Learn Production Full-Stack Engineering
          </h1>
          <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
            In-depth video courses and real-world project masterclasses designed to take you from foundational syntax to architecting commercial-grade applications.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Course Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-violet-300 backdrop-blur-md">
                      {course.level}
                    </span>
                  </div>
                  {course.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-violet-600 text-white shadow-sm">
                        BESTSELLER
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  {/* Rating & Students */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{course.rating}</span>
                      <span className="text-slate-500">({course.reviewsCount})</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Users className="w-3.5 h-3.5" />
                      <span>{course.enrolledCount}+ learners</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-violet-400 transition-colors line-clamp-1">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
                    {course.subtitle}
                  </p>

                  {/* Course Metrics */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{course.lessonsCount} lessons</span>
                    </span>
                    <span>Instructor: <strong className="text-white light:text-slate-900">{course.instructor}</strong></span>
                  </div>

                  {/* Key learning takeaways */}
                  <div className="space-y-1.5 pt-2">
                    {course.whatYouWillLearn.slice(0, 2).map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300 light:text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Enroll CTA */}
              <div className="p-6 pt-0 border-t border-white/5 light:border-slate-100 mt-2">
                <div className="flex items-baseline justify-between pt-3 mb-3">
                  <div>
                    <span className="text-2xl font-black text-white light:text-slate-900">
                      {formatCurrency(course.price)}
                    </span>
                    {course.originalPrice && (
                      <span className="ml-2 text-xs text-slate-500 line-through">
                        {formatCurrency(course.originalPrice)}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-violet-400 font-mono">
                    Lifetime Access
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="py-2.5 rounded-xl text-center text-xs font-semibold border border-white/10 light:border-slate-300 text-slate-300 light:text-slate-700 hover:bg-white/5 transition-colors"
                  >
                    Curriculum
                  </Link>
                  <Link
                    href={`/courses/${course.slug}#enroll`}
                    className="py-2.5 rounded-xl text-center text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-violet-500/20"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Enroll Now</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
