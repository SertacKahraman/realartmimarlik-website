import type { Metadata } from "next";

import { AboutSection } from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeaderLayout } from "@/components/layout/navbar";
import { buildPageMetadata } from "@/lib/seo";
import { pageSocialImages } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Ordu'da Mimari Tasarım ve İnşaat Çözümleri",
  description:
    "Real Art Mimarlık, Ordu'daki ofisinde mimari tasarım, proje geliştirme, iç mimari, inşaat uygulama ve danışmanlık çözümleri sunar.",
  path: "/",
  image: pageSocialImages.home,
  keywords: [
    "Ordu mimari tasarım",
    "Ordu inşaat çözümleri",
    "Altınordu mimarlık ofisi",
    "villa mimari proje",
  ],
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <HeaderLayout />
      <HeroSection />
      <div id="main-content" className="relative z-10 bg-black">
        <ProjectsSection />
        <ServicesSection />
        <AboutSection />
        <SiteFooter />
      </div>
    </main>
  );
}
