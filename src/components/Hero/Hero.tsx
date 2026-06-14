"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, SplitText, prefersReducedMotion } from "@/lib/gsap";
import { useLoaderReady } from "@/hooks/useLoaderReady";
import { Stage3D } from "@/components/common/Stage3D";
import { GlassPanel } from "@/components/common/GlassPanel";
import { GlassButton } from "@/components/common/GlassButton";

export function Hero() {
  const t = useTranslations("hero");
  const { loaderComplete } = useLoaderReady();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const headline = root.current?.querySelector<HTMLElement>("[data-hero-headline]");
      const reveals = root.current?.querySelectorAll<HTMLElement>("[data-hero-reveal]");
      const car = root.current?.querySelector<HTMLElement>("[data-hero-car]");
      const sweep = root.current?.querySelector<HTMLElement>("[data-hero-sweep]");
      const streaks = gsap.utils.toArray<HTMLElement>("[data-hero-streak]", root.current);

      if (prefersReducedMotion()) {
        if (!loaderComplete) return;
        if (headline) gsap.set(headline, { opacity: 1 });
        if (reveals) gsap.set(reveals, { opacity: 1, y: 0 });
        if (car) gsap.set(car, { opacity: 1 });
        return;
      }

      if (!loaderComplete) {
        if (car) gsap.set(car, { opacity: 0, scale: 1.12 });
        if (reveals) gsap.set(reveals, { opacity: 0, y: 28 });
        if (sweep) gsap.set(sweep, { xPercent: -160, opacity: 0 });
        return;
      }

      // --- Intro timeline (starts after the page loader fades out) ---
      const split = headline
        ? new SplitText(headline, { type: "lines", linesClass: "overflow-hidden" })
        : null;
      if (headline) gsap.set(headline, { opacity: 1 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      if (car) tl.to(car, { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }, 0);
      if (split) tl.from(split.lines, { yPercent: 115, duration: 1.1, stagger: 0.12 }, 0.2);
      if (reveals) tl.to(reveals, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, "-=0.7");

      // Light sweep crosses the body once after the car settles.
      if (sweep) {
        gsap.fromTo(
          sweep,
          { xPercent: -160, opacity: 0 },
          { xPercent: 160, opacity: 1, duration: 1.8, ease: "power2.inOut", delay: 0.8 },
        );
      }

      // Streaks gently drift, looping, for a sense of speed.
      streaks.forEach((streak, i) => {
        gsap.to(streak, {
          xPercent: i % 2 === 0 ? 12 : -12,
          duration: 3 + i,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // --- Scroll-scrubbed treatment as the hero exits ---
      if (car) {
        gsap.to(car, {
          scale: 1.18,
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (headline) {
        gsap.to(headline, {
          yPercent: -30,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      return () => split?.revert();
    },
    { scope: root, dependencies: [loaderComplete] },
  );

  return (
    <section
      ref={root}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-brand-black"
    >
      {/* Vehicle stage: parallax SUV + light streaks + sweep, with pointer tilt. */}
      <Stage3D className="absolute inset-0" innerClassName="h-full w-full">
        <div data-hero-car data-speed="0.9" className="absolute inset-0">
          <Image
            src="/hero-car.png"
            alt="AutoConnect connected vehicle"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[65%_40%]"
          />
          {/* Red light-streak motion blur (sense of speed). */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div
              data-hero-streak
              className="absolute left-0 right-0 top-[42%] h-[3px] bg-gradient-to-r from-transparent via-brand-orange to-transparent blur-[2px] opacity-80"
            />
            <div
              data-hero-streak
              className="absolute left-0 right-0 top-[48%] h-[6px] bg-gradient-to-r from-transparent via-red-600 to-transparent blur-[4px] opacity-70"
            />
            <div
              data-hero-streak
              className="absolute left-0 right-0 top-[55%] h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[1px] opacity-60"
            />
          </div>
          {/* Single light sweep. */}
          <div
            data-hero-sweep
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
            aria-hidden
          />
        </div>
      </Stage3D>

      {/* Legibility scrims. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent"
        aria-hidden
      />

      {/* Oversized headline, sitting just below the header. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full pt-48 sm:pt-52 lg:pt-60 xl:pt-64">
          <h1
            data-hero-headline
            className="font-display font-black uppercase text-white leading-[0.95] tracking-tight text-[9vw] sm:text-[7.5vw] lg:text-[5.5vw] xl:text-[5vw] max-w-4xl lg:max-w-6xl"
            style={{ opacity: 0 }}
          >
            {t("headlineLine1")} {t("headlineLine2")}
          </h1>
        </div>
      </div>

      {/* Bottom content block. */}
      <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12 pb-14 lg:pb-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p
              data-hero-reveal
              className="inline-flex items-center rounded-full glass px-4 py-1.5 text-xs sm:text-sm font-normal tracking-[0.2em] text-brand-orange mb-6"
            >
              {t("tagline")}
            </p>
            <p data-hero-reveal className="text-lg sm:text-xl text-gray-300 font-extralight mb-2">
              {t("subheadlineLine1")} {t("subheadlineLine2")}
            </p>
            <p data-hero-reveal className="text-sm font-extralight">
              <span className="text-white">{t("trustedByLine1")} </span>
              <span className="text-brand-orange">{t("trustedByLine2")}</span>
            </p>
          </div>

          <div data-hero-reveal className="flex flex-col items-start gap-4">
            <GlassButton as="a" href="#contact" size="md" className="px-7 py-3.5">
              {t("cta")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </GlassButton>
            <a href="#what-is" className="text-xs font-extralight text-gray-400 hover:text-white transition-colors">
              {t("scrollCue")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
