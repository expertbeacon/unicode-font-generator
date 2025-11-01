import { StyleMain } from "@/components/frontend/page/style/main";
import { FeaturesSection } from "@/components/frontend/home/features-section";
import { BenefitsSection } from "@/components/frontend/home/benefits-section";
import { HowToSection } from "@/components/frontend/home/howto-section";
import { FAQSection } from "@/components/frontend/home/faq-section";
import { ToolsGrid } from "@/components/frontend/home/tools-grid";
import { PopularFontsSection } from "@/components/frontend/home/popular-fonts-section";
import { GradientBackground } from "@/components/ui/gradient-background";
import { HeroSection, HeroIcon, HeroTitle, HeroSubtitle, HeroStats } from "@/components/ui/hero-section";
import { FAQStructuredData, HowToStructuredData, WebAppStructuredData } from "@/components/seo/structured-data";
import { appConfig, LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from 'next/headers';
import { Type } from "lucide-react";
export const runtime = 'edge';

export async function generateMetadata({ params }:{ params: any }): Promise<Metadata> {
  const t = await getTranslations(params);
  return {
    title: {
      absolute: `${appConfig.appName}: ${t('frontend.meta.default.title')}`,
      template: "%s"
    },
    description: t('frontend.meta.default.description')
  };
}

export default async function Home({
  params
}: Readonly<{
  params: { locale: string; };
}>) {
  const headersList = headers();
  const origin = getOrigin({headers: headersList});
  const url = new URL(headersList.get('x-request-url')!);
  const t = await getTranslations({ locale: params.locale, namespace: 'frontend.home' });

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale: params.locale as LocaleType,
      componentPathName: "home/block1",
      origin
    })
  }

  // Structured Data for SEO
  const faqQuestions = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
    { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
    { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
    { question: t('faq.q6.question'), answer: t('faq.q6.answer') },
  ];

  const howToSteps = [
    { name: t('howto.step1.title'), text: t('howto.step1.description') },
    { name: t('howto.step2.title'), text: t('howto.step2.description') },
    { name: t('howto.step3.title'), text: t('howto.step3.description') },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <FAQStructuredData questions={faqQuestions} />
      <HowToStructuredData
        name={t('howto.title')}
        description={t('howto.subtitle')}
        steps={howToSteps}
      />
      <WebAppStructuredData
        name={appConfig.appName}
        url="https://www.fontgenerator.dev/"
        description={t('hero.subtitle')}
        features={[
          "Instant text generation",
          "100+ Unicode font styles",
          "One-click copy functionality",
          "Universal platform compatibility",
          "No registration required",
          "100% free to use",
          "Real-time preview",
          "Mobile responsive"
        ]}
        rating={{
          value: "4.8",
          count: "2500"
        }}
      />

      <GradientBackground variant="multi">
        {/* Hero Section */}
        <HeroSection>
          <HeroIcon gradient="blue-purple">
            <Type className="w-10 h-10" strokeWidth={2.5} />
          </HeroIcon>

          <div className="space-y-4">
            <HeroTitle>
              {t('hero.title')}
            </HeroTitle>
            <HeroSubtitle>
              {t('hero.subtitle')}
            </HeroSubtitle>
          </div>

          <HeroStats
            stat={t('hero.stats')}
            description="Join the professionals who trust our tool for text styling"
          />
        </HeroSection>

        {/* Font Generator Tool */}
        <div className="px-8 flex mb-16">
          <StyleMain style="all" markdownContents={markdownContents} text={url.searchParams.get("text")} />
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* Popular Fonts Section */}
        <PopularFontsSection />

        {/* How To Section */}
        <HowToSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Tools Grid - More Helpful Tools */}
        <ToolsGrid />
      </GradientBackground>
    </>
  );
}
