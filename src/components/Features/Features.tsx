"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, ScrollTrigger, isRTL, prefersReducedMotion } from "@/lib/gsap";
import { Reveal } from "@/components/common/Reveal";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";

const FEATURE_KEYS = [
  "productShopping",
  "financing",
  "afterSales",
  "workflow",
  "orderManagement",
  "customerProfile",
  "apiExtensibility",
] as const;

export function Features() {
  const t = useTranslations("features");
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-feature-card]", root.current);
      if (cards.length === 0) return;

      const reduced = prefersReducedMotion();
      const dir = isRTL() ? -1 : 1;

      const mm = gsap.matchMedia();

      // Track which feature is in focus to drive the big rail number.
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => self.isActive && setActive(index),
        });

        if (!reduced) {
          gsap.from(card, {
            x: (index % 2 === 0 ? 60 : -60) * dir,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
          });
        }
      });

      // Desktop: pin the number rail and scrub a vertical progress fill.
      mm.add("(min-width: 1024px)", () => {
        if (reduced) return;
        const rail = root.current?.querySelector<HTMLElement>("[data-rail]");
        const cardsWrap = root.current?.querySelector<HTMLElement>("[data-cards]");
        const fill = root.current?.querySelector<HTMLElement>("[data-rail-fill]");
        if (!rail || !cardsWrap) return;

        ScrollTrigger.create({
          trigger: cardsWrap,
          start: "top 25%",
          end: "bottom 75%",
          pin: rail,
          pinSpacing: false,
        });

        if (fill) {
          gsap.fromTo(
            fill,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top center",
              scrollTrigger: { trigger: cardsWrap, start: "top 25%", end: "bottom 75%", scrub: true },
            },
          );
        }
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="features" ref={root} className="py-20 lg:py-32 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedHeading
            effect="chars"
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4"
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
          <Reveal effect="fade-up">
            <p className="text-lg font-extralight text-gray-600 max-w-2xl mx-auto">{t("subheading")}</p>
          </Reveal>
        </div>

        <div className="lg:grid lg:grid-cols-[30%_70%] lg:gap-12">
          {/* Pinned rail: oversized active number + scrubbing progress track. */}
          <div data-rail className="hidden lg:flex lg:items-start lg:gap-6 lg:pt-4">
            <div className="relative w-px h-40 bg-gray-300 overflow-hidden">
              <div data-rail-fill className="absolute inset-0 bg-brand-orange origin-top" />
            </div>
            <div>
              <span className="block text-7xl xl:text-8xl font-normal text-brand-orange leading-none tabular-nums">
                {t(`items.${FEATURE_KEYS[active]}.number`)}
              </span>
              <span className="mt-4 block text-lg font-normal text-brand-black max-w-[12rem]">
                {t(`items.${FEATURE_KEYS[active]}.title`)}
              </span>
            </div>
          </div>

          <div data-cards className="space-y-6">
            {FEATURE_KEYS.map((key) => {
              const bullets = t.raw(`items.${key}.bullets`) as string[];
              return (
                <div key={key} data-feature-card className="bg-white rounded-2xl p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start">
                    <div className="lg:hidden flex items-center justify-center py-2">
                      <span className="text-5xl font-normal text-brand-orange/30">
                        {t(`items.${key}.number`)}
                      </span>
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg lg:text-xl font-normal text-brand-black mb-2 tracking-wide">
                        {t(`items.${key}.title`)}
                      </h3>
                      <p className="font-extralight text-gray-600 mb-4">{t(`items.${key}.subtitle`)}</p>
                      <ul className="space-y-3">
                        {bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-extralight text-gray-600">
                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
