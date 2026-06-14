"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/utils/cn";

interface Stage3DProps {
  children: ReactNode;
  className?: string;
  /** Inner wrapper class (the element that actually tilts). */
  innerClassName?: string;
  /** Max tilt in degrees at the edges. */
  intensity?: number;
}

// Pseudo-3D scene: gives children a shared perspective and tilts them toward the
// pointer. Tilt is desktop + fine-pointer only and disabled under reduced motion
// (gsap.matchMedia auto-reverts when a query stops matching). The pointer handler
// is contextSafe and uses quickTo so we reuse a single tween per axis.
export function Stage3D({ children, className, innerClassName, intensity = 8 }: Stage3DProps) {
  const root = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const el = inner.current;
      const container = root.current;
      if (!el || !container || !contextSafe) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 1024px) and (pointer: fine)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { isDesktop, reduceMotion } = ctx.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };
          if (!isDesktop || reduceMotion) return;

          const rotX = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
          const rotY = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });

          const onMove = contextSafe((event: PointerEvent) => {
            const rect = container.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;
            rotY(px * intensity * 2);
            rotX(-py * intensity * 2);
          });

          const onLeave = contextSafe(() => {
            rotX(0);
            rotY(0);
          });

          container.addEventListener("pointermove", onMove);
          container.addEventListener("pointerleave", onLeave);

          return () => {
            container.removeEventListener("pointermove", onMove);
            container.removeEventListener("pointerleave", onLeave);
          };
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className={cn("perspective", className)}>
      <div ref={inner} className={cn("preserve-3d", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
