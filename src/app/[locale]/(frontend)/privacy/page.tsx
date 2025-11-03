import { GradientBackground, GradientSection } from "@/components/ui/gradient-background";
import { appConfig, LocaleType } from "@/config";
import { privacyMetadata } from "@/metadata";
import { Shield } from "lucide-react";

export const runtime = 'edge';

export { privacyMetadata as generateMetadata };

export default function PrivacyPage({
  params
}: Readonly<{
  params: { locale: LocaleType };
}>) {
  const lastUpdated = "January 2025";

  return (
    <GradientBackground variant="multi">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-gradient-green to-gradient-emerald text-white shadow-2xl mb-6">
            <Shield className="w-10 h-10" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gradient-green to-gradient-emerald mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <GradientSection variant="blue-purple">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl prose dark:prose-invert max-w-none">

            <h2>Introduction</h2>
            <p>
              At Font Generator (<strong>{appConfig.appName}</strong>), we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
            </p>

            <div className="bg-gradient-to-r from-gradient-blue/10 to-gradient-purple/10 dark:from-gradient-blue/20 dark:to-gradient-purple/20 border-2 border-gradient-blue dark:border-gradient-blue rounded-2xl p-6 my-6 not-prose">
              <p className="text-lg font-semibold mb-2">🎉 The Good News</p>
              <p className="text-muted-foreground">
                Font Generator is designed to respect your privacy. We don't require registration, we don't collect personal information, and we don't track your text content. You can use our service anonymously and freely.
              </p>
            </div>

            <h2>Information We Collect</h2>

            <h3>Information You Provide</h3>
            <ul>
              <li><strong>No Account Required:</strong> You don't need to create an account or provide any personal information to use Font Generator.</li>
              <li><strong>Contact Forms:</strong> If you contact us through our contact form, we collect only the information you voluntarily provide (name, email, message).</li>
              <li><strong>Text Content:</strong> The text you enter into the font generator is processed in real-time in your browser and is NOT stored on our servers.</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li><strong>Analytics:</strong> We use Google Analytics to understand how visitors use our site. This includes:
                <ul>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Browser type and device information</li>
                  <li>General geographic location (country/city level)</li>
                  <li>Referring website</li>
                </ul>
              </li>
              <li><strong>Cookies:</strong> We use minimal cookies for:
                <ul>
                  <li>Remembering your theme preference (dark/light mode)</li>
                  <li>Analytics tracking</li>
                  <li>No tracking cookies are used for advertising</li>
                </ul>
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the limited information we collect to:</p>
            <ul>
              <li>Operate and improve Font Generator</li>
              <li>Understand how users interact with our service</li>
              <li>Respond to support requests and inquiries</li>
              <li>Detect and prevent technical issues</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>

            <h2>What We DON'T Do</h2>
            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 rounded-2xl p-6 my-6 not-prose">
              <ul className="space-y-2 text-muted-foreground">
                <li>❌ We DON'T sell your data to third parties</li>
                <li>❌ We DON'T store or log the text you generate</li>
                <li>❌ We DON'T require personal information to use our service</li>
                <li>❌ We DON'T use advertising trackers or pixels</li>
                <li>❌ We DON'T share your information except as required by law</li>
                <li>❌ We DON'T send marketing emails (we don't have your email unless you contact us)</li>
              </ul>
            </div>

            <h2>Data Security</h2>
            <p>
              While no internet transmission is 100% secure, we implement reasonable security measures to protect the limited data we collect:
            </p>
            <ul>
              <li>All connections to Font Generator use HTTPS encryption</li>
              <li>Text processing happens in your browser (client-side)</li>
              <li>We don't store user-generated content on our servers</li>
              <li>Access to any collected data is restricted to authorized personnel only</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              Font Generator uses the following third-party services that may collect data:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> For understanding site usage (governed by Google's privacy policy)</li>
              <li><strong>Cloudflare:</strong> For content delivery and DDoS protection (governed by Cloudflare's privacy policy)</li>
            </ul>
            <p>
              These services have their own privacy policies, and we encourage you to review them.
            </p>

            <h2>Your Rights</h2>
            <p>Since we collect minimal personal information, your privacy rights are largely protected by default. However, you have the right to:</p>
            <ul>
              <li>Use Font Generator anonymously without providing any personal information</li>
              <li>Disable cookies in your browser (though some features may not work properly)</li>
              <li>Request deletion of any information you've provided through our contact form</li>
              <li>Opt out of Google Analytics by using a browser extension like Google Analytics Opt-out</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Font Generator does not knowingly collect personal information from children under 13. Our service is designed to be used without providing any personal information, making it safe for users of all ages.
            </p>

            <h2>International Users</h2>
            <p>
              Font Generator is accessible worldwide. If you're accessing our service from outside the United States, please note that any information we collect may be transferred to and processed in countries other than your own. By using Font Generator, you consent to such transfers.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the "Last Updated" date at the top of this policy. We encourage you to review this page periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us through our <a href="/contact" className="text-gradient-blue hover:underline">contact page</a>.
            </p>

            <div className="bg-gradient-to-r from-gradient-blue/10 to-gradient-green/10 dark:from-gradient-blue/20 dark:to-gradient-green/20 border-2 border-gradient-blue dark:border-gradient-blue rounded-2xl p-6 my-6 not-prose">
              <p className="text-lg font-semibold mb-2">💚 Our Commitment</p>
              <p className="text-muted-foreground">
                Font Generator was built with privacy in mind. We believe you should be able to use our service without sacrificing your privacy or personal information. This policy reflects our commitment to maintaining that standard.
              </p>
            </div>
          </div>
        </GradientSection>
      </div>
    </GradientBackground>
  );
}
