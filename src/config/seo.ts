import { appConfig } from "@/config";

/**
 * SEO Configuration
 * Centralized SEO constants and settings
 */

export const seoConfig = {
  // Domain settings
  baseUrl: `https://${appConfig.appDomain}`,
  domain: appConfig.appDomain,
  siteName: appConfig.appName,

  // Default metadata
  defaultTitle: "Font Generator - Create Stylish Text & Fancy Fonts",
  defaultDescription:
    "Transform your text with our free font generator. Create bold, italic, cursive, and fancy text styles. Perfect for social media, bios, and creative projects. Try 40+ unique Unicode fonts!",

  // Default images
  defaultOgImage: "/og-image.png",
  defaultTwitterImage: "/twitter-image.png",
  logoUrl: "/logo.png",

  // Social media
  social: {
    twitter: "@fontgenerator",
    facebook: "fontgenerator",
  },

  // Sitemap settings
  sitemap: {
    changefreq: {
      homepage: "weekly",
      category: "weekly",
      topic: "monthly",
      detail: "monthly",
    },
    priority: {
      homepage: 1.0,
      category: 0.8,
      topic: 0.7,
      detail: 0.6,
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Analytics
  googleAnalyticsId: appConfig.gaId,

  // JSON-LD Organization
  organization: {
    name: appConfig.appName,
    url: `https://${appConfig.appDomain}`,
    logo: `https://${appConfig.appDomain}/logo.png`,
    sameAs: [
      "https://twitter.com/fontgenerator",
      "https://www.facebook.com/fontgenerator",
    ],
  },
} as const;

export type SeoConfig = typeof seoConfig;
