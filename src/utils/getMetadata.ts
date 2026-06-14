import type { Metadata } from "next";
import { headers } from "next/headers";
import type { Locale } from "@/i18n/routing";

interface LocalizedText {
  en: string;
  ar: string;
}

interface GetMetadataOverrides {
  title?: LocalizedText;
  description?: LocalizedText;
}

const FALLBACK: LocalizedText = {
  en: "AutoConnect Digital CX Platform",
  ar: "منصة أوتوكونكت لتجربة العملاء الرقمية",
};

const FALLBACK_DESCRIPTION: LocalizedText = {
  en: "AutoConnect by Parallel: the CX platform connecting every moment in the automotive customer lifecycle - from Sales to Loyalty, without Rip & Replace.",
  ar: "أوتوكونكت من Parallel: منصة تجربة العملاء التي تربط كل لحظة في دورة حياة العميل في قطاع السيارات - من المبيعات إلى الولاء، دون استبدال أنظمتك الحالية.",
};

const LOCALE_OG: Record<Locale, string> = {
  en: "en_US",
  ar: "ar_AR",
};

export default async function getMetadata(
  pageRoute: string,
  locale: Locale,
  overrides?: GetMetadataOverrides,
): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${proto}://${host}`;

  const title = (overrides?.title ?? FALLBACK)[locale];
  const description = (
    overrides?.description ?? FALLBACK_DESCRIPTION
  )[locale];
  const normalizedRoute = pageRoute === "/" ? "" : pageRoute;
  const canonical = `${baseUrl}/${locale}${normalizedRoute}`;
  const otherLocale: Locale = locale === "en" ? "ar" : "en";

  const isProd = process.env.NEXT_PUBLIC_PRODUCTION_ENV === "true";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${FALLBACK[locale]}`,
    },
    description,
    applicationName: "AutoConnect",
    keywords: [
      "AutoConnect",
      "Parallel",
      "Customer Experience Platform",
      "Automotive CX",
      "Automotive CRM",
      "CRM",
      "CX",
      "CX Platform",
      "Automotive Customer Experience",
      "Customer Lifecycle Management",
      "Sales to Loyalty",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "AutoConnect",
      locale: LOCALE_OG[locale],
      alternateLocale: [LOCALE_OG[otherLocale]],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en${normalizedRoute}`,
        ar: `${baseUrl}/ar${normalizedRoute}`,
        "x-default": `${baseUrl}/en${normalizedRoute}`,
      },
    },
    robots: isProd
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
