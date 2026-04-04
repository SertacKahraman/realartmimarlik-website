import type { Metadata } from "next";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { servicesList } from "@/lib/data/services";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { pageSocialImages, siteConfig } from "@/lib/site-config";

import ServicesContent from "./services-content";

const servicesPageTitle = "Hizmetler";
const servicesPageDescription =
  "Real Art Mimarlık; Ordu ve Altınordu'da mimari tasarım, iç mimari, inşaat uygulama, kentsel dönüşüm, peyzaj tasarımı ve proje danışmanlığı hizmetleri sunar.";

export const metadata: Metadata = buildPageMetadata({
  title: servicesPageTitle,
  description: servicesPageDescription,
  path: "/services",
  image: pageSocialImages.services,
  keywords: [
    "Ordu mimarlık hizmetleri",
    "Ordu mimari tasarım",
    "Ordu iç mimari",
    "Ordu inşaat uygulama",
    "Ordu kentsel dönüşüm",
    "Ordu peyzaj tasarımı",
    "Ordu proje danışmanlığı",
  ],
});

const servicesPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Hizmetler",
      description: servicesPageDescription,
      url: absoluteUrl("/services"),
      inLanguage: "tr-TR",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: servicesList.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: absoluteUrl(`/services/${service.slug}`),
            image: absoluteUrl(service.heroImage),
            areaServed: {
              "@type": "City",
              name: "Ordu",
            },
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
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
          name: "Hizmetler",
          item: absoluteUrl("/services"),
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLdScript data={servicesPageJsonLd} />
      <HeaderLayout />
      <ServicesContent />
      <SiteFooter />
    </main>
  );
}
