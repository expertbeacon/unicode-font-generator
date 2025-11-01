"use client";

import { GradientSection } from "@/components/ui/gradient-background";
import { HeroSection, HeroIcon, HeroTitle, HeroSubtitle, HeroStats } from "@/components/ui/hero-section";
import { FeatureCard, FeatureGrid } from "@/components/ui/feature-card";
import { Zap, Copy, Users, Palette, Heart, TrendingUp } from "lucide-react";

interface SocialMediaSectionProps {
  platform: string;
  title: string;
  subtitle: string;
  stats: string;
  gradient: "blue-purple" | "purple-pink" | "orange-pink" | "cyan-blue";
}

export function SocialMediaSection({
  platform,
  title,
  subtitle,
  stats,
  gradient
}: SocialMediaSectionProps) {

  const getPlatformIcon = () => {
    switch (platform) {
      case "instagram":
        return "📷";
      case "tiktok":
        return "🎵";
      case "twitter":
        return "🐦";
      case "facebook":
        return "📘";
      default:
        return "📱";
    }
  };

  const getPlatformFeatures = () => {
    switch (platform) {
      case "instagram":
        return [
          {
            title: "Perfect for Posts",
            description: "Make your Instagram posts stand out with eye-catching text that grabs attention in the feed."
          },
          {
            title: "Story Ready",
            description: "Create stunning text overlays for Instagram Stories that look professional and engaging."
          },
          {
            title: "Bio Optimization",
            description: "Transform your Instagram bio with stylish text that makes your profile memorable."
          },
          {
            title: "Caption Enhancement",
            description: "Add personality to your Instagram captions with creative text styles and fonts."
          },
          {
            title: "Username Ideas",
            description: "Generate unique usernames with special characters for better brand recognition."
          },
          {
            title: "Highlight Covers",
            description: "Create consistent branding for your Instagram story highlights with custom text."
          }
        ];
      case "tiktok":
        return [
          {
            title: "Video Captions",
            description: "Add attention-grabbing text to your TikTok video captions for better engagement."
          },
          {
            title: "Profile Bio",
            description: "Make your TikTok bio stand out with creative font styles and special characters."
          },
          {
            title: "Video Overlays",
            description: "Create text overlays for your TikTok videos that enhance your content."
          },
          {
            title: "Username Style",
            description: "Get a unique TikTok username with special characters that stands out."
          },
          {
            title: "Comment Style",
            description: "Make your TikTok comments more noticeable with styled text."
          },
          {
            title: "Live Streaming",
            description: "Create engaging text for your TikTok live streams and announcements."
          }
        ];
      default:
        return [
          {
            title: "Instant Generation",
            description: "Create stylish text in seconds with our lightning-fast generator."
          },
          {
            title: "Universal Compatibility",
            description: "Works perfectly on all social media platforms and devices."
          },
          {
            title: "One-Click Copy",
            description: "Simply click to copy your styled text and paste anywhere."
          },
          {
            title: "100+ Styles",
            description: "Choose from bold, italic, fancy, cool, and many more font styles."
          },
          {
            title: "Free Forever",
            description: "No registration required, no hidden fees, completely free to use."
          },
          {
            title: "Mobile Friendly",
            description: "Works seamlessly on smartphones, tablets, and desktop computers."
          }
        ];
    }
  };

  const getUseCases = () => {
    switch (platform) {
      case "instagram":
        return [
          "Instagram post captions",
          "Instagram bio text",
          "Instagram story overlays",
          "Instagram hashtag text",
          "Instagram comment responses",
          "Instagram live stream text"
        ];
      case "tiktok":
        return [
          "TikTok video captions",
          "TikTok profile bio",
          "TikTok video overlays",
          "TikTok comment replies",
          "TikTok username styling",
          "TikTok live stream text"
        ];
      default:
        return [
          "Social media posts",
          "Profile bios",
          "Story captions",
          "Video overlays",
          "Comments and replies",
          "Live stream text"
        ];
    }
  };

  const features = getPlatformFeatures();
  const useCases = getUseCases();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <HeroIcon gradient={gradient}>
          <span className="text-3xl">{getPlatformIcon()}</span>
        </HeroIcon>

        <div className="space-y-4">
          <HeroTitle>
            {title}
          </HeroTitle>
          <HeroSubtitle>
            {subtitle}
          </HeroSubtitle>
        </div>

        <HeroStats
          stat={stats}
          description="Join the creators who trust our tool for social media success"
        />
      </HeroSection>

      {/* Platform Features */}
      <div className="mb-16">
        <GradientSection variant={gradient}>
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-3">
                Why Creators Love Our {platform.charAt(0).toUpperCase() + platform.slice(1)} Fonts
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Professional text styling specifically optimized for {platform} success
              </p>
            </div>

            <FeatureGrid columns={3}>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={index % 3 === 0 ? Zap : index % 3 === 1 ? Copy : Users}
                  title={feature.title}
                  description={feature.description}
                  gradient={index % 2 === 0 ? "blue-purple" : "purple-pink"}
                />
              ))}
            </FeatureGrid>
          </div>
        </GradientSection>
      </div>

      {/* Use Cases */}
      <div className="mb-16">
        <GradientSection variant={gradient}>
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Perfect For</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 flex items-center gap-3 hover:border-gradient-blue dark:hover:border-gradient-blue transition-colors duration-300"
                >
                  <span className="text-2xl">✨</span>
                  <span className="text-muted-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </GradientSection>
      </div>

      {/* Tips Section */}
      <div className="mb-16">
        <GradientSection variant={gradient}>
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Pro Tips for {platform.charAt(0).toUpperCase() + platform.slice(1)} Success</h3>
            </div>

            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-gradient-blue dark:text-gradient-blue text-xl">💡</span>
                <div>
                  <strong>Keep it Short:</strong>
                  <p className="text-muted-foreground">Short, impactful text works best on {platform} feeds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gradient-purple dark:text-gradient-purple text-xl">🎨</span>
                <div>
                  <strong>Mix Styles:</strong>
                  <p className="text-muted-foreground">Combine different font styles for visual hierarchy in your content.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gradient-pink dark:text-gradient-pink text-xl">📱</span>
                <div>
                  <strong>Test First:</strong>
                  <p className="text-muted-foreground">Always preview your styled text on mobile before posting.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gradient-orange dark:text-gradient-orange text-xl">���</span>
                <div>
                  <strong>Stay Relevant:</strong>
                  <p className="text-muted-foreground">Use styled text that matches your brand and content style.</p>
                </div>
              </div>
            </div>
          </div>
        </GradientSection>
      </div>
    </div>
  );
}