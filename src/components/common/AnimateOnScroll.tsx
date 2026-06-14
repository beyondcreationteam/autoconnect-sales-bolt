"use client";

import type { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  effect?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
  threshold?: number;
  style?: React.CSSProperties;
}

export function AnimateOnScroll({
  children,
  className,
  effect = "fade-up",
  threshold = 0.1,
  style,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      style={style}
      className={cn("animate-on-scroll", effect, isVisible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
