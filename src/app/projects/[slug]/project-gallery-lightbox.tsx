"use client";

import { startTransition, useEffect, useEffectEvent, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

type ProjectGalleryLightboxProps = {
  images: string[];
  title: string;
};

export default function ProjectGalleryLightbox({
  images,
  title,
}: ProjectGalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const openImage = (index: number) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  };

  const closeLightbox = () => {
    startTransition(() => {
      setActiveIndex(null);
    });
  };

  const showPrevious = () => {
    if (images.length < 2) {
      return;
    }

    startTransition(() => {
      setActiveIndex((current) => {
        if (current === null) {
          return current;
        }

        return (current - 1 + images.length) % images.length;
      });
    });
  };

  const showNext = () => {
    if (images.length < 2) {
      return;
    }

    startTransition(() => {
      setActiveIndex((current) => {
        if (current === null) {
          return current;
        }

        return (current + 1) % images.length;
      });
    });
  };

  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (!isOpen) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
      return;
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="px-6 pb-20 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-8 text-2xl font-bold md:mb-12 md:text-3xl">
            Proje Galerisi
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
          {images.map((img, index) => (
            <Reveal key={img} delay={index * 80}>
              <button
                type="button"
                onClick={() => openImage(index)}
                className="group relative block aspect-square w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-900 text-left transition-colors hover:border-white/20 md:rounded-2xl"
                aria-label={`${title} galeri görseli ${index + 1} büyüt`}
              >
                <Image
                  src={img}
                  alt={`${title} galeri görseli ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} galeri görseli büyütülmüş görünüm`}
          className="fixed inset-0 z-[90] bg-black/92 p-3 backdrop-blur-sm sm:p-4 md:p-8"
          onClick={closeLightbox}
        >
          <div
            className="mx-auto flex h-full max-w-7xl flex-col justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur-md sm:mb-4 sm:items-center sm:p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Proje Galerisi
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/70 sm:mt-2">
                  {title} • Görsel {activeIndex + 1} / {images.length}
                </p>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-colors hover:border-white/25 hover:text-white"
                aria-label="Galeri görünümünü kapat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/40 sm:rounded-[1.75rem]">
              <div className="relative aspect-[4/5] max-h-[65vh] w-full sm:aspect-[16/10] sm:max-h-[78vh]">
                <Image
                  src={images[activeIndex]}
                  alt={`${title} galeri görseli ${activeIndex + 1}`}
                  fill
                  priority
                  unoptimized
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/80 backdrop-blur-md transition-colors hover:border-white/25 hover:text-white sm:inline-flex"
                    aria-label="Önceki görsele geç"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/80 backdrop-blur-md transition-colors hover:border-white/25 hover:text-white sm:inline-flex"
                    aria-label="Sonraki görsele geç"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-3 space-y-3 sm:mt-4">
                <div className="grid grid-cols-2 gap-3 sm:hidden">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
                    aria-label="Önceki görsele geç"
                  >
                    <ChevronLeft size={18} />
                    Önceki
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
                    aria-label="Sonraki görsele geç"
                  >
                    Sonraki
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-3 snap-x snap-mandatory">
                  {images.map((img, index) => (
                    <button
                      key={`${img}-thumbnail`}
                      type="button"
                      onClick={() => openImage(index)}
                      className={`relative h-16 w-20 flex-none snap-start overflow-hidden rounded-xl border transition-colors sm:h-20 sm:w-24 ${
                        activeIndex === index
                          ? "border-white/50"
                          : "border-white/10 hover:border-white/25"
                      }`}
                      aria-label={`${title} küçük önizleme ${index + 1}`}
                    >
                    <Image
                      src={img}
                      alt={`${title} küçük önizleme ${index + 1}`}
                      width={96}
                      height={80}
                      loading="eager"
                      unoptimized
                      sizes="96px"
                      className="h-full w-full object-cover"
                    />
                      <div
                        className={`absolute inset-0 transition-colors ${
                          activeIndex === index ? "bg-transparent" : "bg-black/35"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
