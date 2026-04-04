// ━━━ Shared Types ━━━

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    category: string;
    location: string;
    year: number;
    area: string;
    status: string;
    image: string;
    gallery: string[];
    slug: string;
    services: string[];
    materials: string[];
    features: string[];
}

export interface ContactInfo {
    title: string;
    lines: string[];
    href: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface Service {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    features: { title: string; description: string }[];
    process: { step: string; title: string; description: string }[];

    stats: { value: string; label: string }[];
    benefits: { title: string; description: string }[];
}

export interface ServiceCard {
    title: string;
    description: string;
    image: string;
    slug: string;
}

export interface StatItem {
    value: string;
    label: string;
}
