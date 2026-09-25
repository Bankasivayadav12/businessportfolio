import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Full-Stack Developer, Digital Products & Passive Income Platform`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.missionSubtitle,
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Flutter",
    "TypeScript",
    "MongoDB",
    "SaaS Products",
    "Digital Products",
    "Developer Templates",
    "Siva",
    "Siva TechVibes",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://siva.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${siteConfig.name} — Full-Stack Developer & Product Builder`,
    description: siteConfig.missionSubtitle,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full-Stack Developer & Product Builder`,
    description: siteConfig.missionSubtitle,
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: "Full-Stack Developer & Digital Product Creator",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://siva.dev",
    sameAs: [
      `https://github.com/${siteConfig.links.github}`,
      `https://linkedin.com/in/${siteConfig.links.linkedin}`,
      `https://youtube.com/@${siteConfig.links.youtube}`,
    ],
    description: siteConfig.missionSubtitle,
    knowsAbout: [
      "Next.js",
      "React",
      "Flutter",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Python",
      "SaaS Architecture",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
