import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

const sizes = {
  sm: "px-4 py-2.5 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-sm gap-2",
} as const;

type GlassButtonProps<T extends ElementType = "button"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: keyof typeof sizes;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "size">;

export function GlassButton<T extends ElementType = "button">({
  as,
  children,
  className,
  size = "md",
  ...props
}: GlassButtonProps<T>) {
  const Tag = as ?? "button";

  return (
    <Tag
      className={cn(
        "group inline-flex items-center justify-center rounded-full font-normal text-white transition-all duration-300 glass-cta disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
