import type { Metadata } from "next";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { buildPageMetadata } from "@/lib/seo";
import { pageSocialImages } from "@/lib/site-config";

import AboutContent from "./about-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Hakkımızda",
  description:
    "Real Art Mimarlık, Ordu Altınordu merkezli bir mimarlık ofisi olarak konut, villa ve ticari yapılar için tasarım, uygulama ve danışmanlık hizmetleri sunar.",
  path: "/about",
  image: pageSocialImages.about,
  keywords: [
    "Real Art Mimarlık hakkında",
    "Ordu mimarlık ofisi",
    "Altınordu mimarlık firması",
    "mimarlık şirketi Ordu",
  ],
});

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <HeaderLayout />
      <AboutContent />
      <SiteFooter />
    </main>
  );
}
