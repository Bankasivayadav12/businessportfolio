import { Metadata } from "next";
import { getProducts } from "@/lib/db/mongodb";
import { ProductsClient } from "@/components/products/ProductsClient";

export const metadata: Metadata = {
  title: "Digital Products Marketplace — Developer Starters, PDFs & Templates",
  description:
    "Production-ready Next.js SaaS starters, Flutter templates, UI kits, and comprehensive JavaScript & React interview guides crafted by Siva.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsClient initialProducts={products} />
      </div>
    </div>
  );
}
