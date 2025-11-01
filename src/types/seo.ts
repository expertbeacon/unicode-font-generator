import { LocaleType } from "@/config";

/**
 * SEO TypeScript Types
 */

export interface MetadataParams {
  locale: LocaleType;
  pagePath: string;
  title: string;
  description: string;
  images?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
}

export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  alternates?: {
    languages?: Record<string, string>;
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string | object;
  sameAs?: string[];
}

export interface WebSiteSchema {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  potentialAction?: object;
}

export interface BreadcrumbListSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface FAQPageSchema {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }>;
}

export interface WebApplicationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  applicationCategory: string;
  offers?: {
    "@type": string;
    price: string;
    priceCurrency: string;
  };
}
