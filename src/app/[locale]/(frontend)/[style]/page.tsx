import { StyleMain } from "@/components/frontend/page/style/main";
import { StyleSection } from "@/components/frontend/home/style-section";
import { GradientBackground } from "@/components/ui/gradient-background";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { styleMetadata } from "@/metadata";
import { StyleKey } from "@/slugs";
import { headers } from "next/headers";

export const runtime = 'edge';

export { styleMetadata as generateMetadata };

export default async function  Style({
  params
}: Readonly<{
  params: { locale: LocaleType; style: StyleKey; };
}>) {
  const { locale, style } = params;
  const headersList = headers();
  const origin = getOrigin({headers: headersList});

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale,
      componentPathName: `style/${style}/block1`,
      origin
    })
  }
  const url = new URL(headersList.get('x-request-url')!);

  return (
    <GradientBackground variant="multi">
      <div className="container mx-auto px-4 py-16">
        <StyleSection style={style} />
        <div className="px-8">
          <StyleMain markdownContents={markdownContents} style={style} text={url.searchParams.get("text")} />
        </div>
      </div>
    </GradientBackground>
  );
}