import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  getRelatedProjectsForBlogPost,
  getRelatedServicesForBlogPost,
} from "@/lib/content-links";
import { blogPosts } from "@/lib/data/blog";
import { absoluteUrl, composeTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  const fullTitle = composeTitle(post.title);

  return {
    title: post.title,
    description: post.excerpt,
    keywords: Array.from(
      new Set([...post.tags, "Ordu mimarlık blogu", "Real Art Mimarlık blog"])
    ),
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      type: "article",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post.image),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: post.excerpt,
      images: [absoluteUrl(post.image)],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 2);
  const relatedServices = getRelatedServicesForBlogPost(post.slug, 3);
  const relatedProjects = getRelatedProjectsForBlogPost(post.slug, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [absoluteUrl(post.image)],
    datePublished: post.date,
    dateModified: post.date,
    author: [{ "@type": "Person", name: post.author }],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/reallogo180.png") },
    },
    description: post.excerpt,
    articleBody: post.content.replace(/<[^>]*>?/gm, ""),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  const formattedDate = new Date(post.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <JsonLdScript data={jsonLd} />
      <JsonLdScript data={breadcrumbLd} />
      <HeaderLayout />

      <section className="relative h-[40vh] w-full overflow-hidden md:h-[45vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute left-0 top-28 z-50 px-6 md:top-36 md:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/50 backdrop-blur-md transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            Blog
          </Link>
        </div>
      </section>

      <article className="relative z-10 -mt-20 md:-mt-40">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-wider text-white/60">
              <span className="rounded-full border border-white/40 px-3 py-1 text-white/60">
                {post.category}
              </span>
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{post.readTime} okuma</span>
            </div>

            <h1 className="mb-8 text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              {post.title}
            </h1>

            <p className="text-lg leading-relaxed text-white/60 md:text-xl">
              {post.excerpt}
            </p>
          </div>

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-base font-semibold text-white/60">
              {post.author
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <div>
              <div className="text-base font-medium text-white/90">{post.author}</div>
              <div className="text-sm text-white/60">Real Art Mimarlık</div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {(relatedServices.length > 0 || relatedProjects.length > 0) && (
            <section className="mt-16 border-t border-white/10 pt-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {relatedServices.length > 0 && (
                  <div>
                    <h2 className="mb-5 text-xl font-bold tracking-tight">
                      İlgili Hizmetler
                    </h2>
                    <div className="space-y-4">
                      {relatedServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                        >
                          <div>
                            <div className="text-sm font-semibold text-white/90">
                              {service.title}
                            </div>
                            <div className="mt-1 line-clamp-2 text-sm text-white/55">
                              {service.description}
                            </div>
                          </div>
                          <ArrowRight
                            size={16}
                            className="ml-4 flex-shrink-0 text-white/45 transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {relatedProjects.length > 0 && (
                  <div>
                    <h2 className="mb-5 text-xl font-bold tracking-tight">
                      İlgili Projeler
                    </h2>
                    <div className="space-y-4">
                      {relatedProjects.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                        >
                          <div className="relative aspect-[16/9]">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover brightness-[0.72] transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-5">
                            <div className="text-sm font-semibold text-white/90">
                              {project.title}
                            </div>
                            <div className="mt-1 line-clamp-2 text-sm text-white/55">
                              {project.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-20 border-t border-white/5">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                Diğer Yazılar
              </h2>
              <Link
                href="/blog"
                className="flex items-center gap-1 text-sm text-white/60 transition-all hover:gap-2 hover:text-white/70"
              >
                Tümü <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-white/15"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover brightness-[0.6] transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 text-[11px] uppercase tracking-wider text-white/50">
                      {related.category} · {related.readTime}
                    </div>
                    <h3 className="line-clamp-2 text-base font-bold tracking-tight text-white/80 transition-colors group-hover:text-white md:text-lg">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
