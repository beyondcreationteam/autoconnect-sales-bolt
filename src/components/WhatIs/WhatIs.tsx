import { Link2, Users, Building2, Store, CarFront } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/common/Reveal";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { GlassPanel } from "@/components/common/GlassPanel";
import { MonogramBackdrop } from "@/components/common/MonogramBackdrop";

export async function WhatIs() {
  const t = await getTranslations("whatIs");

  const painPoints = [
    { key: "fragmented", icon: Link2 },
    { key: "manual", icon: Users },
    { key: "rigid", icon: Building2 },
  ] as const;

  return (
    <section id="what-is" className="relative py-24 lg:py-36 bg-brand-black overflow-hidden">
      {/* Ambient orange glow. */}
      <div
        className="pointer-events-none absolute -top-40 start-1/4 h-96 w-96 rounded-full bg-brand-orange/10 blur-[120px]"
        aria-hidden
      />
      <MonogramBackdrop />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
          <div>
            <AnimatedHeading
              effect="words"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8"
            >
              {t("headingPrefix")}{" "}
              <span className="text-brand-orange">{t("headingHighlight")}</span>
              {t("headingSuffix")}
            </AnimatedHeading>

            <Reveal effect="fade-up" stagger={0.12}>
              <GlassPanel className="p-7 lg:p-8 mb-8">
                <p className="text-lg text-gray-300 font-extralight mb-4">{t("intro1")}</p>
                <p className="text-lg text-gray-300 font-extralight">{t("intro2")}</p>
              </GlassPanel>
              <div className="grid sm:grid-cols-2 gap-4">
                <GlassPanel className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
                    <Store className="w-6 h-6 text-brand-orange" />
                  </div>
                  <span className="text-lg font-extralight text-white">{t("audienceOems")}</span>
                </GlassPanel>
                <GlassPanel className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
                    <CarFront className="w-6 h-6 text-brand-orange" />
                  </div>
                  <span className="text-lg font-extralight text-white">{t("audienceDealership")}</span>
                </GlassPanel>
              </div>
            </Reveal>
          </div>

          <Reveal effect="fade-left">
            <div data-speed="0.95" className="relative rounded-3xl overflow-hidden glass p-2">
              <Image
                src="/screenshot_2025-12-16_at_6.31.37_pm.png"
                alt={t("screenshotAlt")}
                width={800}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </Reveal>
        </div>

        <div className="text-center mb-14 max-w-3xl mx-auto">
          <AnimatedHeading
            as="h3"
            effect="lines"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5"
          >
            {t("transformHeadingLine1")}
            <br />
            <span className="text-brand-orange">{t("transformHeadingHighlight")}</span>
          </AnimatedHeading>
          <Reveal effect="fade-up">
            <p className="text-gray-400 font-extralight max-w-2xl mx-auto">{t("transformSubheading")}</p>
          </Reveal>
        </div>

        <Reveal effect="fade-up" stagger={0.15} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point) => (
            <GlassPanel key={point.key} className="p-8 group h-full transition-transform duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                <point.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-normal text-white mb-2">{t(`painPoints.${point.key}.title`)}</h4>
              <p className="text-gray-400 font-extralight">{t(`painPoints.${point.key}.description`)}</p>
            </GlassPanel>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
