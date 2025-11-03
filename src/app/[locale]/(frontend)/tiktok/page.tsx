import { StyleMain } from "@/components/frontend/page/style/main";
import { SocialMediaSection } from "@/components/frontend/home/social-media-section";
import { GradientBackground } from "@/components/ui/gradient-background";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { tiktokMetadata } from "@/metadata";
import { headers } from "next/headers";

export const runtime = 'edge';

export { tiktokMetadata as generateMetadata };

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