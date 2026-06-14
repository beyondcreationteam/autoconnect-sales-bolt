"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";
import { GlassPanel } from "@/components/common/GlassPanel";

const cardKeys = ["onlinePreference", "aftersalesSpend", "revenueGain"] as const;

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section id="stats" className="relative py-24 lg:py-36 bg-brand-ink overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 start-1/3 h-96 w-96 rounded-full bg-brand-orange/10 blur-[130px]"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <AnimatedHeading
            effect="words"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
          <Reveal effect="fade-up">
            <p className="text-lg text-gray-400 font-extralight max-w-2xl mx-auto">{t("subheading")}</p>
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
    <GlassPanel className="p-8 lg:p-10 text-center h-full transition-transform duration-500 hover:-translate-y-1.5">
      <div
        ref={numberRef}
        className="font-display text-6xl lg:text-7xl font-black text-brand-orange mb-5 text-glow tabular-nums"
      >
        {`${prefix}0${suffix}`}
      </div>
      <p className="text-gray-300 font-extralight mb-4">{description}</p>
      <p className="text-brand-orange text-sm font-normal tracking-wide">{source}</p>
    </GlassPanel>
  );
}
