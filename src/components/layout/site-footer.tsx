import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Hızlı Erişim",
    links: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Projelerimiz", href: "/projects" },
      { label: "Hakkımızda", href: "/about" },
      { label: "İletişim", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { label: "Mimari Tasarım", href: "/services/mimari-tasarim" },
      { label: "İç Mimari", href: "/services/ic-mimari" },
      { label: "Kentsel Dönüşüm", href: "/services/kentsel-donusum" },
      { label: "Danışmanlık", href: "/services/danismanlik" },
      { label: "Proje Geliştirme", href: "/services/proje-gelistirme" },
      { label: "İnşaat Uygulama", href: "/services/insaat-uygulama" },
    ],
  },
  {
    title: "İletişim",
    links: [
      {
        label: "info@realartmimarlik.com",
        href: "mailto:info@realartmimarlik.com",
      },
      { label: "+90 (532) 987 65 43", href: "tel:+905329876543" },
      {
        label: "Akyazı, Atatürk Blv. 357/A\nAltınordu, Ordu",
        href: "https://maps.google.com/?q=Akyaz%C4%B1,+Atat%C3%BCrk+Blv.+357/A,+Alt%C4%B1nordu,+Ordu",
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-40 border-t border-white/10 bg-black px-6 pb-8 pt-16 md:pb-12 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-4 md:gap-12">
          <div className="col-span-1">
            <div>
              <Image
                src="/real-logo.webp"
                alt="Real Art Mimarlık Logo"
                width={140}
                height={48}
                className="mb-4 h-10 w-auto md:mb-6 md:h-12"
              />
              <p className="text-xs leading-relaxed text-white/60 md:text-sm">
                Ordu merkezli Real Art Mimarlık; mimari tasarım, iç mimari,
                inşaat uygulama, proje geliştirme ve danışmanlık alanlarında çözüm sunar.
              </p>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-bold text-white md:mb-6">{column.title}</h3>
              <ul className="space-y-2 text-xs text-white/65 md:space-y-3 md:text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") ||
                    link.href.startsWith("mailto") ||
                    link.href.startsWith("tel") ? (
                      <a
                        href={link.href}
                        className="block whitespace-pre-line leading-relaxed transition-colors hover:text-white"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="block whitespace-pre-line leading-relaxed transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center text-[10px] text-white/55 md:flex-row md:gap-4 md:pt-8 md:text-left md:text-xs">
          <p>&copy; 2026 Real Art Mimarlık. Tüm hakları saklıdır.</p>
          <p>Design by Sertaç Kahraman</p>
        </div>
      </div>
    </footer>
  );
}
