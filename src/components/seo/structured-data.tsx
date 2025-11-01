import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
}

interface StructuredDataProps {
  type: "FAQPage" | "HowTo" | "WebApplication" | "Organization" | "WebSite";
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any = {
    "@context": "https://schema.org",
    "@type": type,
  };

  switch (type) {
    case "FAQPage":
      structuredData.mainEntity = data.questions.map((item: FAQItem) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }));
      break;

    case "HowTo":
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        step: data.steps.map((step: HowToStep, index: number) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      };
      break;

    case "WebApplication":
      structuredData = {
        ...structuredData,
        name: data.name,
        url: data.url,
        description: data.description,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: data.features || [],
        browserRequirements: "Requires JavaScript enabled",
        aggregateRating: data.rating ? {
          "@type": "AggregateRating",
          ratingValue: data.rating.value,
          ratingCount: data.rating.count,
          bestRating: "5",
          worstRating: "1",
        } : undefined,
      };
      break;

    case "Organization":
      structuredData = {
        ...structuredData,
        name: data.name,
        url: data.url,
        logo: data.logo,
        description: data.description,
        sameAs: data.sameAs || [],
      };
      break;

    case "WebSite":
      structuredData = {
        ...structuredData,
        name: data.name,
        url: data.url,
        description: data.description,
        inLanguage: data.languages || ["en"],
        potentialAction: data.searchAction ? {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: data.searchAction.urlTemplate,
          },
          "query-input": data.searchAction.queryInput,
        } : undefined,
      };
      break;
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Convenience components for common structured data types
export function FAQStructuredData({ questions }: { questions: FAQItem[] }) {
  return <StructuredData type="FAQPage" data={{ questions }} />;
}

export function HowToStructuredData({
  name,
  description,
  steps
}: {
  name: string;
  description: string;
  steps: HowToStep[]
}) {
  return <StructuredData type="HowTo" data={{ name, description, steps }} />;
}

export function WebAppStructuredData({
  name,
  url,
  description,
  features,
  rating,
}: {
  name: string;
  url: string;
  description: string;
  features?: string[];
  rating?: { value: string; count: string };
}) {
  return <StructuredData type="WebApplication" data={{ name, url, description, features, rating }} />;
}
