import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import {
  getRelatedPostsForService,
  getRelatedProjectsForService,
} from "@/lib/content-links";
import { servicesList } from "@/lib/data/services";
import type { Service } from "@/lib/types";

interface ServiceDetailProps {
  slug: string;
  service: Service;
}

export default function ServiceDetailContent({
  slug,
  service,
}: ServiceDetailProps) {
  const relatedServices = servicesList
    .filter((item) => item.slug !== slug)
    .slice(0, 3);
  const relatedProjects = getRelatedProjectsForService(slug, 3);
  const relatedPosts = getRelatedPostsForService(slug, 3);

  return (
    <>
      <section className="relative h-[70vh] overflow-hidden md:h-[85vh]">
        <Image
          src={service.heroImage}
          alt={`${service.title} hizmeti - Real Art Mimarlık Ordu`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div
          className="animate-fade-up absolute left-6 top-32 z-10 md:left-12 md:top-40"
          style={{ "--enter-delay": "100ms" } as CSSProperties}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Tüm Hizmetler
          </Link>
        </div>

        <div className="absolute inset-0 flex items-center p-6 md:p-12 lg:p-20">
          <div className="mx-auto w-full max-w-7xl pt-20">
            <p
              className="animate-fade-up mb-4 text-sm uppercase tracking-widest text-white/60 md:text-base"
              style={{ "--enter-delay": "180ms" } as CSSProperties}
            >
              Hizmetlerimiz
            </p>
            <h1
              className="animate-fade-up mb-4 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl"
              style={{ "--enter-delay": "260ms" } as CSSProperties}
            >
              {service.title}
            </h1>
            <p
              className="animate-fade-up max-w-2xl text-lg font-light text-white/75 md:text-2xl"
              style={{ "--enter-delay": "340ms" } as CSSProperties}
            >
              {service.tagline}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {service.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-up border-r border-white/10 px-4 py-6 text-center last:border-r-0 md:py-10"
                style={
                  { "--enter-delay": `${420 + index * 70}ms` } as CSSProperties
                }
              >
                <div className="mb-1 text-xl font-bold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 md:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <span className="mb-6 block text-sm uppercase tracking-widest text-white/60">
              Hakkında
            </span>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              {service.title} <br />
              <span className="text-white/60">Hizmeti</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <p className="mb-8 text-lg leading-relaxed text-white/75 md:text-xl">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-105"
            >
              Ücretsiz Görüşme
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16">
            <span className="mb-6 block text-sm uppercase tracking-widest text-white/60">
              Kapsamımız
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Neler Yapıyoruz?</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2">
            {service.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 60}>
                <div className="group flex items-start gap-4 border-b border-white/5 py-4 transition-colors hover:border-white/20">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-white/25 transition-colors group-hover:text-white/60" />
                  <div>
                    <span className="mb-1 block text-lg font-semibold text-white/90 transition-colors group-hover:text-white">
                      {feature.title}
                    </span>
                    <span className="text-sm text-white/55 transition-colors group-hover:text-white/75">
                      {feature.description}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 md:mb-20">
            <span className="mb-6 block text-sm uppercase tracking-widest text-white/60">
              Süreç
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Nasıl Çalışıyoruz?</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((item, index) => (
              <Reveal key={item.step} delay={index * 90}>
                <div className="group bg-black p-8 transition-colors duration-500 hover:bg-zinc-900 md:p-10">
                  <span className="mb-6 block text-5xl font-bold text-white/20 transition-colors group-hover:text-white/30 md:text-6xl">
                    {item.step}
                  </span>
                  <h3 className="mb-3 text-xl font-bold md:text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55 md:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16">
            <span className="mb-6 block text-sm uppercase tracking-widest text-white/60">
              Avantajlar
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 80} direction="scale">
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all duration-500 hover:border-white/20">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] transition-transform duration-700 group-hover:scale-150" />
                  <span className="absolute bottom-4 right-6 text-6xl font-black text-white/10">
                    0{index + 1}
                  </span>
                  <h3 className="relative z-10 mb-4 text-xl font-bold">
                    {benefit.title}
                  </h3>
                  <p className="relative z-10 text-base leading-relaxed text-white/55">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl space-y-20">
          {relatedProjects.length > 0 && (
            <div>
              <Reveal className="mb-12">
                <span className="mb-4 block text-sm uppercase tracking-widest text-white/60">
                  İlgili Projeler
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Bu Hizmete Yakın Projeler
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedProjects.map((project, index) => (
                  <Reveal key={project.slug} delay={index * 80}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover brightness-[0.75] transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-lg font-semibold text-white/90">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/55">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div>
              <Reveal className="mb-12">
                <span className="mb-4 block text-sm uppercase tracking-widest text-white/60">
                  Blog Rehberleri
                </span>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Hizmetle İlgili İçerikler
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedPosts.map((post, index) => (
                  <Reveal key={post.slug} delay={index * 80}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/45">
                        {post.category}
                      </div>
                      <h3 className="mb-3 text-lg font-semibold text-white/90 transition-colors group-hover:text-white">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/55">
                        {post.excerpt}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-20 md:px-12 lg:px-20">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <h3 className="text-lg font-medium text-white/70">Diğer Hizmetlerimiz</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/75 transition-all duration-300 hover:bg-white hover:text-black"
              >
                {related.title}
              </Link>
            ))}
            <Link
              href="/services"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/75 transition-all duration-300 hover:bg-white hover:text-black"
            >
              Tüm Hizmetler
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 text-center backdrop-blur-sm md:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Projenizi Birlikte <br /> Hayata Geçirelim
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/60 md:text-xl">
              {service.title} hizmeti hakkında detaylı bilgi almak ve ücretsiz ön
              görüşme için hemen iletişime geçin.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
            >
              Ücretsiz Teklif Alın
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
