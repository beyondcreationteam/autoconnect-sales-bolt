"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const stageKeys = [
  "leadAwareness",
  "vehicleDiscovery",
  "purchaseDelivery",
  "serviceAftersales",
  "engagement",
  "retentionLoyalty",
] as const;

export function Lifecycle() {
  const t = useTranslations("lifecycle");
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (isVisible && activeIndex < stageKeys.length - 1) {
      const timer = setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible, activeIndex]);

  return (
    <section id="lifecycle" className="py-20 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("headingLine1")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("subheading")}
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div
            className={`relative w-full max-w-4xl transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Image
              src="/screenshot_2025-12-18_at_1.44.33_pm.png"
              alt={t("screenshotAlt")}
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stageKeys.map((key, index) => (
            <div
              key={key}
              className={`border rounded-xl p-6 transition-all duration-500 ${
                activeIndex >= index
                  ? "border-brand-orange bg-brand-orange/5"
                  : "border-gray-200 bg-gray-50"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span
                  className={`text-3xl font-normal transition-colors duration-500 ${
                    activeIndex >= index ? "text-brand-orange" : "text-gray-400"
                  }`}
                >
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
