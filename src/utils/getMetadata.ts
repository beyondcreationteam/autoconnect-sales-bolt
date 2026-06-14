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

export default async function getMetadata(
  pageRoute: string,
  locale: Locale,
  overrides?: GetMetadataOverrides,
): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${proto}://${host}`;

  const title = (overrides?.title ?? FALLBACK)[locale];
  const description = (overrides?.description ?? FALLBACK)[locale];
  const ogImage = `${baseUrl}/autoconnect-logo.png`;
  const canonical = `${baseUrl}/${locale}${pageRoute}`;

  const isProd = process.env.NEXT_PUBLIC_PRODUCTION_ENV === "true";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImage],
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical,
    },
    robots: isProd ? undefined : { index: false, follow: false },
  };
}
