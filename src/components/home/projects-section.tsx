import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { projectsList } from "@/lib/data/projects";

export function ProjectsSection() {
  const featuredProjects = projectsList.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative z-40 border-t border-white/10 bg-black px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:mb-20">
          <Reveal>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/50 md:mb-4 md:text-sm">
              Gerçek Projeler
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:mb-8 md:text-6xl">
              Uyguladığımız ve
              <br className="hidden md:block" /> Geliştirdiğimiz Projeler
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              Real Art Mimarlık&apos;ın gerçek proje arşivinden seçilen konut,
              ticari yapı, tasarım ve inşaat uygulamalarını keşfedin.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <article className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 transition-colors duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={`${project.title} proje detayını aç`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    fill
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />

                  <div className="absolute bottom-0 left-0 w-full translate-y-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 transition-transform duration-500 group-hover:translate-y-0 md:translate-y-4 md:p-8">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-white/80 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-medium text-white/60">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70 md:mt-2 md:text-sm">
                      {project.location}
                    </p>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center md:mt-16">
          <Reveal delay={120}>
            <Link
              href="/projects"
              prefetch={false}
              className="inline-block rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black md:px-8 md:py-4 md:text-base"
            >
              Tüm Projeleri İncele
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
