"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { LogoInline } from "@/components/common/Logo";
import { useGSAP, ScrollTrigger, ScrollSmoother } from "@/lib/gsap";

export function Header() {
  const t = useTranslations("header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t("nav.whatIs"), href: "#what-is" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.platform"), href: "#components" },
    { label: t("nav.lifecycle"), href: "#lifecycle" },
    { label: t("nav.comparison"), href: "#comparison" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  // Stays in sync with ScrollSmoother's position instead of the raw scroll event.
  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 50,
      end: "max",
      onToggle: (self) => setIsScrolled(self.isActive),
    });
    return () => st.kill();
  });

  const scrollTo = (target: string | number) => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top 80px");
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => scrollTo(0)} className="flex items-center">
            <LogoInline />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-extralight text-gray-300 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2.5 bg-brand-orange text-white text-sm font-normal rounded-full hover:bg-orange-600 transition-colors"
            >
              {t("requestDemo")}
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-brand-black/95 backdrop-blur-md border-t border-white/10">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block px-4 py-3 text-start text-gray-300 hover:text-brand-orange hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="block w-full text-center px-5 py-3 bg-brand-orange text-white font-normal rounded-full hover:bg-orange-600 transition-colors"
                >
                  {t("requestDemo")}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
