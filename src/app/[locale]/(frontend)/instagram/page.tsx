import { StyleMain } from "@/components/frontend/page/style/main";
import { SocialMediaSection } from "@/components/frontend/home/social-media-section";
import { GradientBackground } from "@/components/ui/gradient-background";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { instagramMetadata } from "@/metadata";
import { headers } from "next/headers";

export const runtime = 'edge';

export { instagramMetadata as generateMetadata };

export default async function InstagramPage({
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
          platform="instagram"
          title="Instagram Font Generator"
          subtitle="Create stunning text for your Instagram posts, stories, bio, and captions"
          stats="Used by 50,000+ Instagram creators worldwide"
          gradient="purple-pink"
        />
        <div className="px-8">
          <StyleMain style="all" markdownContents={markdownContents} text={url.searchParams.get("text")} />
        </div>
      </div>
    </GradientBackground>
  );
}