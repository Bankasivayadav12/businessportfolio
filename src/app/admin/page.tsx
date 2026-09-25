import { Metadata } from "next";
import { getCurrentUser } from "@/lib/auth";
import {
  getLeads,
  getOrders,
  getProducts,
  getCourses,
  getBlogPosts,
  getProjects,
  getContactMessages,
  getNewsletterSubscribers,
  getAnalyticsSummary,
} from "@/lib/db/mongodb";
import { AdminClient } from "@/components/admin/AdminClient";

export const metadata: Metadata = {
  title: "Admin Executive Dashboard & CRM — Siva Platform",
  description: "Manage client leads, store orders, products, courses, blog posts, and analytics.",
};

export default async function AdminPage() {
  const currentUser = await getCurrentUser();
  const [
    leads,
    orders,
    products,
    courses,
    blogPosts,
    projects,
    messages,
    subscribers,
    analytics,
  ] = await Promise.all([
    getLeads(),
    getOrders(),
    getProducts(),
    getCourses(),
    getBlogPosts(),
    getProjects(),
    getContactMessages(),
    getNewsletterSubscribers(),
    getAnalyticsSummary(),
  ]);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdminClient
          user={currentUser}
          initialLeads={leads}
          initialOrders={orders}
          initialProducts={products}
          initialCourses={courses}
          initialBlogPosts={blogPosts}
          initialProjects={projects}
          initialMessages={messages}
          initialSubscribers={subscribers}
          analytics={analytics}
        />
      </div>
    </div>
  );
}
