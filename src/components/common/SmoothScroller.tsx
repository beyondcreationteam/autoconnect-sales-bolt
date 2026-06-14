"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { gsap, useGSAP, ScrollSmoother, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

interface SmoothScrollerProps {
  children: ReactNode;
}

// Wraps page content in the ScrollSmoother rig. The fixed Header is intentionally
// rendered OUTSIDE this wrapper so it isn't transformed by #smooth-content.
// Parallax is opted into per-element via data-speed / data-lag (effects: true).
export function SmoothScroller({ children }: SmoothScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reduced motion: leave native scrolling untouched, no smoothing/parallax.
      if (prefersReducedMotion()) return;

      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 0.6,
        speed: 1.35,
        effects: true,
      });

      // Trigger/pin positions depend on final image + font layout. Recompute once
      // mount settles and again after the window load event (late images, fonts).
      const refresh = () => ScrollTrigger.refresh();
      gsap.delayedCall(0.2, refresh);
      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        smoother.kill();
      };
    },
    { scope: wrapperRef },
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
