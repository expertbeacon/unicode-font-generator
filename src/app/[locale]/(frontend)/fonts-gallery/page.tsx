import { GalleryMain } from "@/components/frontend/page/gallery/main";
import { GradientBackground } from "@/components/ui/gradient-background";
import { HeroSection, HeroIcon, HeroTitle, HeroSubtitle } from "@/components/ui/hero-section";
import { appConfig } from "@/config";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from 'next/headers';
import { Grid3x3 } from "lucide-react";

export const runtime = 'edge';

export async function generateMetadata({ params }:{ params: any }): Promise<Metadata> {
  const t = await getTranslations(params);
  return {
    title: `Font Gallery - All Styles | ${appConfig.appName}`,
    description: "Explore our complete collection of 100+ font styles. Browse, preview, and copy all available Unicode text styles in one place."
  };
}

export default async function FontsGalleryPage({
  params,
  searchParams
}: Readonly<{
  params: { locale: string; };
  searchParams: { text?: string };
}>) {
  const headersList = headers();
  const url = new URL(headersList.get('x-request-url')!);

  return (
    <GradientBackground variant="multi">
      {/* Hero Section */}
      <HeroSection>
        <HeroIcon gradient="purple-pink">
          <Grid3x3 className="w-10 h-10" strokeWidth={2.5} />
        </HeroIcon>

        <div className="space-y-4">
          <HeroTitle>
            Complete Font Gallery
          </HeroTitle>
          <HeroSubtitle>
            Explore all 100+ Unicode font styles in one place. Preview and copy any style instantly.
          </HeroSubtitle>
        </div>
      </HeroSection>

      {/* Gallery Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <GalleryMain text={url.searchParams.get("text")} />
      </div>
    </GradientBackground>
  );
}
