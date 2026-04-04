import type { CSSProperties, ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HardHat,
  Home,
  Palette,
  PenTool,
  Ruler,
  TreePine,
} from "lucide-react";

import { servicesList } from "@/lib/data/services";

const serviceIcons: Record<string, ReactNode> = {
  "mimari-tasarim": <PenTool className="h-8 w-8 md:h-10 md:w-10" />,
  "ic-mimari": <Palette className="h-8 w-8 md:h-10 md:w-10" />,
  "kentsel-donusum": <Home className="h-8 w-8 md:h-10 md:w-10" />,
  "peyzaj-tasarimi": <TreePine className="h-8 w-8 md:h-10 md:w-10" />,
  "insaat-uygulama": <HardHat className="h-8 w-8 md:h-10 md:w-10" />,
  danismanlik: <Ruler className="h-8 w-8 md:h-10 md:w-10" />,
};

export default function ServicesContent() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-32 md:pb-20 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <span
            className="animate-fade-up mb-4 block text-sm font-medium uppercase tracking-widest text-white/70 md:text-base"
            style={{ "--enter-delay": "0ms" } as CSSProperties}
          >
            Uzman Hizmetlerimiz
          </span>
          <h1
            className="animate-fade-up mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
            style={{ "--enter-delay": "90ms" } as CSSProperties}
          >
            Hizmetler
          </h1>
          <p
            className="animate-fade-up max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
            style={{ "--enter-delay": "180ms" } as CSSProperties}
          >
            Real Art Mimarlık tarafından sunulan mimari tasarım, iç mimari,
            inşaat uygulama, kentsel dönüşüm, peyzaj ve danışmanlık çözümlerini
            keşfedin.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-12">
            {servicesList.map((service, index) => (
              <article
                key={service.slug}
                className="animate-fade-up"
                style={
                  { "--enter-delay": `${Math.min(index, 8) * 70}ms` } as CSSProperties
                }
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 transition-colors duration-500 group-hover:border-white/20">
                    <div className="relative aspect-[4/3] overflow-hidden bg-black md:aspect-[16/9]">
                      <Image
                        src={service.heroImage}
                        alt={`${service.title} hizmeti - Real Art Mimarlık Ordu`}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      <div className="absolute bottom-6 left-6 z-10 md:bottom-10 md:left-10">
                        <div className="mb-4 w-fit rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md transition-colors duration-300 group-hover:bg-white md:p-4">
                          <div className="text-white transition-colors duration-300 group-hover:text-black">
                            {serviceIcons[service.slug]}
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-white md:text-4xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
                      <p className="mb-8 text-base leading-relaxed text-white/70 md:text-lg">
                        {service.description}
                      </p>

                      <div className="mt-auto inline-flex items-center gap-2 font-medium text-white transition-all group-hover:gap-3">
                        Detaylı Bilgi Al <ArrowUpRight size={18} />
                      </div>
                    </div>
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
