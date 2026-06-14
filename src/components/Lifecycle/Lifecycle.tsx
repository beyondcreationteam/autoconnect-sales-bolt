"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";

const stageKeys = [
  "leadAwareness",
  "vehicleDiscovery",
  "purchaseDelivery",
  "serviceAftersales",
  "engagement",
  "retentionLoyalty",
] as const;

const ORANGE = "#e85d04";

export function Lifecycle() {
  const t = useTranslations("lifecycle");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const image = root.current?.querySelector<HTMLElement>("[data-loop-image]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-stage-card]", root.current);

      if (image) {
        gsap.from(image, {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: image, start: "top 80%", toggleActions: "play none none reverse" },
        });
      }

      if (cards.length) {
        // Light the stages up in lifecycle order, scrubbed to scroll position.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "[data-stage-grid]",
            start: "top 80%",
            end: "bottom 65%",
            scrub: 0.5,
          },
        });

        cards.forEach((card, index) => {
          const number = card.querySelector("[data-stage-number]");
          tl.to(card, { borderColor: ORANGE, backgroundColor: "rgba(232,93,4,0.05)", duration: 0.4 }, index * 0.5)
            .to(number, { color: ORANGE, duration: 0.4 }, "<");
        });
      }
    },
    { scope: root },
  );

  return (
    <section id="lifecycle" ref={root} className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedHeading
            effect="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4"
          >
            {t("headingLine1")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
          <Reveal effect="fade-up">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subheading")}</p>
          </Reveal>
        </div>

        <div className="flex justify-center mb-16">
          <div data-loop-image data-speed="0.95" className="relative w-full max-w-4xl">
            <Image
              src="/screenshot_2025-12-18_at_1.44.33_pm.png"
              alt={t("screenshotAlt")}
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div data-stage-grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stageKeys.map((key) => (
            <div
              key={key}
              data-stage-card
              className="border border-gray-200 bg-gray-50 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-3">
                <span data-stage-number className="text-3xl font-normal text-gray-400">
                  {t(`stages.${key}.number`)}
                </span>
                <h3 className="text-lg font-normal text-brand-black">{t(`stages.${key}.title`)}</h3>
              </div>
              <p className="text-gray-600 text-sm">{t(`stages.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
