import { Metadata } from "next";
import { getProducts, getProductBySlug } from "@/lib/db/mongodb";
import { CheckoutClient } from "@/components/checkout/CheckoutClient";

export const metadata: Metadata = {
  title: "Secure Checkout — SIVA Platform",
  description: "Complete your purchase for digital templates, starter kits, or developer guides.",
};

interface PageProps {
  searchParams: Promise<{ product?: string }>;
}

export default async function CheckoutPage({ searchParams }: PageProps) {
  const { product: productSlug } = await searchParams;
  const products = await getProducts();
  const selectedProduct = productSlug ? await getProductBySlug(productSlug) : products[0];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <CheckoutClient
          products={products}
          initialProductSlug={selectedProduct?.slug || products[0]?.slug}
        />
      </div>
    </div>
  );
}
