function normalizeUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

const defaultSiteUrl = "https://www.realartmimarlik.com";
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

export const siteConfig = {
  name: "Real Art Mimarlık",
  url: normalizeUrl(configuredSiteUrl),
  locale: "tr_TR",
  language: "tr-TR",
  defaultTitle:
    "Real Art Mimarlık | Ordu'da Mimari Tasarım ve İnşaat Çözümleri",
  description:
    "Real Art Mimarlık, Ordu merkezli mimari tasarım, iç mimari, inşaat uygulama, proje geliştirme ve danışmanlık çözümleri sunar.",
  phone: "+90-530-770-07-95",
  email: "info@realartmimarlik.com",
  address: {
    streetAddress: "Akyazı, Atatürk Blv. 357/A",
    district: "Altınordu",
    city: "Ordu",
    postalCode: "52000",
    country: "TR",
  },
  sameAs: [
    "https://www.instagram.com/realartmimarlik/",
    "https://www.linkedin.com/in/yi%C4%9Fithan-kuntay-y%C4%B1lmaz-152489236/",
  ],
} as const;

export const defaultKeywords = [
  "Real Art Mimarlık",
  "Ordu mimarlık ofisi",
  "Ordu mimari tasarım",
  "Ordu iç mimari",
  "Ordu inşaat uygulama",
  "Altınordu mimarlık",
  "villa projesi",
  "konut projesi",
  "mimari danışmanlık",
] as const;

export const pageSocialImages = {
  home: "/images/home/tasarim.webp",
  about: "/images/about/hakkimizda-page.webp",
  services: "/images/services/mimari-tasarim.webp",
  projects: "/images/projects/gokdelen-tasarim.jpeg",
  blog: "/images/blog/modern-mimari-trendleri-2026.webp",
  contact: "/images/about/hakkimizda-page.webp",
} as const;
