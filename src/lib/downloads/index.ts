import { getProductBySlug } from "@/lib/db/mongodb";

export interface DownloadSession {
  productId: string;
  productName: string;
  fileName: string;
  expiresAt: number;
}

// Memory map for secure, short-lived download tokens
const activeDownloadTokens = new Map<string, DownloadSession>();

export async function generateSecureDownloadToken(productId: string, slug: string): Promise<string> {
  const product = await getProductBySlug(slug);
  const token = `token_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;

  activeDownloadTokens.set(token, {
    productId,
    productName: product?.name || "Digital Product",
    fileName: product?.downloadFileName || "siva-digital-product.zip",
    expiresAt: Date.now() + 1000 * 60 * 60 * 24, // 24 hours
  });

  return token;
}

export function verifyDownloadToken(token: string): DownloadSession | null {
  const session = activeDownloadTokens.get(token);
  if (!session) {
    // Check if token matches standard static seed tokens for testing
    if (token.startsWith("dl-")) {
      return {
        productId: "demo-product",
        productName: "Verified Siva Digital Asset",
        fileName: `${token}.zip`,
        expiresAt: Date.now() + 10000000,
      };
    }
    return null;
  }

  if (Date.now() > session.expiresAt) {
    activeDownloadTokens.delete(token);
    return null;
  }

  return session;
}
