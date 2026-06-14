"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, SplitText, prefersReducedMotion } from "@/lib/gsap";

export function Hero() {
  const t = useTranslations("hero");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reveal = root.current?.querySelectorAll<HTMLElement>("[data-hero-reveal]");
      const headline = root.current?.querySelector<HTMLElement>("[data-hero-headline]");
      const chevron = root.current?.querySelector<HTMLElement>("[data-hero-chevron]");
      if (!reveal || !headline) return;

      if (prefersReducedMotion()) {
        gsap.set([...reveal, headline], { opacity: 1, y: 0 });
        if (chevron) gsap.set(chevron, { opacity: 1 });
        return;
      }

      // Char-split is unsafe for Arabic shaping; split by words there.
      const split = new SplitText(headline, {
        type: "lines,words",
        linesClass: "overflow-hidden",
      });
      gsap.set(headline, { opacity: 1 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(split.lines, { yPercent: 115, duration: 1.1, stagger: 0.14 })
        .from(reveal, { y: 30, opacity: 0, duration: 0.9, stagger: 0.15 }, "-=0.7")
        .from(chevron ?? [], { opacity: 0, duration: 0.6 }, "-=0.3");

      // Idle bob on the scroll cue, looping.
      if (chevron) {
        gsap.to(chevron, {
          y: 10,
          duration: 0.9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: tl.duration(),
        });
      }

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden"
    >
      {/* Parallax background layer (overscanned so the drift never reveals edges). */}
      <div
        data-speed="0.85"
        className="absolute inset-0 scale-110 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(/bg.png)", backgroundColor: "black" }}
        aria-hidden
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40 w-full">
        <div>
          <p
            data-hero-reveal
            className="text-brand-orange font-normal tracking-[0.2em] text-sm lg:text-base mb-8"
          >
            {t("tagline")}
          </p>

          <h1
            data-hero-headline
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-normal leading-[1.15] mb-8"
            style={{ opacity: 0 }}
          >
            {t("headlineLine1")}
            <br />
            {t("headlineLine2")}
          </h1>

          <p
            data-hero-reveal
            className="text-base sm:text-lg text-gray-400 font-extralight mb-0"
          >
            {t("subheadlineLine1")}
            <br />
            {t("subheadlineLine2")}
          </p>
        </div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-12 pb-16 max-w-7xl mx-auto w-full">
        <p data-hero-reveal className="text-sm font-extralight">
          <span className="text-white">{t("trustedByLine1")}</span>
          <br />
          <span className="text-brand-orange">{t("trustedByLine2")}</span>
        </p>
      </div>

      <a
        href="#what-is"
        data-hero-chevron
        className="absolute bottom-8 start-1/2 -translate-x-1/2 text-white"
        style={{ opacity: 0 }}
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
