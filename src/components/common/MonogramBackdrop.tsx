"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/utils/cn";
import { MONOGRAM_VIEWBOX, MONOGRAM_PATHS } from "./monogramPath";

interface MonogramBackdropProps {
  /** Extra classes for the absolute wrapper (e.g. color/opacity, sizing). */
  className?: string;
  /** SVG size inside its sticky frame. */
  svgClassName?: string;
}

// Subtle AutoConnect-monogram line-art (traced from public/bg.png) that draws
// itself as the surrounding section scrolls into view. The SVG is `sticky`, so
// it parks in the viewport while the draw progresses — same pinning idea as the
// Features stack. Decorative only (aria-hidden).
export function MonogramBackdrop({ className, svgClassName }: MonogramBackdropProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const paths = gsap.utils.toArray<SVGPathElement>("path", root.current);
      if (paths.length === 0) return;

      const section = root.current?.closest("section") ?? root.current?.parentElement;

      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      if (prefersReducedMotion()) {
        gsap.set(paths, { strokeDashoffset: 0 });
        return;
      }

      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 50%",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 flex items-center justify-center text-white/[0.07]",
        className,
      )}
    >
      <svg
        viewBox={MONOGRAM_VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
        className={cn("h-[78%] w-[112%] max-w-none", svgClassName)}
      >
        {MONOGRAM_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  );
}
