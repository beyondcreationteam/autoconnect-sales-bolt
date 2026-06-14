"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";
import { gsap, useGSAP, isRTL, prefersReducedMotion } from "@/lib/gsap";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";

const salesRowKeys = [
  "customerExperience",
  "access",
  "leadResponse",
  "salesProcess",
  "discoveryConfiguration",
  "testDriveBooking",
  "inventoryVisibility",
  "vehicleReservation",
  "financingInsurance",
  "documentsESignature",
  "payments",
  "orderStatus",
  "feedbackFollowUp",
] as const;

const aftersalesRowKeys = [
  "customerExperience",
  "bookingScheduling",
  "checkInTransparency",
  "approvalsCommunication",
  "paymentInvoicing",
  "contactlessCheckInOut",
  "handoverHomeDelivery",
  "postServiceFollowUp",
  "extendedServiceCoverage",
  "engagementRetention",
] as const;

export function Comparison() {
  const t = useTranslations("comparison");
  const [activeTab, setActiveTab] = useState<"sales" | "aftersales">("sales");
  const tableRef = useRef<HTMLDivElement>(null);

  const rowKeys = activeTab === "sales" ? salesRowKeys : aftersalesRowKeys;
  const rows = rowKeys.map((key) => ({
    key,
    aspect: t(`${activeTab}.rows.${key}.aspect`),
    traditional: t(`${activeTab}.rows.${key}.traditional`),
    digital: t(`${activeTab}.rows.${key}.digital`),
  }));

  const title = t(`${activeTab}.title`);
  const subtitle = t(`${activeTab}.subtitle`);

  // Re-run when the tab changes so the new rows animate in too.
  useGSAP(
    () => {
      const rowEls = gsap.utils.toArray<HTMLElement>("[data-row]", tableRef.current);
      const digitalEls = gsap.utils.toArray<HTMLElement>("[data-digital]", tableRef.current);
      if (rowEls.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set([...rowEls, ...digitalEls], { clearProps: "all" });
        return;
      }

      const trigger = { trigger: tableRef.current, start: "top 80%" };

      gsap.from(rowEls, {
        y: 24,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: trigger,
      });

      // AutoConnect column wipes in from the inline-start edge.
      const hidden = isRTL() ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";
      gsap.from(digitalEls, {
        clipPath: hidden,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
        delay: 0.15,
        scrollTrigger: trigger,
      });
    },
    { dependencies: [activeTab], scope: tableRef, revertOnUpdate: true },
  );

  return (
    <section id="comparison" className="relative py-24 lg:py-36 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <AnimatedHeading
            effect="words"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
          <Reveal effect="fade-up">
            <p className="text-lg text-gray-400 font-extralight max-w-2xl mx-auto">{t("subheading")}</p>
          </Reveal>
        </div>

        <Reveal effect="fade-up" className="flex justify-center mb-10">
          <div className="inline-flex glass rounded-full p-1.5">
            <button
              onClick={() => setActiveTab("sales")}
              className={`px-7 py-3 rounded-full text-sm font-normal transition-all ${
                activeTab === "sales"
                  ? "bg-brand-orange text-white glow-orange"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {t("salesTab")}
            </button>
            <button
              onClick={() => setActiveTab("aftersales")}
              className={`px-7 py-3 rounded-full text-sm font-normal transition-all ${
                activeTab === "aftersales"
                  ? "bg-brand-orange text-white glow-orange"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {t("aftersalesTab")}
            </button>
          </div>
        </Reveal>

        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-normal text-white mb-2">{title}</h3>
          <p className="text-gray-400 font-extralight">{subtitle}</p>
        </div>

        <div ref={tableRef} className="glass-strong rounded-3xl overflow-hidden">
          <div className="hidden md:grid md:grid-cols-3 bg-white/5 text-white border-b border-white/10">
            <div className="p-4 font-normal">{t("tableAspect")}</div>
            <div className="p-4 font-normal text-center">{t("tableTraditional")}</div>
            <div className="p-4 font-normal text-center bg-brand-orange text-white">{t("tableDigital")}</div>
          </div>

          {rows.map((row) => (
            <div key={row.key} data-row>
              <div className="hidden md:grid md:grid-cols-3 border-b border-white/5 last:border-b-0">
                <div className="p-4 md:p-6 bg-white/[0.03] font-extralight text-white">{row.aspect}</div>
                <div className="p-4 md:p-6 flex items-center justify-center gap-2 text-gray-400 text-center">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="font-extralight">{row.traditional}</span>
                </div>
                <div
                  data-digital
                  className="p-4 md:p-6 flex items-center justify-center gap-2 bg-brand-orange/10 text-gray-100 text-center"
                >
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="font-extralight">{row.digital}</span>
                </div>
              </div>

              <div className="md:hidden flex border-b border-white/5 last:border-b-0">
                <div className="w-[35%] p-3 bg-white/[0.03] font-extralight text-white text-sm flex items-center border-e border-white/5">
                  {row.aspect}
                </div>
                <div className="w-[65%] flex flex-col">
                  <div className="p-3 flex items-start gap-2 text-gray-400 text-sm border-b border-white/5">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-normal text-gray-500 uppercase tracking-wide block mb-0.5">
                        {t("tableTraditional")}
                      </span>
                      <span className="font-extralight">{row.traditional}</span>
                    </div>
                  </div>
                  <div className="p-3 flex items-start gap-2 bg-brand-orange/10 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-normal text-brand-orange uppercase tracking-wide block mb-0.5">
                        {t("tableDigital")}
                      </span>
                      <span className="font-extralight">{row.digital}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
