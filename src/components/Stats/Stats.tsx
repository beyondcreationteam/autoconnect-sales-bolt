"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";

const cardKeys = ["onlinePreference", "aftersalesSpend", "revenueGain"] as const;

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section id="stats" className="py-20 lg:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedHeading
            effect="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4"
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
          <Reveal effect="fade-up">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t("subheading")}</p>
          </Reveal>
        </div>

        <Reveal effect="fade-up" stagger={0.15} className="grid md:grid-cols-3 gap-8">
          {cardKeys.map((key) => (
            <StatCard
              key={key}
              value={t.raw(`cards.${key}.value`) as number}
              prefix={(t.raw(`cards.${key}.prefix`) as string) ?? ""}
              suffix={(t.raw(`cards.${key}.suffix`) as string) ?? ""}
              description={t(`cards.${key}.description`)}
              source={t(`cards.${key}.source`)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  source: string;
}

function StatCard({ value, prefix = "", suffix = "", description, source }: StatCardProps) {
  const numberRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = numberRef.current;
      if (!el) return;

      const render = (n: number) => {
        el.textContent = `${prefix}${Math.round(n)}${suffix}`;
      };

      if (prefersReducedMotion()) {
        render(value);
        return;
      }

      const counter = { n: 0 };
      render(0);
      gsap.to(counter, {
        n: value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => render(counter.n),
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { scope: numberRef, dependencies: [value, prefix, suffix] },
  );

  return (
    <div className="bg-brand-dark rounded-2xl p-8 text-center">
      <div ref={numberRef} className="text-5xl lg:text-6xl font-normal text-brand-orange mb-4">
        {`${prefix}0${suffix}`}
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-brand-orange font-extralight">{source}</p>
    </div>
  );
}
