import { ArrowRight, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";

export async function CustomersCTA() {
  const t = await getTranslations("customersCTA");

  return (
    <section className="py-20 lg:py-24 bg-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal effect="scale">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
          </Reveal>

          <AnimatedHeading
            effect="lines"
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4"
          >
            {t("heading")}
          </AnimatedHeading>

          <Reveal effect="fade-up" stagger={0.15}>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">{t("subheading")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange font-normal rounded-xl hover:bg-gray-100 transition-colors group"
              >
                {t("cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
