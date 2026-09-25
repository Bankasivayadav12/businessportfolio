import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/db/mongodb";
import { formatDate } from "@/lib/utils";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { ShareButton } from "@/components/blog/ShareButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Siva Technical Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back navigation */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 light:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-800">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white light:text-slate-900">
                  {post.author.name}
                </p>
                <p className="text-xs text-slate-400">
                  {post.author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(post.publishedAt)}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>{post.readingTime}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 shadow-2xl bg-slate-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body Content */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 light:bg-white border border-white/10 light:border-slate-200 text-slate-200 light:text-slate-800 leading-relaxed space-y-6 text-sm sm:text-base">
          <p className="text-lg text-slate-300 light:text-slate-700 font-medium leading-relaxed border-l-4 border-blue-500 pl-4 py-1">
            {post.excerpt}
          </p>

          <div className="prose prose-invert max-w-none space-y-4 whitespace-pre-line font-normal text-slate-300 light:text-slate-700">
            {post.content}
          </div>
        </div>

        {/* Tags & Social Share */}
        <div className="p-6 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-white/5 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-lg bg-white/5 light:bg-slate-200 text-slate-300 light:text-slate-700 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Share article:</span>
            <ShareButton />
          </div>
        </div>

        {/* Related Posts */}
        <div className="space-y-6 pt-6">
          <h3 className="text-2xl font-bold text-white light:text-slate-900">
            Recommended Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="p-6 rounded-2xl bg-slate-900/60 light:bg-white border border-white/10 hover:border-blue-500/40 transition-all space-y-2 group"
              >
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">
                  {rel.category}
                </span>
                <h4 className="text-base font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
