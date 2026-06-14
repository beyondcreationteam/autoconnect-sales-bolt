import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail } from "lucide-react";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "./ContactForm";

export async function ContactUs() {
  const t = await getTranslations("contactUs");

  const cairoPhoneHref = `tel:${t("offices.cairo.phone").replace(/(?!^\+)\D/g, "")}`;
  const dubaiPhoneHref = `tel:${t("offices.dubai.phone").replace(/(?!^\+)\D/g, "")}`;

  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedHeading
            effect="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black mb-4"
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal effect="fade-right">
            <ContactForm />
          </Reveal>

          <Reveal effect="fade-left" stagger={0.15} className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-normal text-brand-black mb-6">{t("offices.cairo.title")}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{t("offices.cairo.address")}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a href={cairoPhoneHref} className="text-gray-600 hover:text-brand-orange transition-colors">
                    {t("offices.cairo.phone")}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-normal text-brand-black mb-6">{t("offices.dubai.title")}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{t("offices.dubai.address")}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a href={dubaiPhoneHref} className="text-gray-600 hover:text-brand-orange transition-colors">
                    {t("offices.dubai.phone")}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-brand-black rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <a href={`mailto:${t("offices.email")}`} className="text-white hover:text-brand-orange transition-colors">
                    {t("offices.email")}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
