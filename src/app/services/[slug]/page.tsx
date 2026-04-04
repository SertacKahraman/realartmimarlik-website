import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { services } from "@/lib/data/services";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

import ServiceDetailContent from "./service-detail-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return { title: "Hizmet Bulunamadı" };
  }

  const title = service.title;
  const description = `${service.description} Real Art Mimarlık, Ordu'da ${service.title.toLocaleLowerCase(
    "tr-TR"
  )} hizmeti sunar.`;

  return buildPageMetadata({
    title,
    description,
    path: `/services/${slug}`,
    image: service.heroImage,
    keywords: [
      `${service.title} Ordu`,
      `${service.title} hizmeti`,
      `Real Art Mimarlık ${service.title}`,
      "Ordu mimarlık ofisi",
    ],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: {
          "@type": "City",
          name: "Ordu",
        },
        url: absoluteUrl(`/services/${slug}`),
        image: absoluteUrl(service.heroImage),
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
            name: "Hizmetler",
            item: absoluteUrl("/services"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: absoluteUrl(`/services/${slug}`),
          },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLdScript data={serviceJsonLd} />
      <HeaderLayout />
      <ServiceDetailContent slug={slug} service={service} />
      <SiteFooter />
    </main>
  );
}
