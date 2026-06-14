import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/common/AnimateOnScroll";

const FEATURE_KEYS = [
  "productShopping",
  "financing",
  "afterSales",
  "workflow",
  "orderManagement",
  "customerProfile",
  "apiExtensibility",
] as const;

export async function Features() {
  const t = await getTranslations("features");

  return (
    <section id="features" className="py-20 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll effect="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4">
              {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll effect="fade-up" style={{ transitionDelay: "100ms" }}>
            <p className="text-lg font-extralight text-gray-600 max-w-2xl mx-auto">{t("subheading")}</p>
          </AnimateOnScroll>
        </div>

        <div className="space-y-6">
          {FEATURE_KEYS.map((key, index) => {
            const isEven = index % 2 === 0;
            const bullets = t.raw(`items.${key}.bullets`) as string[];

            return (
              <AnimateOnScroll
                key={key}
                effect={isEven ? "fade-right" : "fade-left"}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-[30%] flex items-center justify-center py-2 lg:py-0">
                      <span className="text-5xl lg:text-6xl font-normal text-brand-orange/30">
                        {t(`items.${key}.number`)}
                      </span>
                    </div>

                    <div className="lg:w-[70%]">
                      <h3 className="text-lg lg:text-xl font-normal text-brand-black mb-2 tracking-wide">
                        {t(`items.${key}.title`)}
                      </h3>
                      <p className="font-extralight text-gray-600 mb-4">{t(`items.${key}.subtitle`)}</p>
                      <ul className="space-y-3">
                        {bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-extralight text-gray-600">
                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
