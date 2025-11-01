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
  title: `TikTok Font Generator - Free Stylish Text for TikTok - ${appConfig.appName}`,
  description: "Create viral-worthy text for TikTok videos, bios, captions, and comments. Perfect for making your TikTok content stand out with bold, italic, fancy, and cool Unicode text styles. Free, instant, and optimized for TikTok success!",
  keywords: "tiktok font generator, tiktok text, stylish text for tiktok, tiktok bio font, tiktok caption text, tiktok video font, tiktok username font, tiktok profile text, tiktok comment font",
};

export default async function TikTokPage({
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
          platform="tiktok"
          title="TikTok Font Generator"
          subtitle="Create viral-worthy text for your TikTok videos, bios, and captions"
          stats="Used by 30,000+ TikTok creators worldwide"
          gradient="cyan-blue"
        />
        <div className="px-8">
          <StyleMain style="all" markdownContents={markdownContents} text={url.searchParams.get("text")} />
        </div>
      </div>
    </GradientBackground>
  );
}