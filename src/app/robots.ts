import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://autoconnect.digital";
  const isProd = process.env.NEXT_PUBLIC_PRODUCTION_ENV === "true";

  return {
    rules: {
      userAgent: "*",
      allow: isProd ? "/" : undefined,
      disallow: isProd ? "/api/" : "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
