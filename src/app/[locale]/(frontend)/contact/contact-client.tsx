"use client";

import { GradientBackground, GradientSection } from "@/components/ui/gradient-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you would replace this with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <GradientBackground variant="multi">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-white shadow-2xl mb-6">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <GradientSection variant="blue-purple">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-6 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-blue to-gradient-purple text-white flex items-center justify-center shadow-lg mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours.
                </p>
              </div>
            </GradientSection>

            <GradientSection variant="purple-pink">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-6 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-purple to-gradient-pink text-white flex items-center justify-center shadow-lg mb-4">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">We're Here to Help</h3>
                <p className="text-muted-foreground">
                  Whether you have questions about features, need technical support, or want to share feedback - we're listening.
                </p>
              </div>
            </GradientSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GradientSection variant="blue-purple">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-green-100 dark:bg-green-950/50 border-2 border-green-300 dark:border-green-800 text-green-700 dark:text-green-300">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or feedback..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="rounded-xl min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-2xl bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink hover:from-gradient-blue hover:via-gradient-purple hover:to-gradient-pink text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-6 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-gradient-blue hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </GradientSection>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="mt-16 text-center">
          <GradientSection variant="purple-pink">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h2>
              <p className="text-muted-foreground mb-6">
                Check out our FAQ section for answers to common questions about Font Generator.
              </p>
              <a
                href="/#faq"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-gradient-blue dark:hover:border-gradient-blue font-bold transition-all duration-300 hover:shadow-lg"
              >
                View FAQ
              </a>
            </div>
          </GradientSection>
        </div>
      </div>
    </GradientBackground>
  );
}
