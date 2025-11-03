import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LocaleType, appConfig } from "./config";
import { StyleKey, TopicKey } from "./slugs";
import { seoConfig } from "./config/seo";
import { generateCanonicalUrl, generateAlternateLinks, getOgLocale } from "./lib/seo";

/**
 * Metadata for Home page
 * src/app/[locale]/(frontend)/(home)/page.tsx
 */
export const homeMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const t = await getTranslations(params);
  const { locale } = params;

  const title = `${appConfig.appName}: ${t('frontend.meta.default.title')}`;
  const description = t('frontend.meta.default.description');
  const keywords = "font generator, stylish text, fancy fonts, unicode text, cool fonts, text generator, instagram fonts, twitter fonts, social media fonts, bold text, italic text";

  const canonicalUrl = generateCanonicalUrl(locale, '');

  return {
    title: {
      absolute: title,
      template: "%s"
    },
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks(''),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
};
/**
 * Metadata for src/app/[locale]/(frontend)/[style]/page.tsx
 * 
 * @returns 
 */
export const styleMetadata = async ({ params }: { params: { locale: LocaleType, style: StyleKey } }): Promise<Metadata> => {
  const t = await getTranslations(params);
  const { locale, style } = params;

  let title = "";
  let description = "";
  switch (style) {
    case "bold-text":
      title = t('frontend.style.bold.meta.title');
      description = t('frontend.style.bold.meta.description');
      break;
    case "cool":
      title = t('frontend.style.cool.meta.title');
      description = t('frontend.style.cool.meta.description');
      break;
    case "fancy":
      title = t('frontend.style.fancy.meta.title');
      description = t('frontend.style.fancy.meta.description');
      break;
    case "italic":
      title = t('frontend.style.italic.meta.title');
      description = t('frontend.style.italic.meta.description');
      break;
    case "small-text":
      title = t('frontend.style.small.meta.title');
      description = t('frontend.style.small.meta.description');
      break;
    case "bold-italic":
      title = t('frontend.style.bold-italic.meta.title');
      description = t('frontend.style.bold-italic.meta.description');
      break;
    case "sans-serif":
      title = t('frontend.style.sans-serif.meta.title');
      description = t('frontend.style.sans-serif.meta.description');
      break;
    case "serif":
      title = t('frontend.style.serif.meta.title');
      description = t('frontend.style.serif.meta.description');
      break;
    case "underline":
      title = t('frontend.style.underline.meta.title');
      description = t('frontend.style.underline.meta.description');
      break;
    case "bubble-text":
      title = t('frontend.style.bubble-text.meta.title');
      description = t('frontend.style.bubble-text.meta.description');
      break;
    case "square-text":
      title = t('frontend.style.square-text.meta.title');
      description = t('frontend.style.square-text.meta.description');
      break;
    case "cursive-font":
      title = t('frontend.style.cursive-font.meta.title');
      description = t('frontend.style.cursive-font.meta.description');
      break;
    case "alternating":
      title = t('frontend.style.alternating.meta.title');
      description = t('frontend.style.alternating.meta.description');
      break;
    case "exotic":
      title = t('frontend.style.exotic.meta.title');
      description = t('frontend.style.exotic.meta.description');
      break;
    case "mathematical":
      title = t('frontend.style.mathematical.meta.title');
      description = t('frontend.style.mathematical.meta.description');
      break;
    case "decorative":
      title = t('frontend.style.decorative.meta.title');
      description = t('frontend.style.decorative.meta.description');
      break;
    case "vintage":
      title = t('frontend.style.vintage.meta.title');
      description = t('frontend.style.vintage.meta.description');
      break;
    case "modern":
      title = t('frontend.style.modern.meta.title');
      description = t('frontend.style.modern.meta.description');
      break;
    case "artistic":
      title = t('frontend.style.artistic.meta.title');
      description = t('frontend.style.artistic.meta.description');
      break;
    case "rounded":
      title = t('frontend.style.rounded.meta.title');
      description = t('frontend.style.rounded.meta.description');
      break;
    case "sharp":
      title = t('frontend.style.sharp.meta.title');
      description = t('frontend.style.sharp.meta.description');
      break;
    case "handwritten":
      title = t('frontend.style.handwritten.meta.title');
      description = t('frontend.style.handwritten.meta.description');
      break;
    case "gaming":
      title = t('frontend.style.gaming.meta.title');
      description = t('frontend.style.gaming.meta.description');
      break;
    case "retro":
      title = t('frontend.style.retro.meta.title');
      description = t('frontend.style.retro.meta.description');
      break;
    case "elegant":
      title = t('frontend.style.elegant.meta.title');
      description = t('frontend.style.elegant.meta.description');
      break;
    case "playful":
      title = t('frontend.style.playful.meta.title');
      description = t('frontend.style.playful.meta.description');
      break;

    default:
      title = "";
  }

  const canonicalUrl = generateCanonicalUrl(locale, style);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks(style),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}


