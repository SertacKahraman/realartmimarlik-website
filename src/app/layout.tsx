import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

import { SiteSchema } from "@/components/seo/site-schema";
import { absoluteUrl } from "@/lib/seo";
import { pageSocialImages, siteConfig } from "@/lib/site-config";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Real Art Mimarlık",
    "Ordu mimarlık ofisi",
    "Ordu mimari tasarım",
    "Ordu iç mimari",
    "Ordu inşaat uygulama",
    "Altınordu mimarlık",
    "villa projesi",
    "mimari danışmanlık",
    "proje geliştirme",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl(pageSocialImages.home),
        width: 1200,
        height: 630,
        alt: siteConfig.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [absoluteUrl(pageSocialImages.home)],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/blog/feed.xml",
    },
  },
  icons: {
    icon: [
      { url: "/reallogo16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/reallogo32.webp", sizes: "32x32", type: "image/webp" },
    ],
    apple: [{ url: "/reallogo180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} overflow-x-hidden bg-black text-white antialiased`}
      >
        <SiteSchema />
        {children}
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
