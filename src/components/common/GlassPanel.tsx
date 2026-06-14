import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  /** "glass" = translucent light surface; "strong" = darker, more opaque. */
  variant?: "glass" | "strong";
  /** Adds the orange glow ring. */
  glow?: boolean;
  as?: ElementType;
}

// Reusable glossy rounded surface used across the dark editorial layout
// (hero copy panel, feature/stat/component cards). Server-renderable.
export function GlassPanel({
  children,
  className,
  variant = "glass",
  glow = false,
  as,
}: GlassPanelProps) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn(
        "rounded-3xl",
        variant === "strong" ? "glass-strong" : "glass",
        glow && "glow-orange",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
