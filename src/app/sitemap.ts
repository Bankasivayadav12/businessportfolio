import { MetadataRoute } from "next";
import { getProjects, getProducts, getCourses, getBlogPosts } from "@/lib/db/mongodb";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://siva.dev";

  const staticRoutes = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/products",
    "/services",
    "/courses",
    "/blog",
    "/youtube",
    "/passive-income",
    "/resources",
    "/contact",
    "/resume",
    "/hire-me",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const [projects, products, courses, blogPosts] = await Promise.all([
    getProjects(),
    getProducts(),
    getCourses(),
    getBlogPosts(),
  ]);

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const courseRoutes = courses.map((c) => ({
    url: `${baseUrl}/courses/${c.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...productRoutes,
    ...courseRoutes,
    ...blogRoutes,
  ];
}
