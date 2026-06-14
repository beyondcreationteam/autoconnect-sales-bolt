"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/utils/cn";
import { useLoaderReady } from "@/hooks/useLoaderReady";
import { MONOGRAM_PATHS, MONOGRAM_VIEWBOX } from "./monogramPath";

const MIN_VISIBLE_MS = 2200;

export function FuturisticLoader() {
  const t = useTranslations("loader");
  const { setLoaderComplete } = useLoaderReady();
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!mounted) return;

      const paths = gsap.utils.toArray<SVGPathElement>("[data-loader-path]", root.current);
      const logo = root.current?.querySelector<HTMLElement>("[data-loader-logo]");
      const scan = root.current?.querySelector<HTMLElement>("[data-loader-scan]");
      const progress = root.current?.querySelector<HTMLElement>("[data-loader-progress]");
      const glow = root.current?.querySelector<HTMLElement>("[data-loader-glow]");
      const hud = gsap.utils.toArray<HTMLElement>("[data-loader-hud]", root.current);

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });

      if (prefersReducedMotion()) {
        gsap.set(paths, { strokeDashoffset: 0 });
        if (logo) gsap.set(logo, { opacity: 1, scale: 1 });
        if (progress) gsap.set(progress, { scaleX: 1 });
        return;
      }

      if (!logo || !scan || !progress || !glow) return;

      gsap.set(logo, { opacity: 0, scale: 0.92 });
      gsap.set(scan, { yPercent: -120, opacity: 0 });
      gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(hud, { opacity: 0, scale: 0.96 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(hud, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08 }, 0)
        .to(
          paths,
          {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut",
          },
          0.15,
        )
        .to(
          glow,
          {
            opacity: 0.55,
            scale: 1.08,
            duration: 1.4,
            ease: "sine.inOut",
            repeat: 1,
            yoyo: true,
          },
          0.4,
        )
        .to(logo, { opacity: 1, scale: 1, duration: 0.9 }, 1.1)
        .fromTo(
          scan,
          { yPercent: -120, opacity: 0 },
          { yPercent: 120, opacity: 0.85, duration: 1.1, ease: "power2.inOut" },
          1.25,
        )
        .to(progress, { scaleX: 1, duration: 1.6, ease: "power1.inOut" }, 0.35);
    },
    { scope: root, dependencies: [mounted] },
  );

  useEffect(() => {
    if (!mounted) return;

    let cancelled = false;

    const waitForLoad = () =>
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") {
          resolve();
          return;
        }
        window.addEventListener("load", () => resolve(), { once: true });
      });

    const waitForMinDuration = () =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, MIN_VISIBLE_MS);
      });

    void Promise.all([waitForLoad(), waitForMinDuration()]).then(() => {
      if (cancelled) return;

      const finish = () => {
        setVisible(false);
        setLoaderComplete();
      };

      if (prefersReducedMotion()) {
        finish();
        return;
      }

      const node = root.current;
      if (!node) {
        finish();
        return;
      }

      gsap.to(node, {
        opacity: 0,
        duration: 0.55,
        ease: "power2.inOut",
        onComplete: finish,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [mounted, setLoaderComplete]);

  if (!mounted || !visible) return null;

  return (
    <div
      ref={root}
      role="status"
      aria-live="polite"
      aria-label={t("ariaLabel")}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-brand-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,93,4,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,4,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at center, black 20%, transparent 72%)",
        }}
      />

      <div
        data-loader-glow
        aria-hidden
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-brand-orange/20 blur-[100px] opacity-0"
      />

      <div className="relative flex w-full max-w-3xl flex-col items-center px-6">
        <svg
          aria-hidden
          viewBox={MONOGRAM_VIEWBOX}
          preserveAspectRatio="xMidYMid meet"
          className="pointer-events-none absolute inset-x-0 top-1/2 h-[min(52vh,420px)] w-full -translate-y-1/2 text-brand-orange/35"
        >
          {MONOGRAM_PATHS.map((d, index) => (
            <path
              key={index}
              data-loader-path
              d={d}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div data-loader-logo className="relative z-10 will-change-transform">
          <div
            data-loader-scan
            aria-hidden
            className="pointer-events-none absolute inset-x-[-12%] top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange-soft to-transparent opacity-0 blur-[1px]"
          />
          <Image
            src="/autoconnect-logo.png"
            alt=""
            width={280}
            height={56}
            priority
            className="h-auto w-[min(72vw,280px)] drop-shadow-[0_0_28px_rgba(232,93,4,0.45)]"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 px-8 sm:bottom-14">
        <div className="mx-auto flex max-w-md flex-col gap-3">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
            {t("status")}
          </p>
          <div className="h-px overflow-hidden rounded-full bg-white/10">
            <div
              data-loader-progress
              className="h-full w-full origin-left bg-gradient-to-r from-brand-orange via-brand-orange-soft to-orange-300"
            />
          </div>
        </div>
      </div>

      {(["top-8 start-8", "top-8 end-8", "bottom-24 start-8", "bottom-24 end-8"] as const).map(
        (position, index) => (
          <div
            key={position}
            data-loader-hud
            aria-hidden
            className={cn(
              "pointer-events-none absolute h-8 w-8 border-brand-orange/40 opacity-0",
              position,
              index === 0 && "border-s-2 border-t-2",
              index === 1 && "border-e-2 border-t-2",
              index === 2 && "border-s-2 border-b-2",
              index === 3 && "border-e-2 border-b-2",
            )}
          />
        ),
      )}
    </div>
  );
}
