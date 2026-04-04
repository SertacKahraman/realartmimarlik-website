import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle,
  Diamond,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const values = [
  {
    icon: <ShieldCheck className="h-10 w-10 transition-colors group-hover:text-black" />,
    title: "Güven ve Şeffaflık",
    desc: "Söz verdiğimiz tarihte, söz verdiğimiz kalitede teslim ediyoruz. Tüm süreçlerimizde müşterilerimize karşı şeffaf ve dürüstüz.",
  },
  {
    icon: <Diamond className="h-10 w-10 transition-colors group-hover:text-black" />,
    title: "Kalite ve Estetik",
    desc: "Birinci sınıf malzeme ve işçiliği, zamansız tasarımlarla buluşturuyoruz. Lüksü sadece görünümde değil, kullanımda da hissettiriyoruz.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 transition-colors group-hover:text-black" />,
    title: "İnovasyon",
    desc: "BIM teknolojileri, akıllı ev sistemleri ve modern yapım tekniklerini yakından takip ediyor, projelerimize entegre ediyoruz.",
  },
  {
    icon: <Users className="h-10 w-10 transition-colors group-hover:text-black" />,
    title: "Müşteri Odaklılık",
    desc: "Sadece satış sürecinde değil, satış sonrasında da teknik destek ve yönetim hizmetlerimizle müşterilerimizin yanındayız.",
  },
  {
    icon: <Building2 className="h-10 w-10 transition-colors group-hover:text-black" />,
    title: "Sürdürülebilirlik",
    desc: "Enerji verimliliği yüksek, çevre dostu malzemeler kullanan, doğa ile uyumlu yapılar inşa ederek geleceğe katkı sağlıyoruz.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 transition-colors group-hover:text-black" />,
    title: "İş Güvenliği",
    desc: "Şantiyelerimizde 'Önce İnsan' prensibiyle hareket ediyor, en üst düzeyde iş sağlığı ve güvenliği önlemleri alıyoruz.",
  },
];

export default function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-32 md:pb-20 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <span
            className="animate-fade-up mb-4 block text-sm font-medium uppercase tracking-widest text-white/70 md:text-base"
            style={{ "--enter-delay": "0ms" } as CSSProperties}
          >
            Biz Kimiz?
          </span>
          <h1
            className="animate-fade-up mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
            style={{ "--enter-delay": "90ms" } as CSSProperties}
          >
            Real Art Mimarlık <br />{" "}
            <span className="text-white/60">Sanat ve Mühendislik</span>
          </h1>
          <p
            className="animate-fade-up max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
            style={{ "--enter-delay": "180ms" } as CSSProperties}
          >
            Ordu&apos;nun kalbinde, modern, estetik ve işlevsel yaşam alanları tasarlayan
            yenilikçi bir mimarlık ofisiyiz.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950/50 px-6 py-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
              <Image
                src="/images/about/hakkimizda-page.webp"
                alt="Real Art Mimarlık ekibi ve proje yönetimi"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 max-w-sm rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md md:bottom-10 md:left-10 md:p-6">
                <p className="text-lg font-medium italic text-white">
                  &quot;Mükemmellik bir eylem değil, bir alışkanlıktır.&quot;
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ordu&apos;da Yenilikçi <br /> Tasarımın Adresi
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-white/75">
                <p>
                  <strong>Real Art Mimarlık</strong>, 2022 yılında Ordu&apos;nun
                  Altınordu ilçesinde kurulmuş, mimarlık ve tasarım alanında hizmet
                  veren yenilikçi bir mimarlık ofisidir. Kurulduğu günden bu yana
                  konut, villa, ofis ve ticari mekan projeleri başta olmak üzere birçok
                  alanda modern, estetik ve işlevsel çözümler üretmektedir.
                </p>
                <p>
                  <strong>Misyonumuz;</strong> Ordu ve çevresinde mimari projeler, iç
                  mimari tasarım ve uygulama süreçlerinde müşterilerimizin ihtiyaçlarını
                  doğru analiz ederek, estetik, fonksiyonellik ve sürdürülebilirliği bir
                  arada sunan özgün mekanlar tasarlamaktır. Her projede kaliteyi,
                  mühendislik disiplinini ve çağdaş mimari anlayışı ön planda tutuyoruz.
                </p>
                <p>
                  <strong>Vizyonumuz</strong> ise Altınordu ve Ordu genelinde mimarlık
                  denince akla gelen, güvenilir ve yenilikçi bir marka olmak; insan
                  odaklı tasarım anlayışımızla yaşam kalitesini artıran, değer katan ve
                  uzun ömürlü mekanlar üretmektir.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="mb-1 text-3xl font-bold text-white">2022</div>
                  <div className="text-sm uppercase tracking-wider text-white/60">
                    Kuruluş Yılı
                  </div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="mb-1 text-3xl font-bold text-white">%100</div>
                  <div className="text-sm uppercase tracking-wider text-white/60">
                    Yenilikçi Tasarım
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-white/70 md:text-base">
              Değerlerimiz
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              İşimizi Tanımlayan Prensipler
            </h2>
            <p className="text-lg text-white/70">
              Bizi diğerlerinden ayıran, sadece kullandığımız malzeme değil, iş yapış
              felsefemizdir.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="group relative rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-colors duration-500 hover:border-white/30 hover:bg-zinc-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-6 w-fit rounded-2xl border border-white/5 bg-white/5 p-4 shadow-[0_0_20px_rgba(255,255,255,0)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      <div className="text-white transition-colors duration-500 group-hover:text-black">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-base leading-relaxed text-white/60 transition-colors group-hover:text-white/75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="border-y border-white/5 bg-zinc-900 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Birlikte Başarıyoruz</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
            Mimarlarımızdan mühendislerimize, satış danışmanlarımızdan saha
            ekiplerimize kadar geniş ve uzman ailemizle hayallerinizi inşa ediyoruz.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border border-white/20 px-8 py-3 font-medium transition-all duration-300 hover:bg-white hover:text-black"
          >
            Ekibimizle Tanışın
          </Link>
        </div>
      </Reveal>

      <section className="px-6 py-20 md:py-32">
        <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 p-8 text-center md:p-20">
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-5xl lg:text-6xl">
              Geleceği Birlikte <br /> İnşa Edelim
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 md:mb-12 md:text-xl">
              Yatırım fırsatları, devam eden projelerimiz veya arsa geliştirme
              talepleriniz için uzman ekibimiz bir telefon uzağınızda.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:scale-105"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
