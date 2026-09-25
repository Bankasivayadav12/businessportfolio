import { Metadata } from "next";
import Image from "next/image";
import { initialYouTubeVideos } from "@/lib/data/seedData";
import { siteConfig } from "@/config/site";
import { YouTubeIcon } from "@/components/ui/Icons";
import {
  PlayCircle,
  Eye,
  Calendar,
  Sparkles,
  ExternalLink,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Siva TechVibes — YouTube Channel & Tutorials",
  description:
    "Watch high-impact engineering tutorials, Next.js masterclasses, Flutter mobile architectures, and passive income breakdowns by Siva on YouTube.",
};

export default function YouTubePage() {
  const featured = initialYouTubeVideos.find((v) => v.featured) || initialYouTubeVideos[0];
  const otherVideos = initialYouTubeVideos.filter((v) => v.id !== featured.id);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Channel Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-red-950/40 light:from-rose-50 light:via-white light:to-red-50 border border-rose-500/20 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400">
              <YouTubeIcon className="w-4 h-4" />
              <span>Official YouTube Brand</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 tracking-tight">
              {siteConfig.youtubeBrand}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
              Real-world code walkthroughs, full-stack application builds from scratch, system design breakdowns, and practical guidance on building profitable digital products.
            </p>
          </div>

          <a
            href={`https://youtube.com/@${siteConfig.links.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl font-bold text-sm text-white bg-rose-600 hover:bg-rose-500 transition-colors flex items-center justify-center gap-2.5 shadow-xl shadow-rose-600/30 whitespace-nowrap self-start md:self-auto"
          >
            <YouTubeIcon className="w-5 h-5" />
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Featured Video Spotlight */}
        {featured && (
          <div className="p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-rose-500/30 shadow-2xl space-y-6">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Featured Masterclass</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <a
                  href={featured.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 ml-0.5" />
                  </div>
                </a>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 light:bg-slate-100 text-slate-400">
                  {featured.category}
                </span>

                <h2 className="text-2xl font-extrabold text-white light:text-slate-900 leading-snug">
                  {featured.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                  {featured.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>{featured.views} views</span>
                  </span>
                  <span>•</span>
                  <span>{featured.publishedDate}</span>
                </div>

                <div className="pt-2">
                  <a
                    href={featured.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-md shadow-rose-600/25"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white light:text-slate-900">
            Recent Releases & Guides
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherVideos.map((video) => (
              <div
                key={video.id}
                className="rounded-3xl bg-slate-900/60 light:bg-white border border-white/10 light:border-slate-200 overflow-hidden flex flex-col justify-between hover:border-rose-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-800">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg">
                        <PlayCircle className="w-6 h-6 ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900/90 text-white">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-blue-400" />
                        <span>{video.views}</span>
                      </span>
                      <span>{video.publishedDate}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white light:text-slate-900 line-clamp-2 group-hover:text-rose-400 transition-colors">
                      {video.title}
                    </h4>

                    <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-white/5 light:border-slate-100 mt-2">
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full pt-3 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    <span>Watch Tutorial</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
