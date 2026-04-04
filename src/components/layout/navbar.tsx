"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Projeler", href: "/projects" },
  { name: "Hizmetler", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

export function HeaderLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="absolute -left-[9999px] top-4 z-[100] rounded-full bg-white px-6 py-3 text-sm font-bold text-black shadow-xl focus:left-4 focus:outline-none focus:ring-2 focus:ring-white"
      >
        İçeriğe Atla
      </a>

      <header className="fixed left-1/2 top-6 z-50 hidden w-auto -translate-x-1/2 md:block">
        <nav
          className={cn(
            "flex items-center gap-8 px-10 py-4",
            "rounded-full border border-white/10 bg-black/20 shadow-2xl backdrop-blur-xl",
            "transition-all duration-300 hover:border-white/20 hover:bg-black/40"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-all hover:scale-105 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      <div className="pointer-events-none fixed left-0 top-0 z-[60] flex w-full items-center justify-between p-6">
        <div className="pointer-events-auto z-50">
          <Link href="/" className="block">
            <Image
              src="/real-logo.webp"
              alt="Real Art Mimarlık"
              width={120}
              height={40}
              className="h-8 w-auto drop-shadow-lg md:h-10"
              priority
            />
          </Link>
        </div>

        <div className="pointer-events-auto z-50 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            aria-label={isMobileMenuOpen ? "Mobil Menüyü Kapat" : "Mobil Menüyü Aç"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="pointer-events-auto hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            İletişime Geç
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[50] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl md:hidden",
          "transition-all duration-300",
          isMobileMenuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-3 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-white transition-colors hover:text-white/70"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block rounded-full bg-white px-8 py-3 text-lg font-bold text-black"
            >
              İletişime Geç
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
