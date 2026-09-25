import { Metadata } from "next";
import { getProjects } from "@/lib/db/mongodb";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Production Case Studies",
  description:
    "Explore full-stack web applications, Flutter mobile apps, SaaS products, and educational platforms built by Siva.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsClient initialProjects={projects} />
      </div>
    </div>
  );
}
