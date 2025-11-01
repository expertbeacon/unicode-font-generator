import type { MetadataRoute } from "next";
import { appConfig } from "@/config";
import { seoConfig } from "@/config/seo";

export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
  const sitemaps: string[] = [];

  // Add sitemap for each locale
  appConfig.i18n.locales.forEach((locale) => {
    sitemaps.push(`${seoConfig.baseUrl}/${locale}/sitemap.xml`);
  });

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/static/"],
    },
    sitemap: sitemaps,
  };
}
