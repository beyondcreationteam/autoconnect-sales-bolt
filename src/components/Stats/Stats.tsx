"use client";

import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";

const cardKeys = ["onlinePreference", "aftersalesSpend", "revenueGain"] as const;
const cardDelays: Record<(typeof cardKeys)[number], number> = {
  onlinePreference: 200,
  aftersalesSpend: 400,
  revenueGain: 600,
};

export function Stats() {
  const t = useTranslations("stats");
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="stats" className="py-20 lg:py-32 bg-brand-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </h2>
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cardKeys.map((key) => (
            <StatCard
              key={key}
              value={t.raw(`cards.${key}.value`) as number}
              prefix={t.raw(`cards.${key}.prefix`) as string}
              suffix={t.raw(`cards.${key}.suffix`) as string}
              description={t(`cards.${key}.description`)}
              source={t(`cards.${key}.source`)}
              isVisible={isVisible}
              delay={cardDelays[key]}
            />
          ))}
        </div>
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
  isVisible: boolean;
  delay: number;
}

function StatCard({
  value,
  prefix = "",
  suffix = "",
  description,
  source,
  isVisible,
  delay,
}: StatCardProps) {
  const count = useCountUp({
    end: value,
    duration: 2000,
    delay,
    isVisible,
    prefix,
    suffix,
  });

  return (
    <div
      className={`bg-brand-dark rounded-2xl p-8 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl lg:text-6xl font-normal text-brand-orange mb-4">{count}</div>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-brand-orange font-extralight">{source}</p>
    </div>
  );
}
