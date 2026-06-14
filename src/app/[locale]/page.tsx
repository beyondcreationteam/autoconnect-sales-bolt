import type { Metadata } from "next";
import getMetadata from "@/utils/getMetadata";
import { isLocale, routing } from "@/i18n/routing";
import { Hero } from "@/components/Hero/Hero";
import { WhatIs } from "@/components/WhatIs/WhatIs";
import { Features } from "@/components/Features/Features";
import { PlatformLayers } from "@/components/Components/PlatformLayers";
import { Lifecycle } from "@/components/Lifecycle/Lifecycle";
import { Comparison } from "@/components/Comparison/Comparison";
import { Stats } from "@/components/Stats/Stats";
import { Partners } from "@/components/Partners/Partners";
import { CustomersCTA } from "@/components/CustomersCTA/CustomersCTA";
import { ContactUs } from "@/components/ContactUs/ContactUs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : routing.defaultLocale;
  return getMetadata("/", safeLocale);
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIs />
      <Features />
      <PlatformLayers />
      <Lifecycle />
      <Comparison />
      <Stats />
      <Partners />
      <CustomersCTA />
      <ContactUs />
    </>
  );
}
