import Image from "next/image";
import { cn } from "@/utils/cn";

interface LogoInlineProps {
  className?: string;
  /** Compact sizing for the fixed header; default for footer and other surfaces. */
  size?: "default" | "header";
}

export function LogoInline({ className = "", size = "default" }: LogoInlineProps) {
  const imageClass =
    size === "header"
      ? "h-6 w-auto sm:h-7 lg:h-8"
      : "h-8 w-auto sm:h-9 lg:h-10";

  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <div className="flex items-center gap-2 sm:gap-2.5">
        <Image
          src="/parallel-logo.png"
          alt=""
          width={322}
          height={80}
          unoptimized
          className={imageClass}
          style={{ width: "auto" }}
        />
        <span className="text-white/40 text-sm">|</span>
        <Image
          src="/autoconnect-logo.png"
          alt=""
          width={1278}
          height={296}
          unoptimized
          className={imageClass}
          style={{ width: "auto" }}
        />
      </div>
    </div>
  );
}