export const getStyleName = async ({ params }: Readonly<{ params: { locale: LocaleType, style?: StyleKey } }>): Promise<string> => {
  const t = await getTranslations(params);
  const { style } = params;
  switch (style) {
    case "bold-text":
      return t('frontend.slug.menu.bold');
    case "cool":
      return t('frontend.slug.menu.cool');
    case "fancy":
      return t('frontend.slug.menu.fancy');
    case "italic":
      return t('frontend.slug.menu.italic');
    case "small-text":
      return t('frontend.slug.menu.small');
    case "bold-italic":
      return t('frontend.slug.menu.bold-italic');
    case "sans-serif":
      return "Sans Serif";
    case "serif":
      return "Serif";
    case "underline":
      return t("frontend.slug.menu.underline");
    case "bubble-text":
      return t("frontend.slug.menu.bubble-text");
    case "square-text":
      return t("frontend.slug.menu.square-text");
    case "alternating":
      return t("frontend.slug.menu.alternating");
    case "exotic":
      return t("frontend.slug.menu.exotic");
    case "mathematical":
      return t("frontend.slug.menu.mathematical");
    case "decorative":
      return t("frontend.slug.menu.decorative");
    case "vintage":
      return t("frontend.slug.menu.vintage");
    case "modern":
      return t("frontend.slug.menu.modern");
    case "artistic":
      return t("frontend.slug.menu.artistic");
    case "rounded":
      return t("frontend.slug.menu.rounded");
    case "sharp":
      return t("frontend.slug.menu.sharp");
    case "handwritten":
      return t("frontend.slug.menu.handwritten");
    case "gaming":
      return t("frontend.slug.menu.gaming");
    case "retro":
      return t("frontend.slug.menu.retro");
    case "elegant":
      return t("frontend.slug.menu.elegant");
    case "playful":
      return t("frontend.slug.menu.playful");
    default:
      return "";
  }
}

