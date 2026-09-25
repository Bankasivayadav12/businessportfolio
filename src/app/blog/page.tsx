import { Metadata } from "next";
import { getBlogPosts } from "@/lib/db/mongodb";
import { BlogClient } from "@/components/blog/BlogClient";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights — Siva",
  description:
    "Articles, architectural blueprints, and deep dives on Next.js 15, React 19, MongoDB, Flutter, and SaaS engineering.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogClient initialPosts={posts} />
      </div>
    </div>
  );
}
