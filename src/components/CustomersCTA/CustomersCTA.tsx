import { ArrowRight, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";

export async function CustomersCTA() {
  const t = await getTranslations("customersCTA");

  return (
    <section className="relative py-24 lg:py-32 bg-brand-black overflow-hidden">
      {/* Orange glow band. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-72 max-w-4xl rounded-full bg-brand-orange/25 blur-[140px]"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <Reveal effect="scale">
            <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-2xl mb-8">
              <Users className="w-8 h-8 text-brand-orange" />
            </div>
          </Reveal>

          <AnimatedHeading
            effect="lines"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5"
          >
            {t("heading")}
          </AnimatedHeading>

          <Reveal effect="fade-up" stagger={0.15}>
            <p className="text-lg text-gray-400 font-extralight max-w-2xl mx-auto mb-10">{t("subheading")}</p>
            <div className="flex items-center justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-normal rounded-full hover:bg-orange-600 transition-colors glow-orange"
              >
                {t("cta")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
