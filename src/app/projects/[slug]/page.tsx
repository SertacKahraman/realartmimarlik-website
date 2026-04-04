import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { projects } from "@/lib/data/projects";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

import ProjectDetailContent from "./project-detail-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  return buildPageMetadata({
    title: project.title,
    description: `${project.title}, ${project.location} konumunda geliştirilen ${project.category.toLocaleLowerCase(
      "tr-TR"
    )} projesidir. ${project.description}`,
    path: `/projects/${project.slug}`,
    image: project.image,
    keywords: [
      `${project.title} projesi`,
      `${project.location} mimari proje`,
      `${project.category} projesi Ordu`,
      "Real Art Mimarlık proje detayı",
    ],
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.longDescription,
    image: absoluteUrl(project.image),
    url: absoluteUrl(`/projects/${project.slug}`),
    dateCreated: project.year.toString(),
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLdScript data={projectJsonLd} />
      <HeaderLayout />
      <ProjectDetailContent project={project} />
      <SiteFooter />
    </main>
  );
}
