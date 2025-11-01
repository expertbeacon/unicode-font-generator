
import { appConfig, type LocaleType } from "@/config";
import { seoConfig } from "@/config/seo";
import getRequestConfig from "@/i18n";
import { cn, createAlternates } from "@/lib/utils";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono as FontMono } from "next/font/google";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
export const runtime = 'edge';

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export async function generateMetadata({ params }:{ params: any }): Promise<Metadata> {
  const t = await getTranslations(params);
  const headersList = headers();
  const locale = params.locale as LocaleType;

  return {
    metadataBase: new URL(seoConfig.baseUrl),
    title: {
      absolute: t('frontend.meta.default.title'),
      default: t('frontend.meta.default.title'),
      template: `%s - ${appConfig.appRootDomain}`,
    },
    description: t('frontend.meta.default.description'),
    alternates: createAlternates({ headers: headersList }),
    openGraph: {
      type: "website",
      locale,
      siteName: seoConfig.siteName,
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: seoConfig.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.social.twitter,
    },
    robots: seoConfig.robots,
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
 
  const { locale } = params as { locale: LocaleType };

  if (!appConfig.i18n.locales.includes(locale)) {
    notFound();
  }
  const { messages } = await getRequestConfig({locale});

  // Generate structured data
  const websiteSchema = generateWebSiteSchema(
    `${seoConfig.baseUrl}/${locale}?text={search_term_string}`
  );
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <JsonLd data={[websiteSchema, organizationSchema]} />
      </head>
     <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased",
          fontMono.variable
        )}
      >
        <NextTopLoader color="var(--colors-primary)" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        {appConfig.gaId && <GoogleAnalytics gaId={appConfig.gaId} />}
      </body>
    </html>
  );
}
