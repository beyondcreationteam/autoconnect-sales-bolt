"use client";

import type { ElementType, ReactNode } from "react";
import { useRef } from "react";
import { gsap, useGSAP, isRTL, prefersReducedMotion } from "@/lib/gsap";

type RevealEffect = "fade-up" | "fade-left" | "fade-right" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  effect?: RevealEffect;
  /** Seconds before the tween starts after the trigger fires. */
  delay?: number;
  /** Seconds between each direct child when staggering a group. */
  stagger?: number;
  /** Element rendered as the wrapper (default div). */
  as?: ElementType;
}

const DISTANCE = 60;

// Scroll-triggered entrance for its direct children. Animating the children
// (not the wrapper) lets a single Reveal stagger a whole group.
export function Reveal({
  children,
  className,
  effect = "fade-up",
  delay = 0,
  stagger = 0,
  as,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Wrapper = as ?? "div";

  useGSAP(
    () => {
      const targets = ref.current?.children;
      if (!targets || targets.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1 });
        return;
      }

      const rtlSign = isRTL() ? -1 : 1;
      const from: gsap.TweenVars = { opacity: 0 };
      if (effect === "fade-up") from.y = DISTANCE;
      if (effect === "fade-left") from.x = DISTANCE * rtlSign;
      if (effect === "fade-right") from.x = -DISTANCE * rtlSign;
      if (effect === "scale") from.scale = 0.9;

      gsap.from(targets, {
        ...from,
        delay,
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref },
  );

  return (
    <Wrapper ref={ref} className={className}>
      {children}
    </Wrapper>
  );
}
