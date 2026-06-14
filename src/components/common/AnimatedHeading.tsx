"use client";

import type { ElementType, ReactNode } from "react";
import { useRef } from "react";
import { gsap, useGSAP, SplitText, isRTL, prefersReducedMotion } from "@/lib/gsap";

type HeadingEffect = "lines" | "words" | "chars";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  /** Reveal style. "chars" auto-falls back to "words" in RTL to keep ligatures intact. */
  effect?: HeadingEffect;
  as?: ElementType;
  /** ScrollTrigger start; pass false to play immediately on mount (e.g. Hero). */
  start?: string | false;
  delay?: number;
}

// Creative, scroll-triggered text reveal built on SplitText. Each effect is a
// distinct motion so headings across the page don't all animate identically.
export function AnimatedHeading({
  children,
  className,
  effect = "lines",
  as,
  start = "top 85%",
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as ?? "h2";

  useGSAP(
    () => {
      if (!ref.current) return;

      if (prefersReducedMotion()) {
        gsap.set(ref.current, { opacity: 1 });
        return;
      }

      // Arabic char-splitting breaks shaping/ligatures — degrade to words.
      const resolved = effect === "chars" && isRTL() ? "words" : effect;

      const split = new SplitText(ref.current, {
        type: "lines,words,chars",
        linesClass: "overflow-hidden",
      });

      const scrollTrigger = start === false ? undefined : { trigger: ref.current, start };
      const common = { delay, scrollTrigger };

      gsap.set(ref.current, { opacity: 1 });

      if (resolved === "lines") {
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
          ...common,
        });
      } else if (resolved === "words") {
        gsap.from(split.words, {
          yPercent: 100,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.06,
          ...common,
        });
      } else {
        gsap.from(split.chars, {
          yPercent: 120,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.7)",
          stagger: { each: 0.025, from: "start" },
          ...common,
        });
      }

      return () => split.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
