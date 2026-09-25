import { getProjects, getProducts } from "@/lib/db/mongodb";
import { Hero } from "@/components/hero/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { WhatIBuild } from "@/components/home/WhatIBuild";
import { IdeaToProduction } from "@/components/home/IdeaToProduction";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandMessageSection } from "@/components/home/BrandMessageSection";

export const revalidate = 60;

export default async function HomePage() {
  const [projects, products] = await Promise.all([
    getProjects(),
    getProducts(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSection />
      <WhatIBuild />
      <IdeaToProduction />
      <FeaturedProjects projects={projects} />
      <FeaturedProducts products={products} />
      <BrandMessageSection />
    </div>
  );
}
