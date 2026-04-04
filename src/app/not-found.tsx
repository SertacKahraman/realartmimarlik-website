import Link from "next/link";

import { HeaderLayout } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-black text-white">
      <HeaderLayout />

      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[100px]" />

        <div className="relative z-10 mb-8">
          <h1 className="select-none text-[10rem] font-black leading-none tracking-tighter text-white/[0.03] scale-150 md:text-[14rem] md:scale-100">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold tracking-tight text-white drop-shadow-2xl md:text-7xl">
              404
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-lg">
          <h2 className="mb-4 text-xl font-medium tracking-wide text-white md:text-2xl">
            Sayfa Bulunamadı
          </h2>
          <p className="mb-10 text-base leading-relaxed text-white/50">
            Aradığınız sayfa silinmiş veya taşınmış olabilir. Aşağıdaki
            bağlantıları kullanarak devam edebilirsiniz.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform duration-300 hover:scale-105"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              Bize Ulaşın
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-white/40">
            <Link
              href="/projects"
              className="hover-underline-animation transition-colors hover:text-white"
            >
              Projelerimiz
            </Link>
            <span className="h-1 w-1 rounded-full bg-white/10" />
            <Link
              href="/services"
              className="hover-underline-animation transition-colors hover:text-white"
            >
              Hizmetler
            </Link>
            <span className="h-1 w-1 rounded-full bg-white/10" />
            <Link
              href="/blog"
              className="hover-underline-animation transition-colors hover:text-white"
            >
              Blog
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
