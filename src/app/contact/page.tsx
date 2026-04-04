import type { Metadata } from "next";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { pageSocialImages, siteConfig } from "@/lib/site-config";

import ContactContent from "./contact-content";

export const metadata: Metadata = buildPageMetadata({
  title: "İletişim",
  description:
    "Real Art Mimarlık Ordu Altınordu ofisine ulaşın. Mimari tasarım, iç mimari, inşaat uygulama ve danışmanlık hizmetleri için ekibimizle iletişime geçin.",
  path: "/contact",
  image: pageSocialImages.contact,
  keywords: [
    "Real Art Mimarlık iletişim",
    "Ordu mimarlık ofisi adres",
    "Altınordu mimarlık iletişim",
    "mimarlık ofisi telefon Ordu",
  ],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mesajıma ne kadar sürede dönüş yapılır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İletişim formundan veya e-posta yoluyla gönderilen taleplere en geç 24 saat içinde dönüş yapıyoruz. Acil durumlarda telefon hattımızdan bize doğrudan ulaşabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Ücretsiz ön görüşme yapıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, projenizi daha iyi anlayabilmemiz için ilk görüşmemiz tamamen ücretsizdir. Ofisimize gelerek ya da online görüşme ile ihtiyaçlarınızı dinliyor, size uygun çözüm önerilerimizi sunuyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Ofise randevusuz gelebilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofisimizi çalışma saatleri içinde ziyaret edebilirsiniz. Ancak detaylı bir görüşme yapabilmemiz için önceden randevu almanızı öneriyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Online görüşme imkânınız var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, Zoom veya Google Meet üzerinden online görüşme yapabiliyoruz. Özellikle şehir dışından bize ulaşmak isteyen müşterilerimiz için bu yöntemi sıklıkla kullanıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi kanallardan size ulaşabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bize telefon, e-posta, iletişim formu ve sosyal medya hesaplarımız üzerinden ulaşabilirsiniz. Ayrıca Altınordu'daki ofisimizi ziyaret ederek yüz yüze görüşme de yapabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Hafta sonu da ulaşabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cumartesi günleri 10:00 - 14:00 saatleri arasında hizmet vermekteyiz. Pazar günleri ofisimiz kapalıdır ancak iletişim formundan mesaj bırakabilirsiniz.",
      },
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: absoluteUrl(pageSocialImages.contact),
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.district,
    addressRegion: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  sameAs: siteConfig.sameAs,
};

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLdScript data={faqJsonLd} />
      <JsonLdScript data={localBusinessJsonLd} />
      <HeaderLayout />
      <ContactContent />
      <SiteFooter />
    </main>
  );
}
