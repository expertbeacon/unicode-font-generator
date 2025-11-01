import { MetadataRoute } from "next";
import { appConfig } from "@/config";
import { styleKeys, topicKeys } from "@/slugs";
import { seoConfig } from "@/config/seo";
import { generateAlternateLinks, getChangeFrequency, getPagePriority } from "@/lib/seo";

export const runtime = "edge";

/**
 * Dynamic Sitemap Generation
 * Generates comprehensive XML sitemap with all pages across all locales
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = seoConfig.baseUrl;
  const locales = appConfig.i18n.locales;
  const urls: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Homepage for all locales
  for (const locale of locales) {
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: getChangeFrequency("homepage"),
      priority: getPagePriority("homepage"),
      alternates: {
        languages: generateAlternateLinks(""),
      },
    });
  }

  // Style category pages
  for (const locale of locales) {
    for (const style of styleKeys) {
      // Skip "all" as it's the homepage
      if (style === "all") continue;

      urls.push({
        url: `${baseUrl}/${locale}/${style}`,
        lastModified: now,
        changeFrequency: getChangeFrequency("category"),
        priority: getPagePriority("category"),
        alternates: {
          languages: generateAlternateLinks(style),
        },
      });
    }
  }

  // Fonts Gallery page
  for (const locale of locales) {
    urls.push({
      url: `${baseUrl}/${locale}/fonts-gallery`,
      lastModified: now,
      changeFrequency: getChangeFrequency("category"),
      priority: 0.9, // High priority for gallery
      alternates: {
        languages: generateAlternateLinks("fonts-gallery"),
      },
    });
  }

  // Topic pages - index
  for (const locale of locales) {
    urls.push({
      url: `${baseUrl}/${locale}/topic`,
      lastModified: now,
      changeFrequency: getChangeFrequency("topic"),
      priority: getPagePriority("topic"),
      alternates: {
        languages: generateAlternateLinks("topic"),
      },
    });
  }

  // Topic detail pages
  for (const locale of locales) {
    for (const topic of topicKeys) {
      urls.push({
        url: `${baseUrl}/${locale}/topic/${topic}`,
        lastModified: now,
        changeFrequency: getChangeFrequency("topic"),
        priority: getPagePriority("topic"),
        alternates: {
          languages: generateAlternateLinks(`topic/${topic}`),
        },
      });
    }
  }

  // Sort URLs by priority (highest first) then alphabetically
  urls.sort((a, b) => {
    const priorityDiff = (b.priority || 0) - (a.priority || 0);
    if (priorityDiff !== 0) return priorityDiff;
    return a.url.localeCompare(b.url);
  });

  return urls;
}
