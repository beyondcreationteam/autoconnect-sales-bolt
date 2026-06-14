"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const rowKeys = activeTab === "sales" ? salesRowKeys : aftersalesRowKeys;
  const rows = rowKeys.map((key) => ({
    key,
    aspect: t(`${activeTab}.rows.${key}.aspect`),
    traditional: t(`${activeTab}.rows.${key}.traditional`),
    digital: t(`${activeTab}.rows.${key}.digital`),
  }));

  const title = t(`${activeTab}.title`);
  const subtitle = t(`${activeTab}.subtitle`);

  return (
    <section id="comparison" className="py-20 lg:py-32 bg-brand-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("subheading")}
          </p>
        </div>

        <div
          className={`flex justify-center mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab("sales")}
              className={`px-6 py-3 rounded-lg font-extralight transition-all ${
                activeTab === "sales"
                  ? "bg-brand-orange text-white"
                  : "text-gray-600 hover:text-brand-orange"
              }`}
            >
              {t("salesTab")}
            </button>
            <button
              onClick={() => setActiveTab("aftersales")}
              className={`px-6 py-3 rounded-lg font-extralight transition-all ${
                activeTab === "aftersales"
                  ? "bg-brand-orange text-white"
                  : "text-gray-600 hover:text-brand-orange"
              }`}
            >
              {t("aftersalesTab")}
            </button>
          </div>
        </div>

        <div
          className={`text-center mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-normal text-brand-black mb-2">{title}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="hidden md:grid md:grid-cols-3 bg-brand-black text-white">
            <div className="p-4 font-normal">{t("tableAspect")}</div>
            <div className="p-4 font-normal text-center">{t("tableTraditional")}</div>
            <div className="p-4 font-normal text-center bg-brand-orange">{t("tableDigital")}</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={row.key}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 5) * 50}ms` }}
            >
              <div className="hidden md:grid md:grid-cols-3 border-b border-gray-100 last:border-b-0">
                <div className="p-4 md:p-6 bg-gray-50 font-extralight text-brand-black">
                  {row.aspect}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center gap-2 text-gray-600 text-center">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{row.traditional}</span>
                </div>
                <div
                  className={`p-4 md:p-6 flex items-center justify-center gap-2 bg-brand-orange/5 text-gray-800 text-center transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 50}ms` }}
                >
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="font-extralight">{row.digital}</span>
                </div>
              </div>

              <div className="md:hidden flex border-b border-gray-100 last:border-b-0">
                <div className="w-[35%] p-3 bg-gray-50 font-extralight text-brand-black text-sm flex items-center border-e border-gray-100">
                  {row.aspect}
                </div>
                <div className="w-[65%] flex flex-col">
                  <div className="p-3 flex items-start gap-2 text-gray-600 text-sm border-b border-gray-50">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-normal text-gray-400 uppercase tracking-wide block mb-0.5">
                        {t("tableTraditional")}
                      </span>
                      <span>{row.traditional}</span>
                    </div>
                  </div>
                  <div className="p-3 flex items-start gap-2 bg-brand-orange/5 text-gray-800 text-sm">
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
