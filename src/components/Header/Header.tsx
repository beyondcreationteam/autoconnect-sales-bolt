"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { LogoInline } from "@/components/common/Logo";
import { GlassButton } from "@/components/common/GlassButton";
import { gsap, useGSAP, ScrollTrigger, ScrollSmoother, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/utils/cn";
import type { Locale } from "@/i18n/routing";

const NAV_LINKS = [
  { key: "whatIs", href: "#what-is" },
  { key: "features", href: "#features" },
  { key: "platform", href: "#components" },
  { key: "lifecycle", href: "#lifecycle" },
  { key: "comparison", href: "#comparison" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale() as Locale;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(NAV_LINKS[0].href.slice(1));

  const headerRef = useRef<HTMLElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const navLinks = NAV_LINKS.map((link, index) => ({
    ...link,
    index: String(index + 1).padStart(2, "0"),
    label: t(`nav.${link.key}`),
    sectionId: link.href.slice(1),
  }));

  const alternateLocale: Locale = locale === "en" ? "ar" : "en";

  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 50,
      end: "max",
      onToggle: (self) => setIsScrolled(self.isActive),
    });

    const updateActiveSection = () => {
      const offset = 120;
      let current = NAV_LINKS[0].href.slice(1);

      for (const link of NAV_LINKS) {
        const el = document.querySelector<HTMLElement>(link.href);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = link.href.slice(1);
        }
      }

      setActiveSection(current);
    };

    const spy = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: updateActiveSection,
      onRefresh: updateActiveSection,
    });
    updateActiveSection();

    return () => {
      st.kill();
      spy.kill();
    };
  });

  useGSAP(
    () => {
      const scan = scanLineRef.current;
      if (!scan || prefersReducedMotion()) return;

      const tween = gsap.fromTo(
        scan,
        { xPercent: -120, opacity: 0 },
        {
          xPercent: 120,
          opacity: isScrolled ? 0.85 : 0.35,
          duration: 2.8,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 1.6,
        },
      );

      return () => tween.kill();
    },
    { dependencies: [isScrolled] },
  );

  useGSAP(
    () => {
      const menu = mobileMenuRef.current;
      const items = mobileNavRef.current?.querySelectorAll<HTMLElement>("[data-mobile-nav-item]");
      if (!menu || !items?.length) return;

      if (prefersReducedMotion()) {
        gsap.set(menu, { opacity: isMobileMenuOpen ? 1 : 0, pointerEvents: isMobileMenuOpen ? "auto" : "none" });
        gsap.set(items, { opacity: isMobileMenuOpen ? 1 : 0, y: 0 });
        return;
      }

      if (isMobileMenuOpen) {
        gsap.set(menu, { pointerEvents: "auto" });
        gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: "power3.out", delay: 0.08 },
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => gsap.set(menu, { pointerEvents: "none" }),
        });
      }
    },
    { dependencies: [isMobileMenuOpen] },
  );

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (target: string | number) => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top 88px");
    } else if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const scrollToSection = (href: string) => {
    scrollTo(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative border-b transition-all duration-500",
          isScrolled
            ? "glass-strong border-white/10 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.9)]"
            : "border-white/[0.06] bg-brand-black/50 backdrop-blur-md",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,93,4,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,4,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />

        <div
          ref={scanLineRef}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-orange-soft to-transparent opacity-0"
        />

        <div className="relative mx-auto grid h-16 w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8 lg:h-[4.75rem] lg:gap-8 lg:px-12">
          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="group flex shrink-0 items-center justify-self-start transition-transform duration-300 hover:scale-[1.02]"
            aria-label={t("homeAriaLabel")}
          >
            <LogoInline
              size="header"
              className="transition-[filter] duration-300 group-hover:drop-shadow-[0_0_18px_rgba(232,93,4,0.35)]"
            />
          </button>

          <nav
            className="hidden min-w-0 justify-self-center xl:flex xl:items-center xl:justify-center"
            aria-label={t("navAriaLabel")}
          >
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <li key={link.href} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className={cn(
                        "group relative whitespace-nowrap rounded-md px-2 py-2 transition-colors duration-300 xl:px-3",
                        isActive ? "text-brand-orange" : "text-white/50 hover:text-white",
                      )}
                    >
                      <span className="flex items-center gap-1.5 xl:gap-2">
                        <span
                          className={cn(
                            "hidden font-mono text-[9px] tracking-[0.22em] xl:inline",
                            isActive ? "text-brand-orange/75" : "text-white/25 group-hover:text-brand-orange/55",
                          )}
                        >
                          {link.index}
                        </span>
                        <span className="text-[11px] font-extralight tracking-wide xl:text-xs">
                          {link.label}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent transition-opacity duration-300",
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center justify-self-end gap-2 sm:gap-3">
            <div
              className="hidden items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 sm:flex"
              role="group"
              aria-label={t("localeSwitch.ariaLabel")}
            >
              {(["en", "ar"] as const).map((code) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className={cn(
                    "rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                    locale === code
                      ? "bg-brand-orange/15 text-brand-orange"
                      : "text-white/45 hover:text-white",
                  )}
                  aria-current={locale === code ? "page" : undefined}
                >
                  {code}
                </Link>
              ))}
            </div>

            <GlassButton
              type="button"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="hidden shrink-0 sm:inline-flex lg:px-5"
            >
              <span className="whitespace-nowrap">{t("requestDemo")}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
            </GlassButton>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-brand-orange/40 hover:bg-brand-orange/10 xl:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              <span className="relative h-3.5 w-4">
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-px bg-white transition-all duration-300",
                    isMobileMenuOpen && "top-1/2 -translate-y-1/2 rotate-45 bg-brand-orange",
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-brand-orange transition-all duration-300",
                    isMobileMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px bg-white transition-all duration-300",
                    isMobileMenuOpen && "bottom-1/2 translate-y-1/2 -rotate-45 bg-brand-orange",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        ref={mobileMenuRef}
        className={cn(
          "pointer-events-none fixed inset-0 z-40 opacity-0 xl:hidden",
          isMobileMenuOpen && "pointer-events-auto",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden
        />

        <div className="relative flex h-full flex-col px-6 pb-10 pt-24 sm:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-20 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"
          />

          <nav ref={mobileNavRef} className="flex flex-1 flex-col justify-center gap-2" aria-label={t("navAriaLabel")}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.href}
                  type="button"
                  data-mobile-nav-item
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "group flex items-baseline gap-4 rounded-2xl border border-transparent px-4 py-4 text-start transition-colors hover:border-white/10 hover:bg-white/[0.03]",
                    isActive && "border-brand-orange/25 bg-brand-orange/[0.06]",
                  )}
                >
                  <span className="font-mono text-sm tracking-[0.25em] text-brand-orange/70">{link.index}</span>
                  <span
                    className={cn(
                      "font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl",
                      isActive ? "text-brand-orange" : "text-white group-hover:text-brand-orange-soft",
                    )}
                  >
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <div data-mobile-nav-item className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8">
            <div
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
              role="group"
              aria-label={t("localeSwitch.ariaLabel")}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                {t("localeSwitch.label")}
              </span>
              <div className="flex items-center gap-1 rounded-full border border-white/10 p-0.5">
                {(["en", "ar"] as const).map((code) => (
                  <Link
                    key={code}
                    href={`/${code}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                      locale === code
                        ? "bg-brand-orange/15 text-brand-orange"
                        : "text-white/45 hover:text-white",
                    )}
                    aria-current={locale === code ? "page" : undefined}
                  >
                    {code}
                  </Link>
                ))}
              </div>
            </div>

            <GlassButton
              type="button"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="w-full"
            >
              {t("requestDemo")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </GlassButton>

            <Link
              href={`/${alternateLocale}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 transition-colors hover:text-brand-orange"
            >
              {t("localeSwitch.switchTo", { locale: alternateLocale.toUpperCase() })}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
