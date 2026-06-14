import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden"
      style={{ background: "url(/bg.png) center no-repeat", backgroundColor: "black" }}
    >
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40 w-full">
        <div>
          <p className="animate-fade-in text-brand-orange font-normal tracking-[0.2em] text-sm lg:text-base mb-8">
            {t("tagline")}
          </p>

          <h1 className="animate-fade-in [animation-delay:100ms] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-normal leading-[1.15] mb-8">
            {t("headlineLine1")}
            <br />
            {t("headlineLine2")}
          </h1>

          <p className="animate-fade-in [animation-delay:200ms] text-base sm:text-lg text-gray-400 font-extralight mb-0">
            {t("subheadlineLine1")}
            <br />
            {t("subheadlineLine2")}
          </p>
        </div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-12 pb-16 max-w-7xl mx-auto w-full">
        <p className="animate-fade-in [animation-delay:400ms] text-sm font-extralight">
          <span className="text-white">{t("trustedByLine1")}</span>
          <br />
          <span className="text-brand-orange">{t("trustedByLine2")}</span>
        </p>
      </div>

      <a
        href="#what-is"
        className="animate-fade-in [animation-delay:700ms] absolute bottom-8 start-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
