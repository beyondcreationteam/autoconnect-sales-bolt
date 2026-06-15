import type { Metadata } from "next";
import dynamic from "next/dynamic";
import getMetadata from "@/utils/getMetadata";
import { isLocale, routing } from "@/i18n/routing";
import { Hero } from "@/components/Hero/Hero";
import { WhatIs } from "@/components/WhatIs/WhatIs";
import { Partners } from "@/components/Partners/Partners";
import { CustomersCTA } from "@/components/CustomersCTA/CustomersCTA";
import { ContactUs } from "@/components/ContactUs/ContactUs";

// Below-the-fold, client-side (GSAP) sections: split into their own hydration
// chunks so they don't bloat the JS the browser must parse before first paint.
const Features = dynamic(() =>
  import("@/components/Features/Features").then((m) => m.Features),
);
const PlatformLayers = dynamic(() =>
  import("@/components/Components/PlatformLayers").then((m) => m.PlatformLayers),
);
const Lifecycle = dynamic(() =>
  import("@/components/Lifecycle/Lifecycle").then((m) => m.Lifecycle),
);
const Comparison = dynamic(() =>
  import("@/components/Comparison/Comparison").then((m) => m.Comparison),
);
const Stats = dynamic(() =>
  import("@/components/Stats/Stats").then((m) => m.Stats),
);

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
