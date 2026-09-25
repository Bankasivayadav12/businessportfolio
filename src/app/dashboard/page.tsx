import { Metadata } from "next";
import { getCurrentUser } from "@/lib/auth";
import { getCourses, getProducts } from "@/lib/db/mongodb";
import { DashboardClient } from "@/components/dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Student & Customer Dashboard — Siva Platform",
  description: "Track your course progress, watch lessons, and access purchased digital downloads.",
};

export default async function DashboardPage() {
  const currentUser = await getCurrentUser();
  const [courses, products] = await Promise.all([
    getCourses(),
    getProducts(),
  ]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardClient
          user={currentUser}
          allCourses={courses}
          allProducts={products}
        />
      </div>
    </div>
  );
}
