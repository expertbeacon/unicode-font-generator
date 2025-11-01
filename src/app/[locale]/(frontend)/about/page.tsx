import { GradientBackground, GradientSection } from "@/components/ui/gradient-background";
import { appConfig } from "@/config";
import { Metadata } from "next";
import { Type, Heart, Users, Target, Sparkles, Globe } from "lucide-react";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: `About Us - ${appConfig.appName}`,
  description: "Learn about Font Generator, our mission to provide free, easy-to-use text styling tools for everyone. Discover our story, values, and commitment to the community.",
};

export default function AboutPage() {
  return (
    <GradientBackground variant="multi">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-white shadow-2xl mb-6">
            <Type className="w-10 h-10" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink mb-4">
            About Font Generator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering creativity through accessible text styling tools for everyone
          </p>
        </div>

        {/* Mission Section */}
        <GradientSection variant="blue-purple" className="mb-12">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-blue to-gradient-purple text-white flex items-center justify-center shadow-lg shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At Font Generator, we believe that everyone should have access to powerful text styling tools without barriers. Our mission is to provide a free, easy-to-use platform that enables content creators, social media enthusiasts, and professionals to express themselves through beautiful, unique typography.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to maintaining Font Generator as a completely free service, with no hidden fees, no registration requirements, and no limitations on usage. Your creativity shouldn't be restricted by paywalls or complicated software.
                </p>
              </div>
            </div>
          </div>
        </GradientSection>

        {/* Story Section */}
        <GradientSection variant="purple-pink" className="mb-12">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-purple to-gradient-pink text-white flex items-center justify-center shadow-lg shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Font Generator was born from a simple observation: social media users wanted to make their content stand out, but most text styling tools were either too complicated, too expensive, or riddled with ads and limitations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We set out to create something different - a tool that just works. No registration forms, no premium upsells, no annoying ads. Just a clean, fast, and reliable way to transform plain text into eye-catching styled fonts using Unicode characters.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our launch, we've helped over 100,000 users create stunning text for their social media profiles, posts, bios, and creative projects. Every day, we're humbled by the creative ways our community uses Font Generator.
                </p>
              </div>
            </div>
          </div>
        </GradientSection>

        {/* Values Section */}
        <GradientSection variant="orange-pink" className="mb-12">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-orange to-gradient-red text-white flex items-center justify-center shadow-lg shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Simplicity
                </h3>
                <p className="text-muted-foreground">
                  We believe great tools should be intuitive. No learning curve, no manual required - just type and create.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">💝</span> Accessibility
                </h3>
                <p className="text-muted-foreground">
                  Everyone deserves access to creative tools. That's why Font Generator is and always will be 100% free.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Performance
                </h3>
                <p className="text-muted-foreground">
                  Speed matters. Our tool generates styled text instantly, with no delays or loading screens.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🛡️</span> Privacy
                </h3>
                <p className="text-muted-foreground">
                  We don't collect personal data, we don't require registration, and we don't track your content.
                </p>
              </div>
            </div>
          </div>
        </GradientSection>

        {/* Community Section */}
        <GradientSection variant="blue-purple" className="mb-12">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-green to-gradient-emerald text-white flex items-center justify-center shadow-lg shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Community</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Font Generator is used by a diverse community of creators from around the world:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-gradient-blue dark:text-gradient-blue text-2xl">•</span>
                    <span><strong>Social Media Influencers</strong> who want their posts to stand out in crowded feeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gradient-purple dark:text-gradient-purple text-2xl">•</span>
                    <span><strong>Content Creators</strong> looking to add personality to their profiles and bios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gradient-pink dark:text-gradient-pink text-2xl">•</span>
                    <span><strong>Businesses</strong> enhancing their social media presence with distinctive typography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gradient-orange dark:text-gradient-orange text-2xl">•</span>
                    <span><strong>Artists and Designers</strong> exploring creative text presentations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gradient-cyan dark:text-gradient-cyan text-2xl">•</span>
                    <span><strong>Students</strong> adding flair to their digital assignments and presentations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </GradientSection>

        {/* Technology Section */}
        <GradientSection variant="purple-pink" className="mb-12">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-cyan to-gradient-blue text-white flex items-center justify-center shadow-lg shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Font Generator uses Unicode characters to create styled text. Unlike traditional fonts that require special software or apps, Unicode characters are part of the universal text standard supported by all modern devices and platforms.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  This means the styled text you create with Font Generator works everywhere - on Facebook, Twitter, Instagram, WhatsApp, Discord, and any other platform that supports Unicode text. No special apps required, no compatibility issues.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our tool is built with modern web technologies, optimized for speed and reliability, and works seamlessly on all devices - from desktop computers to smartphones.
                </p>
              </div>
            </div>
          </div>
        </GradientSection>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Have questions, suggestions, or feedback? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink hover:from-gradient-blue hover:via-gradient-purple hover:to-gradient-pink text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </GradientBackground>
  );
}
