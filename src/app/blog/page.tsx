import type { Metadata } from "next";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { blogPosts } from "@/lib/data/blog";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { pageSocialImages, siteConfig } from "@/lib/site-config";

import BlogContent from "./blog-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Mimari trendler, inşaat rehberleri, kentsel dönüşüm içerikleri ve Ordu odaklı uzman yazıları için Real Art Mimarlık blogunu keşfedin.",
  path: "/blog",
  image: pageSocialImages.blog,
  keywords: [
    "Ordu mimarlık blogu",
    "inşaat rehberi",
    "villa maliyeti",
    "kentsel dönüşüm rehberi",
  ],
});

const blogPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Blog",
      description:
        "Real Art Mimarlık blogunda mimari trendler, inşaat rehberleri ve kentsel dönüşüm içerikleri yer alır.",
      url: absoluteUrl("/blog"),
      inLanguage: siteConfig.language,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: blogPosts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: absoluteUrl(`/blog/${post.slug}`),
            image: absoluteUrl(post.image),
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: siteConfig.name,
            },
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLdScript data={blogPageJsonLd} />
      <HeaderLayout />
      <BlogContent />
      <SiteFooter />
    </main>
  );
}
