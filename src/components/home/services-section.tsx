import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    title: "Mimari Tasarım",
    desc: "Modern, işlevsel ve estetik",
    image: "/images/home/tasarim.webp",
  },
  {
    title: "Projelendirme",
    desc: "Detaylı, planlı ve teknik",
    image: "/images/home/planlama.webp",
  },
  {
    title: "İnşaat Uygulama",
    desc: "Kaliteli, güvenli ve kontrollü",
    image: "/images/home/insaat.webp",
  },
  {
    title: "Anahtar Teslim",
    desc: "Planlı ve zamanında",
    image: "/images/home/teslim.webp",
  },
];

const listItems = [
  "Ordu'da Mimari Tasarım ve Projelendirme",
  "İç Mimari ve Mekan Tasarımı",
  "İnşaat Uygulama ve Anahtar Teslim Çözümler",
  "Proje Yönetimi ve Teknik Danışmanlık",
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-40 bg-zinc-950 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/50 md:mb-4 md:text-sm">
                Mimarlık ve İnşaat Hizmetleri
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:mb-8 md:text-5xl">
                Ordu&apos;da Mimari Tasarım,
                <br />
                <span className="text-zinc-500">Proje ve İnşaat Çözümleri.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mb-8 text-base leading-relaxed text-white/60 md:text-lg">
                Real Art Mimarlık; Ordu&apos;daki ofisinde mimari tasarım, iç
                mimari, proje geliştirme, inşaat uygulama ve danışmanlık
                süreçlerinde bütüncül çözümler sunar. İlk fikirden anahtar
                teslim uygulamaya kadar her aşamada profesyonel destek sağlarız.
              </p>
            </Reveal>
            <ul className="space-y-3 md:space-y-4">
              {listItems.map((item, index) => (
                <li
                  key={item}
                  className="text-sm text-white/80 md:text-base"
                >
                  <Reveal delay={220 + index * 70}>
                    <div className="flex items-center gap-4">
                    <span className="h-[1px] w-6 bg-white/30 md:w-8" />
                    {item}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:mt-0">
            <div className="translate-y-6 space-y-3 md:translate-y-8 md:space-y-4">
              {services.slice(0, 2).map((service, index) => (
                <Reveal key={service.title} delay={index * 90} direction="left">
                  <article className="group relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-zinc-900 md:rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      quality={70}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center md:p-6">
                      <h3 className="mb-1 text-lg font-bold text-white md:mb-2 md:text-xl">
                        {service.title}
                      </h3>
                      <p className="text-[10px] text-white/70 md:text-xs">
                        {service.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="space-y-3 md:space-y-4">
              {services.slice(2, 4).map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={120 + index * 90}
                  direction="right"
                >
                  <article className="group relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-zinc-900 md:rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      quality={70}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center md:p-6">
                      <h3 className="mb-1 text-lg font-bold text-white md:mb-2 md:text-xl">
                        {service.title}
                      </h3>
                      <p className="text-[10px] text-white/70 md:text-xs">
                        {service.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
