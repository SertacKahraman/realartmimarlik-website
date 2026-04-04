import { blogPosts } from "@/lib/data/blog";
import { projects, projectsList } from "@/lib/data/projects";
import { services, servicesList } from "@/lib/data/services";

const serviceRelations: Record<
  string,
  {
    projects: string[];
    posts: string[];
  }
> = {
  "mimari-tasarim": {
    projects: ["akyazi-villa", "gokdelen-tasarim", "sinanoglu-projesi"],
    posts: [
      "2026-modern-mimari-trendleri-ordu",
      "insaat-ruhsati-nasil-alinir-adim-adim",
      "mimar-tutmak-gerekli-mi-ne-zaman-basvurmali",
    ],
  },
  "ic-mimari": {
    projects: ["akyazi-villa", "ozyil-hirdavat"],
    posts: [
      "2026-modern-mimari-trendleri-ordu",
      "komple-ev-tadilati-is-siralamasi-rehberi",
      "2026-insaat-ve-tadilat-maliyetleri",
    ],
  },
  "insaat-uygulama": {
    projects: ["akyazi-villa", "sinanoglu-projesi", "ozyil-hirdavat"],
    posts: [
      "villa-yapim-maliyeti-2026-rehberi",
      "2026-insaat-ve-tadilat-maliyetleri",
      "komple-ev-tadilati-is-siralamasi-rehberi",
    ],
  },
  "kentsel-donusum": {
    projects: ["sinanoglu-projesi"],
    posts: [
      "kentsel-donusum-yasasi-2026-degisiklikleri",
      "kat-irtifaki-kat-mulkiyeti-farki-nedir",
    ],
  },
  danismanlik: {
    projects: ["akyazi-villa", "sinanoglu-projesi", "gokdelen-tasarim"],
    posts: [
      "mimar-tutmak-gerekli-mi-ne-zaman-basvurmali",
      "insaat-ruhsati-nasil-alinir-adim-adim",
      "kat-irtifaki-kat-mulkiyeti-farki-nedir",
    ],
  },
  "peyzaj-tasarimi": {
    projects: ["akyazi-villa"],
    posts: [
      "2026-modern-mimari-trendleri-ordu",
      "villa-yapim-maliyeti-2026-rehberi",
    ],
  },
};

const projectRelations: Record<
  string,
  {
    services: string[];
    posts: string[];
  }
> = {
  "akyazi-villa": {
    services: ["mimari-tasarim", "insaat-uygulama", "peyzaj-tasarimi"],
    posts: [
      "villa-yapim-maliyeti-2026-rehberi",
      "2026-modern-mimari-trendleri-ordu",
      "2026-insaat-ve-tadilat-maliyetleri",
    ],
  },
  "gokdelen-tasarim": {
    services: ["mimari-tasarim", "danismanlik"],
    posts: [
      "2026-modern-mimari-trendleri-ordu",
      "mimar-tutmak-gerekli-mi-ne-zaman-basvurmali",
    ],
  },
  "ozyil-hirdavat": {
    services: ["ic-mimari", "mimari-tasarim", "insaat-uygulama"],
    posts: [
      "2026-insaat-ve-tadilat-maliyetleri",
      "komple-ev-tadilati-is-siralamasi-rehberi",
    ],
  },
  "sinanoglu-projesi": {
    services: ["mimari-tasarim", "insaat-uygulama", "kentsel-donusum"],
    posts: [
      "kentsel-donusum-yasasi-2026-degisiklikleri",
      "insaat-ruhsati-nasil-alinir-adim-adim",
    ],
  },
};

const blogRelations: Record<
  string,
  {
    services: string[];
    projects: string[];
  }
> = {
  "2026-modern-mimari-trendleri-ordu": {
    services: ["mimari-tasarim", "ic-mimari", "peyzaj-tasarimi"],
    projects: ["akyazi-villa", "gokdelen-tasarim"],
  },
  "kentsel-donusum-yasasi-2026-degisiklikleri": {
    services: ["kentsel-donusum", "danismanlik"],
    projects: ["sinanoglu-projesi"],
  },
  "2026-insaat-ve-tadilat-maliyetleri": {
    services: ["insaat-uygulama", "danismanlik", "ic-mimari"],
    projects: ["akyazi-villa", "ozyil-hirdavat"],
  },
  "villa-yapim-maliyeti-2026-rehberi": {
    services: ["mimari-tasarim", "insaat-uygulama", "peyzaj-tasarimi"],
    projects: ["akyazi-villa"],
  },
  "insaat-ruhsati-nasil-alinir-adim-adim": {
    services: ["mimari-tasarim", "danismanlik", "insaat-uygulama"],
    projects: ["sinanoglu-projesi", "akyazi-villa"],
  },
  "komple-ev-tadilati-is-siralamasi-rehberi": {
    services: ["ic-mimari", "insaat-uygulama", "danismanlik"],
    projects: ["ozyil-hirdavat", "akyazi-villa"],
  },
  "mimar-tutmak-gerekli-mi-ne-zaman-basvurmali": {
    services: ["mimari-tasarim", "ic-mimari", "danismanlik"],
    projects: ["akyazi-villa", "gokdelen-tasarim"],
  },
  "kat-irtifaki-kat-mulkiyeti-farki-nedir": {
    services: ["kentsel-donusum", "danismanlik"],
    projects: ["sinanoglu-projesi"],
  },
};

export function getRelatedProjectsForService(slug: string, limit = 3) {
  const slugs =
    serviceRelations[slug]?.projects ??
    projectsList.slice(0, limit).map((project) => project.slug);

  return slugs
    .flatMap((projectSlug) => {
      const project = projects[projectSlug];
      return project ? [project] : [];
    })
    .slice(0, limit);
}

export function getRelatedPostsForService(slug: string, limit = 3) {
  const slugs =
    serviceRelations[slug]?.posts ??
    blogPosts.slice(0, limit).map((post) => post.slug);

  return slugs
    .flatMap((postSlug) => {
      const post = blogPosts.find((item) => item.slug === postSlug);
      return post ? [post] : [];
    })
    .slice(0, limit);
}

export function getRelatedServicesForProject(slug: string, limit = 3) {
  const slugs =
    projectRelations[slug]?.services ??
    servicesList.slice(0, limit).map((service) => service.slug);

  return slugs
    .flatMap((serviceSlug) => {
      const service = services[serviceSlug];
      return service ? [service] : [];
    })
    .slice(0, limit);
}

export function getRelatedPostsForProject(slug: string, limit = 3) {
  const slugs =
    projectRelations[slug]?.posts ??
    blogPosts.slice(0, limit).map((post) => post.slug);

  return slugs
    .flatMap((postSlug) => {
      const post = blogPosts.find((item) => item.slug === postSlug);
      return post ? [post] : [];
    })
    .slice(0, limit);
}

export function getRelatedServicesForBlogPost(slug: string, limit = 3) {
  const slugs =
    blogRelations[slug]?.services ??
    servicesList.slice(0, limit).map((service) => service.slug);

  return slugs
    .flatMap((serviceSlug) => {
      const service = services[serviceSlug];
      return service ? [service] : [];
    })
    .slice(0, limit);
}

export function getRelatedProjectsForBlogPost(slug: string, limit = 3) {
  const slugs =
    blogRelations[slug]?.projects ??
    projectsList.slice(0, limit).map((project) => project.slug);

  return slugs
    .flatMap((projectSlug) => {
      const project = projects[projectSlug];
      return project ? [project] : [];
    })
    .slice(0, limit);
}
