import { appConfig, LocaleType } from "@/config";
import { seoConfig } from "@/config/seo";

/**
 * SEO Utility Functions
 * Helper functions for SEO operations
 */

/**
 * Generate canonical URL for a page
 */
export function generateCanonicalUrl(locale: LocaleType, path: string = ""): string {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Remove trailing slash
  const finalPath = cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;

  return `${seoConfig.baseUrl}/${locale}${finalPath ? `/${finalPath}` : ""}`;
}

/**
 * Generate alternate links for all locales
 */
export function generateAlternateLinks(path: string = ""): Record<string, string> {
  const alternates: Record<string, string> = {};

  // Add all locales
  appConfig.i18n.locales.forEach((locale) => {
    alternates[locale] = generateCanonicalUrl(locale, path);
  });

  // Add x-default pointing to English
  alternates["x-default"] = generateCanonicalUrl(appConfig.i18n.defaultLocale, path);

  return alternates;
}

/**
 * Get full URL for a resource (images, etc.)
 */
export function getFullUrl(resourcePath: string): string {
  // If already absolute URL, return as-is
  if (resourcePath.startsWith("http://") || resourcePath.startsWith("https://")) {
    return resourcePath;
  }

  // Remove leading slash if present
  const cleanPath = resourcePath.startsWith("/") ? resourcePath.slice(1) : resourcePath;

  return `${seoConfig.baseUrl}/${cleanPath}`;
}

/**
 * Format page title with brand name
 */
export function formatPageTitle(pageTitle: string, includeBrand: boolean = true): string {
  if (!includeBrand) {
    return pageTitle;
  }

  // If title already includes brand, return as-is
  if (pageTitle.includes(seoConfig.siteName)) {
    return pageTitle;
  }

  return `${pageTitle} | ${seoConfig.siteName}`;
}

/**
 * Truncate description to optimal length
 */
export function truncateDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) {
    return description;
  }

  // Find last space before maxLength
  const truncated = description.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace) + "...";
  }

  return truncated + "...";
}

/**
 * Sanitize text for use in metadata (remove HTML, extra whitespace)
 */
export function sanitizeMetadataText(text: string): string {
  return text
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\s+/g, " ") // Replace multiple whitespace with single space
    .trim();
}

/**
 * Get locale code for Open Graph (format: en_US, de_DE)
 */
export function getOgLocale(locale: LocaleType): string {
  // Special case for German
  if (locale === "de_DE") {
    return "de_DE";
  }

  // For most locales, format as language_COUNTRY
  const mapping: Record<string, string> = {
    en: "en_US",
    es: "es_ES",
    fr: "fr_FR",
    it: "it_IT",
    nl: "nl_NL",
    pl: "pl_PL",
    pt: "pt_PT",
    sv: "sv_SE",
    tr: "tr_TR",
    ru: "ru_RU",
    zh: "zh_CN",
    ja: "ja_JP",
    ko: "ko_KR",
  };

  return mapping[locale] || "en_US";
}

/**
 * Get language code (ISO 639-1) from locale
 */
export function getLanguageCode(locale: LocaleType): string {
  if (locale === "de_DE") {
    return "de";
  }
  return locale;
}

/**
 * Check if URL is internal
 */
export function isInternalUrl(url: string): boolean {
  if (url.startsWith("/")) {
    return true;
  }

  if (url.startsWith(seoConfig.baseUrl)) {
    return true;
  }

  return false;
}

/**
 * Get robots meta content based on page type
 */
export function getRobotsContent(noindex: boolean = false): string {
  if (noindex) {
    return "noindex, nofollow";
  }

  return "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
}

/**
 * Generate slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Get page type for sitemap priority
 */
export function getPagePriority(
  pageType: "homepage" | "category" | "topic" | "detail"
): number {
  return seoConfig.sitemap.priority[pageType];
}

/**
 * Get change frequency for sitemap
 */
export function getChangeFrequency(
  pageType: "homepage" | "category" | "topic" | "detail"
): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" {
  return seoConfig.sitemap.changefreq[pageType] as any;
}
