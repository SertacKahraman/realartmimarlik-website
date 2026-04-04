import type { Metadata } from "next";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { projectsList } from "@/lib/data/projects";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { pageSocialImages, siteConfig } from "@/lib/site-config";

import ProjectsContent from "./projects-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Projelerimiz",
  description:
    "Real Art Mimarlık portföyünde Ordu'da geliştirilen gerçek konut, villa, ticari yapı ve uygulama projelerini inceleyin.",
  path: "/projects",
  image: pageSocialImages.projects,
  keywords: [
    "Ordu mimari projeler",
    "Ordu villa projeleri",
    "gerçek mimarlık projeleri",
    "Real Art Mimarlık projeleri",
  ],
});

const projectsPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Projelerimiz",
      description:
        "Real Art Mimarlık portföyünde Ordu'da geliştirilen gerçek konut, villa, ticari yapı ve uygulama projeleri.",
      url: absoluteUrl("/projects"),
      inLanguage: siteConfig.language,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projectsList.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: absoluteUrl(`/projects/${project.slug}`),
            image: absoluteUrl(project.image),
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
          name: "Projelerimiz",
          item: absoluteUrl("/projects"),
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLdScript data={projectsPageJsonLd} />
      <HeaderLayout />
      <ProjectsContent />
      <SiteFooter />
    </main>
  );
}
