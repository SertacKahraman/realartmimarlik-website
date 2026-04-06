import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, MapPin, Maximize2 } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import {
  getRelatedPostsForProject,
  getRelatedServicesForProject,
} from "@/lib/content-links";
import type { Project } from "@/lib/types";

import ProjectGalleryLightbox from "./project-gallery-lightbox";

export default function ProjectDetailContent({ project }: { project: Project }) {
  const relatedServices = getRelatedServicesForProject(project.slug, 3);
  const relatedPosts = getRelatedPostsForProject(project.slug, 2);
  const isCompleted = project.status.toLocaleLowerCase("tr-TR").includes("tamam");

  return (
    <>
      <div className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} projesi, ${project.location}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div
          className="animate-fade-up absolute left-6 top-32 z-20"
          style={{ "--enter-delay": "120ms" } as CSSProperties}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-white/70 backdrop-blur-md transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Projelere Dön
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 z-20 w-full p-6 md:p-12 lg:p-20">
          <div className="mx-auto max-w-7xl">
            <div
              className="animate-fade-up"
              style={{ "--enter-delay": "220ms" } as CSSProperties}
            >
              <span className="mb-4 inline-block rounded bg-white/10 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur md:text-base">
                {project.category}
              </span>
              <h1 className="mb-4 text-4xl font-bold leading-tight md:mb-6 md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-white/70 md:gap-8 md:text-base">
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> {project.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {project.year}
                </span>
                <span className="flex items-center gap-2">
                  <Maximize2 size={16} /> {project.area}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-white">Proje Hakkında</h2>
              <p className="mb-6 text-lg leading-relaxed text-white/75">
                {project.description}
              </p>
              <p className="leading-relaxed text-white/65">{project.longDescription}</p>
            </Reveal>

            <Reveal className="space-y-8 border-white/10 md:col-span-1 md:border-l md:pl-8">
              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-white/60">
                  Hizmetler
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-white/60">
                  Durum
                </p>
                <p
                  className={`flex items-center gap-2 ${
                    isCompleted
                      ? "text-green-400"
                      : "text-amber-400"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isCompleted
                        ? "bg-green-400"
                        : "animate-pulse bg-amber-400"
                    }`}
                  />
                  {project.status}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-widest text-white/60">
                  Alan
                </p>
                <p className="text-lg font-semibold text-white">{project.area}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950/50 px-6 py-20 pb-20 md:py-20 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <h2 className="mb-8 text-2xl font-bold text-white">Proje Özellikleri</h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <Reveal key={feature} delay={index * 60}>
                    <div className="group flex items-center gap-4 border-b border-white/5 py-3 transition-colors hover:border-white/20">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                        <span className="text-xs font-bold text-white/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-base text-white/75 transition-colors group-hover:text-white">
                        {feature}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="mb-8 text-2xl font-bold text-white">
                Kullanılan Malzemeler
              </h2>
              <div className="space-y-4">
                {project.materials.map((material, index) => (
                  <Reveal key={material} delay={index * 60}>
                    <div className="group flex items-center gap-4 border-b border-white/5 py-3 transition-colors hover:border-white/20">
                      <div className="h-2 w-2 flex-shrink-0 rounded-full bg-white/30 transition-colors group-hover:bg-white/60" />
                      <span className="text-base text-white/75 transition-colors group-hover:text-white">
                        {material}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProjectGalleryLightbox images={project.gallery} title={project.title} />

      <section className="px-6 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl space-y-20">
          {relatedServices.length > 0 && (
            <div>
              <Reveal className="mb-10">
                <h2 className="text-2xl font-bold md:text-3xl">İlgili Hizmetler</h2>
              </Reveal>
              <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
                {relatedServices.map((service, index) => (
                  <Reveal key={service.slug} delay={index * 80} className="h-full">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <div className="flex-1">
                        <h3 className="mb-3 text-lg font-semibold text-white/90">
                          {service.title}
                        </h3>
                        <p className="line-clamp-4 text-sm leading-relaxed text-white/55">
                          {service.description}
                        </p>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-all group-hover:gap-3 group-hover:text-white">
                        Hizmeti İncele <ArrowRight size={14} />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div>
              <Reveal className="mb-10 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Bu Projeyle İlgili Yazılar
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  Bloga Git <ArrowRight size={14} />
                </Link>
              </Reveal>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {relatedPosts.map((post, index) => (
                  <Reveal key={post.slug} delay={index * 80}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover brightness-[0.72] transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/45">
                          {post.category}
                        </div>
                        <h3 className="mb-3 text-lg font-semibold text-white/90">
                          {post.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/55">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-32">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Benzer Bir Proje mi Düşünüyorsunuz?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/60">
              {project.category} alanında uzman ekibimizle projenizi birlikte hayata
              geçirelim.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-105"
            >
              Ücretsiz Görüşme Talep Edin
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
