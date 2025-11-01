import { GradientBackground, GradientSection } from "@/components/ui/gradient-background";
import { appConfig } from "@/config";
import { Metadata } from "next";
import { FileText } from "lucide-react";

export const runtime = 'edge';

export const metadata: Metadata = {
  title: `Terms of Service - ${appConfig.appName}`,
  description: "Font Generator Terms of Service. Learn about the terms and conditions for using our free text styling tool.",
};

export default function TermsPage() {
  const lastUpdated = "January 2025";

  return (
    <GradientBackground variant="multi">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-gradient-blue to-gradient-cyan text-white shadow-2xl mb-6">
            <FileText className="w-10 h-10" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gradient-blue to-gradient-cyan mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>
        </div>

        <GradientSection variant="blue-purple">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl prose dark:prose-invert max-w-none">

            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using Font Generator (<strong>{appConfig.appName}</strong>), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <div className="bg-gradient-to-r from-gradient-blue/10 to-gradient-purple/10 dark:from-gradient-blue/20 dark:to-gradient-purple/20 border-2 border-gradient-blue dark:border-gradient-blue rounded-2xl p-6 my-6 not-prose">
              <p className="text-lg font-semibold mb-2">📝 In Plain English</p>
              <p className="text-muted-foreground">
                Font Generator is free to use for everyone. These terms are here to protect both you and us, but they're pretty straightforward: use the tool responsibly, don't abuse it, and we're not liable if something goes wrong.
              </p>
            </div>

            <h2>Use of Service</h2>

            <h3>What You Can Do</h3>
            <ul>
              <li>Use Font Generator for free, without registration</li>
              <li>Generate as many styled fonts as you want</li>
              <li>Use the generated text for personal or commercial purposes</li>
              <li>Share links to Font Generator with others</li>
              <li>Copy and paste generated text anywhere you like</li>
            </ul>

            <h3>What You Can't Do</h3>
            <ul>
              <li>Attempt to hack, disrupt, or overload our servers</li>
              <li>Use automated tools to scrape or copy our website content</li>
              <li>Claim ownership of Font Generator or misrepresent your affiliation with us</li>
              <li>Use the service for illegal purposes</li>
              <li>Reverse engineer or attempt to extract the source code</li>
              <li>Remove or modify any copyright notices or attribution</li>
            </ul>

            <h2>Intellectual Property</h2>

            <h3>Our Rights</h3>
            <p>
              Font Generator, including its design, code, and content, is protected by copyright and other intellectual property laws. We retain all rights to our service, except for the content you generate.
            </p>

            <h3>Your Rights</h3>
            <p>
              The styled text you generate using Font Generator belongs to you. You have full rights to use, modify, and distribute the text you create, for both personal and commercial purposes.
            </p>

            <h3>Unicode Characters</h3>
            <p>
              Font Generator uses Unicode characters, which are part of the Unicode Standard. These characters are not owned by Font Generator and are freely available for use according to the Unicode License.
            </p>

            <h2>Service Availability</h2>
            <p>
              We strive to keep Font Generator available 24/7, but we make no guarantees:
            </p>
            <ul>
              <li>The service is provided "as is" and "as available"</li>
              <li>We may suspend service for maintenance, updates, or improvements</li>
              <li>We reserve the right to modify or discontinue features without notice</li>
              <li>We are not liable for any downtime or service interruptions</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-900 rounded-2xl p-6 my-6 not-prose">
              <p className="text-muted-foreground">
                Font Generator is provided "as is" without warranties of any kind, either express or implied. We do not warrant that:
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>• The service will be uninterrupted or error-free</li>
                <li>• The results will be accurate or reliable</li>
                <li>• Any errors will be corrected</li>
                <li>• The service will meet your specific requirements</li>
              </ul>
            </div>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Font Generator and its creators shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or use</li>
              <li>Damages resulting from your use or inability to use the service</li>
              <li>Any problems with the styled text generated by our tool</li>
              <li>Issues arising from the use of generated text on third-party platforms</li>
            </ul>

            <h2>Third-Party Platforms</h2>
            <p>
              Font Generator generates Unicode text that works on most platforms (Facebook, Twitter, Instagram, etc.). However:
            </p>
            <ul>
              <li>We don't control third-party platforms and their Unicode support</li>
              <li>Platforms may change their Unicode support without notice</li>
              <li>Some platforms may filter or remove certain Unicode characters</li>
              <li>We are not responsible if generated text doesn't work on a specific platform</li>
            </ul>

            <h2>User Content and Conduct</h2>
            <p>
              You are solely responsible for the content you create using Font Generator. We do not:
            </p>
            <ul>
              <li>Monitor, review, or store the text you generate</li>
              <li>Take responsibility for how you use the generated text</li>
              <li>Endorse or approve any user-generated content</li>
            </ul>
            <p>
              You agree not to use Font Generator to create content that is:
            </p>
            <ul>
              <li>Illegal, harmful, or offensive</li>
              <li>Infringing on others' intellectual property rights</li>
              <li>Spam, scams, or fraudulent content</li>
              <li>Hateful, threatening, or harassing</li>
            </ul>

            <h2>Privacy</h2>
            <p>
              Your use of Font Generator is also governed by our <a href="/privacy" className="text-gradient-blue hover:underline">Privacy Policy</a>. Please review it to understand how we handle data.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of Font Generator after changes constitutes acceptance of the modified terms.
            </p>

            <p>
              Significant changes will be indicated by updating the "Last Updated" date at the top of this page.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to restrict or terminate your access to Font Generator at any time, without notice, for any reason, including but not limited to:
            </p>
            <ul>
              <li>Violation of these Terms of Service</li>
              <li>Abusive or excessive use that impacts service availability</li>
              <li>Automated scraping or other unauthorized access</li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Font Generator operates, without regard to its conflict of law provisions.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our <a href="/contact" className="text-gradient-blue hover:underline">contact page</a>.
            </p>

            <div className="bg-gradient-to-r from-gradient-blue/10 to-gradient-green/10 dark:from-gradient-blue/20 dark:to-gradient-green/20 border-2 border-gradient-blue dark:border-gradient-blue rounded-2xl p-6 my-6 not-prose">
              <p className="text-lg font-semibold mb-2">🤝 Our Promise</p>
              <p className="text-muted-foreground">
                These terms exist to protect both Font Generator and our users. We're committed to providing a free, reliable, and accessible service. Use it responsibly, and we'll continue to make it available for everyone.
              </p>
            </div>
          </div>
        </GradientSection>
      </div>
    </GradientBackground>
  );
}
