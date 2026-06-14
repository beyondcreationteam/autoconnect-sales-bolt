import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AnimatedHeading } from "@/components/common/AnimatedHeading";
import { Reveal } from "@/components/common/Reveal";

const partners = [
  { name: "Hyundai", logo: "/logos/hyundai.webp" },
  { name: "Ford", logo: "/logos/ford.png" },
  { name: "Lexus", logo: "/logos/lexus.png" },
  { name: "Lincoln", logo: "/logos/lincoln.png" },
  { name: "Opel", logo: "/logos/opel.png" },
  { name: "Peugeot", logo: "/logos/peugeot.png" },
  { name: "MG", logo: "/logos/mg.png" },
  { name: "Chevrolet", logo: "/logos/chevrolet.png" },
];

export async function Partners() {
  const t = await getTranslations("partners");

  return (
    <section id="partners" className="py-16 lg:py-24 bg-brand-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <AnimatedHeading
            effect="words"
            className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2"
          >
            {t("headingPrefix")} <span className="text-brand-orange">{t("headingHighlight")}</span>
          </AnimatedHeading>
        </div>

        <Reveal effect="scale" stagger={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-6 glass rounded-2xl transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative h-12 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
