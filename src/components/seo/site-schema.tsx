import { JsonLdScript } from "@/components/seo/json-ld-script";
import { absoluteUrl } from "@/lib/seo";
import { pageSocialImages, siteConfig } from "@/lib/site-config";

export function SiteSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: absoluteUrl("/real-logo.webp"),
        image: absoluteUrl(pageSocialImages.home),
        description:
          "Ordu Altınordu merkezli mimari tasarım, iç mimari, inşaat uygulama ve proje danışmanlığı hizmetleri sunan mimarlık şirketi.",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.district,
          addressRegion: siteConfig.address.city,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: siteConfig.address.city,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          availableLanguage: "Turkish",
        },
        knowsAbout: [
          "Mimari Tasarım",
          "İç Mimari",
          "İnşaat Uygulama",
          "Kentsel Dönüşüm",
          "Peyzaj Tasarımı",
          "Proje Danışmanlığı",
        ],
        sameAs: siteConfig.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "tr-TR",
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}
