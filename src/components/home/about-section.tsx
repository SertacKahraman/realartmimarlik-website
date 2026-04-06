import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-40 border-t border-white/10 bg-black px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="group relative order-2 lg:order-1" direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-neutral-900">
              <Image
                src="/images/home/hakkimizda.webp"
                alt="Real Art Mimarlık Ordu ofisi"
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
            </div>

            <Reveal
              delay={140}
              direction="scale"
              className="relative z-20 mx-auto mt-[-3rem] flex h-40 w-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/90 p-4 text-center shadow-2xl backdrop-blur-sm md:absolute md:-bottom-6 md:-right-6 md:mt-0 md:h-48 md:w-48 md:p-6"
            >
              <span className="mb-1 text-4xl font-bold text-white md:text-5xl">
                10+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 md:text-xs">
                Tamamlanan Proje
              </span>
            </Reveal>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/50 md:mb-4 md:text-sm">
                Real Art Mimarlık Hakkında
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:mb-8 md:text-5xl">
                Ordu Merkezli Mimarlık Ofisi
                <br />
                <span className="text-zinc-500">ve İnşaat Çözüm Ortağı.</span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mb-6 text-base leading-relaxed text-white/60 md:text-lg">
                Real Art Mimarlık, Yiğithan Kuntay Yılmaz tarafından kurulmuş;
                Ordu&apos;da mimari tasarım, proje geliştirme, inşaat uygulama, iç
                mimari ve danışmanlık alanlarında hizmet veren bir mimarlık
                şirketidir.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-base leading-relaxed text-white/60 md:text-lg">
                Konut, villa ve ticari yapı projelerinde ilk fikirden anahtar
                teslim uygulamaya kadar tüm süreçleri profesyonelce yönetiyor,
                Ordu&apos;da nitelikli yaşam alanları ve işlevsel yapılar
                üretiyoruz.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8">
              <Reveal className="flex flex-col items-center justify-center p-2 lg:p-4">
                <h3 className="mb-1 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                  %100
                </h3>
                <p className="text-center text-[9px] font-medium uppercase tracking-widest text-white/60 md:text-[10px] lg:text-xs">
                  Müşteri
                  <br className="md:hidden" /> Memnuniyeti
                </p>
              </Reveal>
              <Reveal delay={80} className="flex flex-col items-center justify-center p-2 lg:p-4">
                <h3 className="mb-1 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                  %100
                </h3>
                <p className="text-center text-[9px] font-medium uppercase tracking-widest text-white/60 md:text-[10px] lg:text-xs">
                  Zamanında
                  <br className="md:hidden" /> Teslim
                </p>
              </Reveal>
              <Reveal delay={160} className="flex flex-col items-center justify-center p-2 lg:p-4">
                <h3 className="mb-1 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                  A+
                </h3>
                <p className="text-center text-[9px] font-medium uppercase tracking-widest text-white/60 md:text-[10px] lg:text-xs">
                  Kalite
                  <br className="md:hidden" /> Standartları
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
