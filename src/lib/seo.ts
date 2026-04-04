import type { Metadata } from "next";

import { defaultKeywords, pageSocialImages, siteConfig } from "./site-config";

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function composeTitle(title: string) {
  return title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = pageSocialImages.home,
  keywords = [],
  type = "website",
}: PageMetadataOptions): Metadata {
  const fullTitle = composeTitle(title);
  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
