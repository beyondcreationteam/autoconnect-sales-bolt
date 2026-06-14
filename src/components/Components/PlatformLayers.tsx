"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Sparkles, BrainCircuit, Workflow, ShieldCheck } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";
import { MonogramBackdrop } from "@/components/common/MonogramBackdrop";

const LAYER_KEYS = [
  "customerExperience",
  "intelligence",
  "workflowAutomation",
  "integrationCompliance",
] as const;

const LAYER_ICONS = [Sparkles, BrainCircuit, Workflow, ShieldCheck];

export function PlatformLayers() {
  const t = useTranslations("components");
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const layers = gsap.utils.toArray<HTMLElement>("[data-layer]", root.current);
      if (layers.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(layers, { autoAlpha: 1, yPercent: 0, z: 0, rotationX: 0 });
        return;
      }

      // Exploded -> assembled stack, scrubbed to scroll.
      gsap.from(layers, {
        yPercent: 70,
        z: -260,
        rotationX: -30,
        autoAlpha: 0,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-layer-stack]",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="components" ref={root} className="relative py-24 lg:py-36 bg-brand-black overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/3 end-0 h-96 w-96 rounded-full bg-brand-orange/10 blur-[130px]"
        aria-hidden
      />
      <MonogramBackdrop />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <AnimatedHeading
              effect="words"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            >
              {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
            </AnimatedHeading>
            <Reveal effect="fade-up">
              <p className="text-lg text-gray-400 font-extralight max-w-md">{t("subheading")}</p>
            </Reveal>
          </div>

          <div className="perspective">
            <div data-layer-stack className="preserve-3d flex flex-col gap-5">
              {LAYER_KEYS.map((key, i) => {
                const Icon = LAYER_ICONS[i];
                const items = t.raw(`layers.${key}.items`) as string[];
                return (
                  <div
                    key={key}
                    data-layer
                    className="glass-strong rounded-3xl p-6 lg:p-7 preserve-3d"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-3xl font-black text-brand-orange/80 leading-none">
                        {t(`layers.${key}.number`)}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-brand-orange/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-normal text-white">
                        {t(`layers.${key}.title`)}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, ii) => (
                        <span
                          key={ii}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-extralight text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
