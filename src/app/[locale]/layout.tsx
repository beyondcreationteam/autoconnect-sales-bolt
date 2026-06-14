import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/common/Providers";
import { SmoothScroller } from "@/components/common/SmoothScroller";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={inter.variable}>
      <body className="min-h-screen">
        <NextIntlClientProvider>
          <Providers>
            <Header />
            <SmoothScroller>
              <main>{children}</main>
              <Footer />
            </SmoothScroller>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
