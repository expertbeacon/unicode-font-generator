import { seoConfig } from "@/config/seo";
import {
  BreadcrumbItem,
  BreadcrumbListSchema,
  FAQItem,
  FAQPageSchema,
  OrganizationSchema,
  WebApplicationSchema,
  WebSiteSchema,
} from "@/types/seo";

/**
 * Structured Data (Schema.org) Helper Functions
 * Generate JSON-LD structured data for SEO
 */

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(searchUrl?: string): WebSiteSchema {
  const schema: WebSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: seoConfig.baseUrl,
    name: seoConfig.siteName,
  };

  if (searchUrl) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchUrl,
      },
      "query-input": "required name=search_term_string",
    };
  }

  return schema;
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: {
      "@type": "ImageObject",
      url: seoConfig.organization.logo,
      width: 512,
      height: 512,
    },
    sameAs: [...seoConfig.organization.sameAs],
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const element: any = {
        "@type": "ListItem",
        position: item.position,
        name: item.name,
      };

      // Don't add 'item' for the current page (last item)
      if (index < items.length - 1) {
        element.item = item.url;
      }

      return element;
    }),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebApplication schema
 */
export function generateWebApplicationSchema(
  name: string,
  url: string,
  description?: string
): WebApplicationSchema {
  const schema: WebApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url,
    applicationCategory: "UtilityApplication",
  };

  if (description) {
    (schema as any).description = description;
  }

  schema.offers = {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  };

  return schema;
}

/**
 * Generate Article schema (for blog posts)
 */
export function generateArticleSchema(params: {
  headline: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  description?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      "@type": "Person",
      name: params.author || seoConfig.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: seoConfig.organization.logo,
      },
    },
    description: params.description,
    image: params.image ? [params.image] : undefined,
  };
}

/**
 * Generate HowTo schema (for tutorials)
 */
export function generateHowToSchema(params: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    totalTime: params.totalTime,
    step: params.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

/**
 * Generate ItemList schema (for lists of fonts, categories, etc.)
 */
export function generateItemListSchema(params: {
  name: string;
  description?: string;
  items: Array<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: params.name,
    description: params.description,
    itemListElement: params.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/**
 * Sanitize text for JSON-LD (remove HTML, escape quotes)
 */
export function sanitizeForJsonLd(text: string): string {
  return text
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\s+/g, " ") // Normalize whitespace
    .replace(/"/g, '\\"') // Escape quotes
    .trim();
}
