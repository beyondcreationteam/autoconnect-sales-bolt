import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LogoInline } from "@/components/common/Logo";

export async function Footer() {
  const t = await getTranslations("footer");

  const footerLinks = [
    { label: t("links.whatIs"), href: "#what-is" },
    { label: t("links.features"), href: "#features" },
    { label: t("links.lifecycle"), href: "#lifecycle" },
    { label: t("links.comparison"), href: "#comparison" },
    { label: t("links.partners"), href: "#partners" },
    { label: t("links.contact"), href: "#contact" },
  ];

  const cairoPhone = t("offices.cairo.phone");
  const dubaiPhone = t("offices.dubai.phone");
  const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <LogoInline />
            </div>
            <p className="font-extralight text-gray-400 text-sm mb-6 max-w-sm">
              {t("tagline")}
            </p>
            <p className="text-brand-orange text-sm font-extralight mb-6">
              {t("subTagline")}
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-brand-orange text-white text-sm font-normal rounded-lg hover:bg-orange-600 transition-colors"
            >
              {t("requestDemo")}
            </a>
          </div>

          <div>
            <h4 className="font-normal mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-normal mb-4">{t("getInTouch")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                >
                  {t("requestADemo")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t("email")}`}
                  className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-normal mb-4">{t("offices.cairo.title")}</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="font-extralight text-gray-400 text-sm">
                    {t("offices.cairo.address")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <a
                    href={toTelHref(cairoPhone)}
                    className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    {cairoPhone}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-normal mb-4">{t("offices.dubai.title")}</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="font-extralight text-gray-400 text-sm">
                    {t("offices.dubai.address")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <a
                    href={toTelHref(dubaiPhone)}
                    className="font-extralight text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    {dubaiPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-extralight text-gray-400 text-sm">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-6">
              <Image src="/parallel.png" alt="parallel" width={100} height={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
