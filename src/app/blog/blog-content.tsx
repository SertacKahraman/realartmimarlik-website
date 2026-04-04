import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/lib/data/blog";

export default function BlogContent() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-32 md:pb-20 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <span
            className="animate-fade-up mb-4 block text-sm font-medium uppercase tracking-widest text-white/70 md:text-base"
            style={{ "--enter-delay": "0ms" } as CSSProperties}
          >
            Güncel İçerikler
          </span>
          <h1
            className="animate-fade-up mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
            style={{ "--enter-delay": "90ms" } as CSSProperties}
          >
            Blog & Haberler
          </h1>
          <p
            className="animate-fade-up max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
            style={{ "--enter-delay": "180ms" } as CSSProperties}
          >
            Mimari dünyasındaki son gelişmeler, tasarım trendleri ve proje
            süreçlerimiz hakkında uzman görüşleri.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 70}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 transition-all duration-300 hover:border-white/20">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                      />
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
                        <span className="text-xs font-medium uppercase tracking-wide text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <div className="mb-4 flex items-center gap-4 text-xs text-white/55">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("tr-TR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="mb-3 line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-white/80 md:text-2xl">
                        {post.title}
                      </h2>

                      <p className="mb-6 flex-1 line-clamp-3 text-sm leading-relaxed text-white/65 md:text-base">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                        <span className="flex items-center gap-2 text-sm font-medium text-white transition-all group-hover:gap-3">
                          Devamını Oku <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
