"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/utils/cn";

interface Layer3DProps {
  children: ReactNode;
  className?: string;
  /** translateZ depth in px (positive = nearer the viewer). */
  depth?: number;
  /** Scroll-scrubbed vertical drift, in % of the element height. */
  drift?: number;
}

// A depth layer inside a Stage3D. Sits at a fixed translateZ and can drift
// vertically on scroll (transform-only, scrubbed) for parallax separation.
export function Layer3D({ children, className, depth = 0, drift = 0 }: Layer3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.set(el, { z: depth });

      if (prefersReducedMotion() || !drift) return;

      gsap.to(el, {
        yPercent: drift,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref, dependencies: [depth, drift] },
  );

  return (
    <div ref={ref} className={cn("preserve-3d", className)}>
      {children}
    </div>
  );
}
