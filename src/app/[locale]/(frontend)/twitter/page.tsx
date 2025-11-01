import { StyleMain } from "@/components/frontend/page/style/main";
import { SocialMediaSection } from "@/components/frontend/home/social-media-section";
import { GradientBackground } from "@/components/ui/gradient-background";
import { appConfig, LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { Metadata } from "next";
import { headers } from "next/headers";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: `Twitter Font Generator - Free Stylish Text for Twitter/X - ${appConfig.appName}`,
  description: "Create eye-catching text for Twitter/X posts, bios, and replies. Perfect for making your tweets stand out with bold, italic, fancy, and cool Unicode text styles. Free, instant, and works perfectly on Twitter!",
  keywords: "twitter font generator, twitter text, stylish text for twitter, twitter bio font, twitter post font, x font generator, x text styles, twitter username font, twitter profile text, twitter reply text",
};

export default async function TwitterPage({
  params
}: Readonly<{
  params: { locale: LocaleType };
}>) {
  const headersList = headers();
  const origin = getOrigin({headers: headersList});
  const url = new URL(headersList.get('x-request-url')!);

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale: params.locale,
      componentPathName: "home/block1",
      origin
    })
  }

  return (
    <GradientBackground variant="multi">
      <div className="container mx-auto px-4 py-16">
        <SocialMediaSection
          platform="twitter"
          title="Twitter Font Generator"
          subtitle="Create attention-grabbing text for your Twitter posts, bios, and replies"
          stats="Used by 40,000+ Twitter users worldwide"
          gradient="blue-purple"
        />
        <div className="px-8">
          <StyleMain style="all" markdownContents={markdownContents} text={url.searchParams.get("text")} />
        </div>
      </div>
    </GradientBackground>
  );
}