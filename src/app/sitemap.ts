import { MetadataRoute } from "next";

import { blogPosts } from "@/lib/data/blog";
import { projectsList } from "@/lib/data/projects";
import { servicesList } from "@/lib/data/services";
import { siteConfig } from "@/lib/site-config";

const baseUrl = siteConfig.url;
const siteLastModified = new Date("2026-04-04T00:00:00+03:00");
const blogLastModified =
  blogPosts.length > 0
    ? new Date(
        Math.max(...blogPosts.map((post) => new Date(post.date).getTime()))
      )
    : siteLastModified;

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: siteLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesList.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectsList.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...homepage,
    ...mainPages,
    ...serviceRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
