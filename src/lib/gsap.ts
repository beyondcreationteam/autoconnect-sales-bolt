"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

// Single registration point: every client component imports gsap/plugins from
// here so registerPlugin runs exactly once and tree-shaking stays predictable.
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

gsap.defaults({ ease: "power3.out", duration: 1 });

// True when the visitor prefers reduced motion — branch animations off this.
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// True for right-to-left locales; used to flip x-direction tweens.
export const isRTL = (): boolean =>
  typeof document !== "undefined" && document.dir === "rtl";

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother, SplitText };
