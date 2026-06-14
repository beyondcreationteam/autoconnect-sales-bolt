import { Link2, Users, Building2, Store, CarFront } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/common/AnimateOnScroll";

export async function WhatIs() {
  const t = await getTranslations("whatIs");

  const painPoints = [
    {
      key: "fragmented",
      icon: Link2,
    },
    {
      key: "manual",
      icon: Users,
    },
    {
      key: "rigid",
      icon: Building2,
    },
  ] as const;

  return (
    <section id="what-is" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <AnimateOnScroll effect="fade-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-6">
                {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
                {t("headingSuffix")}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll effect="fade-up" style={{ transitionDelay: "100ms" }}>
              <p className="text-lg text-gray-600">{t("intro1")}</p>
            </AnimateOnScroll>
            <AnimateOnScroll effect="fade-up" style={{ transitionDelay: "200ms" }}>
              <p className="text-lg text-gray-600 mb-8">{t("intro2")}</p>
            </AnimateOnScroll>
            <AnimateOnScroll effect="fade-up" style={{ transitionDelay: "300ms" }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-brand-light rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Store className="w-6 h-6 text-brand-orange" />
                  </div>
                  <span className="text-lg font-extralight text-brand-black">{t("audienceOems")}</span>
                </div>
                <div className="bg-brand-light rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CarFront className="w-6 h-6 text-brand-orange" />
                  </div>
                  <span className="text-lg font-extralight text-brand-black">{t("audienceDealership")}</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll effect="fade-left" style={{ transitionDelay: "200ms" }}>
            <div className="relative">
              <Image
                src="/screenshot_2025-12-16_at_6.31.37_pm.png"
                alt={t("screenshotAlt")}
                width={800}
                height={800}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </AnimateOnScroll>
        </div>

        <div className="text-center mb-12">
          <AnimateOnScroll effect="fade-up">
            <h3 className="text-2xl sm:text-3xl font-normal text-brand-black mb-4">
              {t("transformHeadingLine1")}
              <br />
              <span className="text-brand-orange">{t("transformHeadingHighlight")}</span>
            </h3>
          </AnimateOnScroll>
          <AnimateOnScroll effect="fade-up" style={{ transitionDelay: "100ms" }}>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("transformSubheading")}</p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <AnimateOnScroll
              key={point.key}
              effect="fade-up"
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="bg-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group h-full">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                  <point.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-normal text-brand-black mb-2">
                  {t(`painPoints.${point.key}.title`)}
                </h4>
                <p className="text-gray-600">{t(`painPoints.${point.key}.description`)}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
