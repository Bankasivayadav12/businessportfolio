import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCourseBySlug, getCourses } from "@/lib/db/mongodb";
import { formatCurrency } from "@/lib/utils";
import { CourseCurriculumAccordion } from "@/components/courses/CourseCurriculumAccordion";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Star,
  Users,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  PlayCircle,
  HelpCircle,
  Award,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} — Full Curriculum & Enrollment`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                {course.level} Level
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {course.lessonsCount} Video Lessons
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white light:text-slate-900 tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed font-medium">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2 border-y border-white/5 py-3">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{course.rating}</span>
                <span className="text-slate-500">({course.reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-400" />
                <span>{course.enrolledCount}+ enrolled</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{course.duration} on-demand video</span>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 shadow-2xl bg-slate-900">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <PlayCircle className="w-8 h-8 ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Enrollment Card */}
          <div className="lg:col-span-5 space-y-6" id="enroll">
            <div className="p-8 rounded-3xl bg-slate-900/80 light:bg-white border border-white/10 light:border-slate-200 backdrop-blur-xl shadow-2xl space-y-6 sticky top-28">
              {/* Pricing */}
              <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-white light:text-slate-900">
                    {formatCurrency(course.price)}
                  </div>
                  {course.originalPrice && (
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-slate-500 line-through">
                        {formatCurrency(course.originalPrice)}
                      </span>
                      <span className="text-xs font-bold text-rose-400">
                        Limited Time Offer
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-violet-500/20 text-violet-400 font-bold block mb-1">
                    Full Access
                  </span>
                  <span className="text-[10px] text-slate-500">Certificate of Completion</span>
                </div>
              </div>

              {/* Instant Enrollment Trigger */}
              <div className="space-y-3">
                <Link
                  href={`/checkout?course=${course.slug}&amount=${course.price}`}
                  className="w-full py-4 rounded-2xl text-center font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Enroll in Course — {formatCurrency(course.price)}</span>
                </Link>

                <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>30-Day Money-Back Guarantee • Lifetime Access</span>
                </p>
              </div>

              {/* Included Perks */}
              <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-300 light:text-slate-700">
                <h4 className="font-bold text-slate-400 uppercase tracking-wider">
                  Course Inclusions
                </h4>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400" />
                  <span>{course.duration} high-definition video walkthroughs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400" />
                  <span>Full source code repository for each module</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400" />
                  <span>Private community Discord channel for code reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400" />
                  <span>Verified certificate of completion upon project defense</span>
                </div>
              </div>

              {/* Instructor Box */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt={course.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white light:text-slate-900">
                    Instructor: {course.instructor}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Full-Stack Developer & YouTube Creator (Siva TechVibes)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Will Learn */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-6">
          <h3 className="text-2xl font-bold text-white light:text-slate-900">
            What You Will Master in This Course
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.whatYouWillLearn.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-950/40 light:bg-slate-50 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Curriculum Accordion */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Course Curriculum & Modules
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {course.modules.length} Modules • {course.lessonsCount} Lessons • {course.duration} Total Length
              </p>
            </div>
          </div>

          <CourseCurriculumAccordion modules={course.modules} />
        </div>

        {/* Requirements */}
        <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 space-y-4">
          <h3 className="text-xl font-bold text-white light:text-slate-900">
            Prerequisites & Requirements
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 light:text-slate-700">
            {course.requirements.map((req, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
