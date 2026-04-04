"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  domAnimation,
  LazyMotion,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const heroStats = [
  { value: "10+", label: "Referans Proje" },
  { value: "A+", label: "Yapı Kalitesi" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
];

void heroStats;

const HERO_VIDEO_SRC = "/video/video-deneme.mp4";
const DESKTOP_SCRUB_EPSILON = 1 / 30;
const MOBILE_SCRUB_EPSILON = 1 / 20;
const DESKTOP_SEEK_INTERVAL = 1000 / 30;
const MOBILE_SEEK_INTERVAL = 1000 / 20;
const DESKTOP_SCRUB_SETTLE_EPSILON = 0.0015;
const MOBILE_SCRUB_SETTLE_EPSILON = 0.003;
const DESKTOP_SCRUB_LERP = 0.18;
const MOBILE_SCRUB_LERP = 0.12;

type SeekableVideo = HTMLVideoElement & {
  fastSeek?: (time: number) => void;
};

type NavigatorConnection = {
  saveData?: boolean;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
};

type NavigatorWithConnection = Navigator & {
  connection?: NavigatorConnection;
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastTickTimeRef = useRef(0);
  const lastAppliedTimeRef = useRef(-1);
  const durationRef = useRef(0);
  const didPrimeRef = useRef(false);
  const targetProgressRef = useRef(0);
  const renderedProgressRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [prefersDataSaver, setPrefersDataSaver] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isScrubReady, setIsScrubReady] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  const prefersNativePlayback =
    shouldReduceMotion || prefersDataSaver || isMobileViewport;
  const heroVideoSrc = HERO_VIDEO_SRC;

  const scrubEpsilon = isMobileViewport
    ? MOBILE_SCRUB_EPSILON
    : DESKTOP_SCRUB_EPSILON;

  const seekInterval = isMobileViewport
    ? MOBILE_SEEK_INTERVAL
    : DESKTOP_SEEK_INTERVAL;

  const scrubSettleEpsilon = isMobileViewport
    ? MOBILE_SCRUB_SETTLE_EPSILON
    : DESKTOP_SCRUB_SETTLE_EPSILON;

  const scrubLerp = isMobileViewport ? MOBILE_SCRUB_LERP : DESKTOP_SCRUB_LERP;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.56], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.56], [0, -72]);
  const contentScale = useTransform(scrollYProgress, [0, 0.56], [1, 0.94]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const connection = (navigator as NavigatorWithConnection).connection;

    const syncPlaybackPreference = () => {
      setIsMobileViewport(mobileQuery.matches);
      setPrefersDataSaver(Boolean(connection?.saveData));
    };

    syncPlaybackPreference();

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", syncPlaybackPreference);
    } else {
      mobileQuery.addListener(syncPlaybackPreference);
    }

    connection?.addEventListener?.("change", syncPlaybackPreference);

    return () => {
      if (typeof mobileQuery.removeEventListener === "function") {
        mobileQuery.removeEventListener("change", syncPlaybackPreference);
      } else {
        mobileQuery.removeListener(syncPlaybackPreference);
      }

      connection?.removeEventListener?.("change", syncPlaybackPreference);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    let frameId: number | null = null;

    if (video) {
      setIsVideoReady(false);
      setHasVideoError(false);
      video.load();

      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        frameId = requestAnimationFrame(() => {
          setIsVideoReady(true);
        });
      }
    }

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [heroVideoSrc]);

  const markVideoReady = useCallback(() => {
    if (!hasVideoError) {
      setIsVideoReady(true);
    }
  }, [hasVideoError]);

  const resetScrubState = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    lastTickTimeRef.current = 0;
    lastAppliedTimeRef.current = -1;
    renderedProgressRef.current = 0;
    targetProgressRef.current = 0;
    didPrimeRef.current = false;

    queueMicrotask(() => {
      setIsScrubReady(false);
    });
  }, []);

  const startNativePlayback = useCallback(async () => {
    const video = videoRef.current;

    if (!video || hasVideoError) {
      return;
    }

    try {
      video.currentTime = 0;
      lastAppliedTimeRef.current = 0;
    } catch {
      lastAppliedTimeRef.current = 0;
    }

    video.muted = true;

    try {
      await video.play();
    } catch {
      // Mobile browsers can delay muted playback until the first paint settles.
    }
  }, [hasVideoError]);

  const applyVideoTime = useCallback(
    (progress: number) => {
      const video = videoRef.current;
      const duration = durationRef.current;

      if (!video || !duration || prefersNativePlayback || hasVideoError) {
        return;
      }

      const nextTime = Math.min(
        Math.max(progress * duration, 0),
        Math.max(duration - 0.001, 0)
      );

      if (Math.abs(nextTime - lastAppliedTimeRef.current) < scrubEpsilon) {
        return;
      }

      lastAppliedTimeRef.current = nextTime;
      const seekableVideo = video as SeekableVideo;

      if (
        !isMobileViewport &&
        seekableVideo.fastSeek &&
        Math.abs(nextTime - video.currentTime) > 0.18
      ) {
        seekableVideo.fastSeek(nextTime);
        return;
      }

      video.currentTime = nextTime;
    },
    [hasVideoError, isMobileViewport, prefersNativePlayback, scrubEpsilon]
  );

  const flushSeek = useCallback(
    function flushSeek(timestamp: number) {
      const current = renderedProgressRef.current;
      const target = targetProgressRef.current;
      const delta = target - current;

      if (Math.abs(delta) <= scrubSettleEpsilon) {
        renderedProgressRef.current = target;
      } else {
        renderedProgressRef.current = current + delta * scrubLerp;
      }

      if (timestamp - lastTickTimeRef.current >= seekInterval) {
        lastTickTimeRef.current = timestamp;
        applyVideoTime(renderedProgressRef.current);
      }

      if (
        Math.abs(targetProgressRef.current - renderedProgressRef.current) <=
        scrubSettleEpsilon
      ) {
        renderedProgressRef.current = targetProgressRef.current;
        applyVideoTime(renderedProgressRef.current);
        rafRef.current = null;
        return;
      }

      rafRef.current = requestAnimationFrame(flushSeek);
    },
    [applyVideoTime, scrubLerp, scrubSettleEpsilon, seekInterval]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (
      !isScrubReady ||
      prefersNativePlayback ||
      hasVideoError ||
      !durationRef.current
    ) {
      return;
    }

    targetProgressRef.current = Math.min(Math.max(latest, 0), 1);

    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(flushSeek);
    }
  });

  const primeVideo = useCallback(async () => {
    const video = videoRef.current;

    if (!video || didPrimeRef.current) {
      return;
    }

    didPrimeRef.current = true;
    durationRef.current = Number.isFinite(video.duration) ? video.duration : 0;

    if (prefersNativePlayback) {
      setIsVideoReady(true);
      setIsScrubReady(false);
      void startNativePlayback();
      return;
    }

    try {
      video.muted = true;
      await video.play();
      video.pause();
    } catch {
      // Muted inline playback may still be blocked in some browsers.
    }

    try {
      video.currentTime = 0.001;
      lastAppliedTimeRef.current = 0.001;
    } catch {
      lastAppliedTimeRef.current = 0;
    }

    renderedProgressRef.current = 0;
    targetProgressRef.current = 0;
    setIsScrubReady(true);
  }, [prefersNativePlayback, startNativePlayback]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || hasVideoError) {
      return;
    }

    resetScrubState();

    if (prefersNativePlayback) {
      void startNativePlayback();
      return;
    }

    video.pause();

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      void primeVideo();
    }
  }, [
    hasVideoError,
    prefersNativePlayback,
    primeVideo,
    resetScrubState,
    startNativePlayback,
  ]);

  const handleMetadataLoaded = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    durationRef.current = Number.isFinite(video.duration) ? video.duration : 0;

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      markVideoReady();
    }

    if (prefersNativePlayback) {
      void startNativePlayback();
    }
  };

  const handlePlaybackReady = () => {
    markVideoReady();
    void primeVideo();
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <section
        ref={containerRef}
        className="relative isolate h-[210svh] min-h-[1120px] border-b border-white/10 bg-black sm:h-[230svh] sm:min-h-[1220px] md:h-[300vh] md:min-h-[1500px] xl:h-[340vh]"
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <video
            ref={videoRef}
            src={heroVideoSrc}
            className={`absolute inset-0 h-full w-full object-cover object-center sm:object-[54%_center] md:object-center transition-opacity duration-700 ${
              isVideoReady && !hasVideoError ? "opacity-100" : "opacity-0"
            }`}
            muted
            playsInline
            autoPlay={prefersNativePlayback}
            loop={prefersNativePlayback}
            preload="metadata"
            onLoadedMetadata={handleMetadataLoaded}
            onLoadedData={handlePlaybackReady}
            onCanPlay={handlePlaybackReady}
            onSeeked={() => {
              markVideoReady();
            }}
            onError={() => {
              setHasVideoError(true);
            }}
            aria-hidden="true"
            disablePictureInPicture
            disableRemotePlayback
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_42%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black md:from-black/75 md:via-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[48vh] bg-gradient-to-t from-black via-black/72 to-transparent md:hidden" />

          {!isVideoReady && !hasVideoError && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/25">
              <div className="relative h-16 w-16 rounded-full border border-white/15">
                <div className="absolute inset-[7px] rounded-full border border-white/10" />
                <div className="absolute inset-0 animate-[spin_2.4s_linear_infinite] rounded-full border-t border-white/70" />
              </div>
            </div>
          )}

          <m.div
            style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
            className="relative z-20 mx-auto flex h-full w-full max-w-7xl flex-col px-4 pt-16 sm:px-6 sm:pt-24 md:px-8 md:pt-28 lg:pt-36"
          >
            <div className="flex flex-1 flex-col items-center justify-center pb-10 text-center sm:pb-12 md:pb-16">
              <div className="w-full max-w-3xl p-0">
                <span className="mb-4 inline-flex max-w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md sm:mb-5 sm:px-4 sm:text-[10px] sm:tracking-[0.22em] md:mb-6 md:px-5 md:text-sm">
                  Real Art Mimarlık | Ordu&apos;da Mimarlık ve İnşaat Çözümleri
                </span>

                <h1 className="mx-auto max-w-[18rem] text-[clamp(2.2rem,10vw,4.75rem)] font-bold leading-[0.96] tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] min-[430px]:max-w-[22rem] sm:max-w-3xl sm:text-5xl md:max-w-5xl md:text-6xl md:leading-none xl:text-7xl">
                  Ordu&apos;da Mimari Tasarım
                  <br className="hidden md:block" /> ve İnşaat Çözümleri
                </h1>

                <p className="mx-auto mt-4 max-w-[19rem] text-sm leading-6 text-white/78 min-[430px]:max-w-[24rem] sm:mt-5 sm:max-w-xl sm:text-base sm:leading-7 md:mt-6 md:max-w-2xl md:text-lg md:leading-8">
                  Real Art Mimarlık, Ordu&apos;daki ofisinde konut, villa ve
                  ticari yapılar için mimari tasarım, proje geliştirme, iç
                  mimari, inşaat uygulama ve danışmanlık hizmetleri sunar.
                </p>

                <div className="mx-auto mt-7 flex w-full max-w-sm flex-col justify-center gap-3 min-[430px]:max-w-none min-[430px]:flex-row sm:mt-8 sm:w-auto sm:gap-4 md:mt-10">
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition-transform duration-300 hover:scale-[1.02] min-[430px]:w-auto sm:min-h-14 sm:gap-3 sm:px-7 sm:py-4 md:px-8 md:text-base"
                  >
                    Teklif Alın
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45 sm:h-8 sm:w-8">
                      <ArrowUpRight size={14} className="sm:h-4 sm:w-4" />
                    </span>
                  </Link>

                  <Link
                    href="/projects"
                    prefetch={false}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 min-[430px]:w-auto sm:min-h-14 sm:px-7 sm:py-4 md:px-8 md:text-base"
                  >
                    Projelerimizi İnceleyin
                  </Link>
                </div>
              </div>
            </div>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
}