export const topicMetadata = async ({ params }: { params: { locale: LocaleType, topic?: TopicKey } }): Promise<Metadata> => {
  const t = await getTranslations(params);
  const { locale, topic } = params;

  let title = "";
  let description = "";
  let keywords = "";

  switch (topic) {
    case "facebook":
      title = t('frontend.topic.facebook.meta.title');
      description = t('frontend.topic.facebook.meta.description');
      keywords = "facebook font generator, facebook text, facebook bio font, facebook post font";
      break;
    case "handwriting":
      title = t('frontend.topic.handwriting.meta.title');
      description = t('frontend.topic.handwriting.meta.description');
      keywords = "handwriting font generator, handwriting text, cursive font, handwritten text generator";
      break;

    default:
      title = t('frontend.topic.index.meta.title');
      description = t('frontend.topic.index.meta.description');
      keywords = "font generator topics, text style categories";
  }

  const canonicalUrl = generateCanonicalUrl(locale, topic ? `topic/${topic}` : 'topic');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks(topic ? `topic/${topic}` : 'topic'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

export const getTopicName = async ({ params }: Readonly<{ params: { topic: TopicKey } }>): Promise<string> => {
  const t = await getTranslations(params);
  const { topic } = params;
  switch (topic) {
    case "facebook":
      return "FaceBook";
    case "handwriting":
      return t("frontend.slug.topic.handwriting");;
    default:
      return "";
  }
}

/**
 * Metadata for Instagram page
 */
export const instagramMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `Instagram Font Generator - Free Stylish Text for Instagram - ${seoConfig.siteName}`;
  const description = "Create eye-catching fonts for Instagram posts, stories, bios, and captions. Perfect for making your Instagram content stand out with bold, italic, fancy, and cool Unicode text styles. Free, instant, and works everywhere!";
  const keywords = "instagram font generator, instagram text, stylish text for instagram, instagram bio font, instagram caption text, instagram post font, instagram stories text, instagram username font, instagram profile text";

  const canonicalUrl = generateCanonicalUrl(locale, 'instagram');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('instagram'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

/**
 * Metadata for Twitter page
 */
export const twitterMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `Twitter Font Generator - Free Stylish Text for Twitter/X - ${seoConfig.siteName}`;
  const description = "Create eye-catching text for Twitter/X posts, bios, and replies. Perfect for making your tweets stand out with bold, italic, fancy, and cool Unicode text styles. Free, instant, and works perfectly on Twitter!";
  const keywords = "twitter font generator, twitter text, stylish text for twitter, twitter bio font, twitter post font, x font generator, x text styles, twitter username font, twitter profile text, twitter reply text";

  const canonicalUrl = generateCanonicalUrl(locale, 'twitter');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('twitter'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

/**
 * Metadata for TikTok page
 */
export const tiktokMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `TikTok Font Generator - Free Stylish Text for TikTok - ${seoConfig.siteName}`;
  const description = "Create viral-worthy text for TikTok videos, bios, captions, and comments. Perfect for making your TikTok content stand out with bold, italic, fancy, and cool Unicode text styles. Free, instant, and optimized for TikTok success!";
  const keywords = "tiktok font generator, tiktok text, stylish text for tiktok, tiktok bio font, tiktok caption text, tiktok video font, tiktok username font, tiktok profile text, tiktok comment font";

  const canonicalUrl = generateCanonicalUrl(locale, 'tiktok');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('tiktok'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

/**
 * Metadata for About page
 */
export const aboutMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `About Us - ${seoConfig.siteName}`;
  const description = "Learn about Font Generator, our mission to provide free, easy-to-use text styling tools for everyone. Discover our story, values, and commitment to the community.";
  const keywords = "about font generator, font generator story, text styling tools, free font generator, unicode text generator";

  const canonicalUrl = generateCanonicalUrl(locale, 'about');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('about'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

/**
 * Metadata for Fonts Gallery page
 */
export const fontsGalleryMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `Font Gallery - All Styles | ${seoConfig.siteName}`;
  const description = "Explore our complete collection of 100+ font styles. Browse, preview, and copy all available Unicode text styles in one place.";
  const keywords = "font gallery, all font styles, unicode fonts, text styles collection, font preview, copy fonts, stylish text collection";

  const canonicalUrl = generateCanonicalUrl(locale, 'fonts-gallery');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('fonts-gallery'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

/**
 * Metadata for Contact page
 */
export const contactMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `Contact Us - ${seoConfig.siteName}`;
  const description = "Get in touch with the Font Generator team. We're here to help with questions, feedback, and support.";
  const keywords = "contact font generator, font generator support, font generator help, font generator feedback, contact us";

  const canonicalUrl = generateCanonicalUrl(locale, 'contact');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('contact'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

/**
 * Metadata for Privacy page
 */
export const privacyMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `Privacy Policy - ${seoConfig.siteName}`;
  const description = "Font Generator Privacy Policy. Learn how we protect your privacy and what data we collect (spoiler: very little!).";
  const keywords = "font generator privacy, privacy policy, data protection, font generator data collection, privacy statement";

  const canonicalUrl = generateCanonicalUrl(locale, 'privacy');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('privacy'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}

/**
 * Metadata for Terms page
 */
export const termsMetadata = async ({ params }: { params: { locale: LocaleType } }): Promise<Metadata> => {
  const { locale } = params;
  const title = `Terms of Service - ${seoConfig.siteName}`;
  const description = "Font Generator Terms of Service. Learn about the terms and conditions for using our free text styling tool.";
  const keywords = "font generator terms, terms of service, font generator conditions, usage terms, font generator agreement";

  const canonicalUrl = generateCanonicalUrl(locale, 'terms');

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateLinks('terms'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: getOgLocale(locale),
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.social.twitter,
      images: [seoConfig.defaultTwitterImage],
    },
  };
}