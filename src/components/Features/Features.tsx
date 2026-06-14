"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ShoppingCart,
  CreditCard,
  Wrench,
  Workflow,
  ClipboardList,
  UserCircle,
  Plug,
} from "lucide-react";
import { gsap, useGSAP, ScrollTrigger, isRTL, prefersReducedMotion } from "@/lib/gsap";
import { Reveal } from "@/components/common/Reveal";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Stage3D } from "@/components/common/Stage3D";

const FEATURE_KEYS = [
  "productShopping",
  "financing",
  "afterSales",
  "workflow",
  "orderManagement",
  "customerProfile",
  "apiExtensibility",
] as const;

const FEATURE_ICONS = [
  ShoppingCart,
  CreditCard,
  Wrench,
  Workflow,
  ClipboardList,
  UserCircle,
  Plug,
];

export function Features() {
  const t = useTranslations("features");
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  // Position the fanned stack so the active card sits in front.
  const layout = (target: HTMLElement, index: number, immediate: boolean) => {
    const cards = gsap.utils.toArray<HTMLElement>("[data-fan-card]", target);
    const dir = isRTL() ? -1 : 1;
    cards.forEach((card, i) => {
      const delta = i - index;
      const abs = Math.abs(delta);
      const vars: gsap.TweenVars = {
        xPercent: delta * 16 * dir,
        yPercent: delta * 9,
        z: -abs * 90,
        rotationY: delta * -9 * dir,
        scale: 1 - abs * 0.05,
        autoAlpha: abs > 3 ? 0 : 1 - abs * 0.16,
        duration: immediate ? 0 : 0.7,
        ease: "power3.out",
        overwrite: "auto",
      };
      card.style.zIndex = String(100 - abs);
      gsap.to(card, vars);
    });
  };

  // Setup: entrance + per-feature active tracking. The fanned stack uses CSS
  // ScrollTrigger pin (desktop). pinSpacing:false means the section's height is
  // unchanged, so sections below (Partners, etc.) keep their scroll positions
  // and entrances fire normally. sticky isn't used because it's unreliable
  // under ScrollSmoother's transform-based scrolling.
  useGSAP(
    () => {
      const stack = root.current?.querySelector<HTMLElement>("[data-fan]");
      const items = gsap.utils.toArray<HTMLElement>("[data-feature-item]", root.current);
      if (items.length === 0) return;

      const reduced = prefersReducedMotion();
      const dir = isRTL() ? -1 : 1;

      if (stack) layout(stack, 0, true);

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => self.isActive && setActive(index),
        });

        if (!reduced) {
          gsap.from(item, {
            x: 50 * dir,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" },
          });
        }
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const col = root.current?.querySelector<HTMLElement>("[data-fan-col]");
        const cardsWrap = root.current?.querySelector<HTMLElement>("[data-cards]");
        if (!col || !cardsWrap) return;

        const st = ScrollTrigger.create({
          trigger: cardsWrap,
          start: "top 140px",
          end: "bottom 85%",
          pin: col,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        return () => st.kill();
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  // Re-fan whenever the active feature changes.
  useGSAP(
    () => {
      const stack = root.current?.querySelector<HTMLElement>("[data-fan]");
      if (!stack || prefersReducedMotion()) return;
      layout(stack, active, false);
    },
    { scope: root, dependencies: [active] },
  );

  return (
    <section id="features" ref={root} className="relative py-24 lg:py-36 bg-brand-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <AnimatedHeading
            effect="chars"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
          <Reveal effect="fade-up">
            <p className="text-lg font-extralight text-gray-400 max-w-2xl mx-auto">{t("subheading")}</p>
          </Reveal>
        </div>

        <div className="lg:grid lg:grid-cols-[45%_55%] lg:gap-16">
          {/* Pinned fanned card stack (desktop). */}
          <div data-fan-col className="hidden lg:block">
            <div data-fan className="relative h-[460px] flex items-center justify-center">
              <Stage3D className="w-full h-full" innerClassName="relative w-full h-full flex items-center justify-center">
                {FEATURE_KEYS.map((key, i) => {
                  const Icon = FEATURE_ICONS[i];
                  return (
                    <div
                      key={key}
                      data-fan-card
                      className="absolute w-72 h-96 rounded-3xl glass-strong p-6 flex flex-col preserve-3d"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-display text-5xl font-black text-brand-orange/90 leading-none">
                          {t(`items.${key}.number`)}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand-orange" />
                        </div>
                      </div>
                      <h3 className="text-lg font-normal text-white mb-3 tracking-wide">
                        {t(`items.${key}.title`)}
                      </h3>
                      {/* Faux UI mock / abstract tile (alternating). */}
                      {i % 2 === 0 ? (
                        <div className="mt-auto space-y-2.5">
                          <div className="h-2.5 rounded-full bg-white/20 w-5/6" />
                          <div className="h-2.5 rounded-full bg-white/15 w-2/3" />
                          <div className="h-2.5 rounded-full bg-brand-orange/40 w-1/2" />
                          <div className="h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                        </div>
                      ) : (
                        <div className="mt-auto h-40 rounded-2xl bg-gradient-to-br from-brand-orange/30 via-red-500/15 to-transparent border border-white/10" />
                      )}
                    </div>
                  );
                })}
              </Stage3D>
            </div>
          </div>

          {/* Scrolling feature list. */}
          <div data-cards className="space-y-5">
            {FEATURE_KEYS.map((key, i) => {
              const Icon = FEATURE_ICONS[i];
              const bullets = t.raw(`items.${key}.bullets`) as string[];
              const isActive = i === active;
              return (
                <div
                  key={key}
                  data-feature-item
                  className={`rounded-3xl p-6 lg:p-8 transition-colors duration-500 ${
                    isActive ? "glass-strong glow-orange" : "glass"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-orange" />
                      </div>
                      <span className="mt-2 block text-center font-display text-sm font-bold text-brand-orange/70">
                        {t(`items.${key}.number`)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-normal text-white mb-2 tracking-wide">
                        {t(`items.${key}.title`)}
                      </h3>
                      <p className="font-extralight text-gray-400 mb-4">{t(`items.${key}.subtitle`)}</p>
                      <ul className="space-y-2.5">
                        {bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-3 text-sm font-extralight text-gray-300">
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
