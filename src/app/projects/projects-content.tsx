"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { projectsList } from "@/lib/data/projects";

export default function ProjectsContent() {
  const categories = [
    "Hepsi",
    ...Array.from(new Set(projectsList.map((project) => project.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  const filteredProjects =
    activeCategory === "Hepsi"
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-32 md:pb-20 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <span
            className="animate-fade-up mb-4 block text-sm font-medium uppercase tracking-widest text-white/70 md:text-base"
            style={{ "--enter-delay": "0ms" } as CSSProperties}
          >
            Gerçek Projelerimiz
          </span>
          <h1
            className="animate-fade-up mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
            style={{ "--enter-delay": "90ms" } as CSSProperties}
          >
            Projelerimiz
          </h1>
          <p
            className="animate-fade-up max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
            style={{ "--enter-delay": "180ms" } as CSSProperties}
          >
            Real Art Mimarlık tarafından geliştirilen gerçek konut, ticari yapı,
            tasarım ve inşaat projelerini inceleyin.
          </p>

          <div
            className="animate-fade-up mt-12 flex flex-wrap gap-2 md:gap-4"
            style={{ "--enter-delay": "260ms" } as CSSProperties}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 md:px-6 md:py-3 md:text-sm ${
                  activeCategory === category
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-transparent text-white/65 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div
            key={activeCategory}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="animate-fade-up group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900"
                style={
                  { "--enter-delay": `${Math.min(index, 8) * 70}ms` } as CSSProperties
                }
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} projesi, ${project.location}`}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 w-full translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-white/80 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-medium text-white/60">
                        {project.year}
                      </span>
                    </div>
                    <h2 className="mb-1 text-xl font-bold text-white md:text-2xl">
                      {project.title}
                    </h2>
                    <p className="flex items-center gap-1 text-sm text-white/65">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin"
                      >
                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
