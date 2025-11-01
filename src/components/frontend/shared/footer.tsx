"use client";
import { appConfig } from "@/config";
import { Type } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gradient-blue to-gradient-purple flex items-center justify-center">
                <Type className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">{appConfig.appName}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Free Unicode font generator for social media and creative projects.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {appConfig.appName}
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Font Generator</a></li>
              <li><a href="/#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* More Tools Section */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4">More Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://discoverprofile.com/whatsmyname" className="hover:text-primary transition-colors flex items-center gap-2 text-sm text-muted-foreground" target="_blank" rel="noopener noreferrer">
              <img alt="" src="https://www.faviconextractor.com/favicon/discoverprofile.com" className="h-4 w-4 rounded" width={16} height={16} />
              WhatsMyName App
            </a>
            <a href="https://www.schemavalidator.com/" className="hover:text-primary transition-colors flex items-center gap-2 text-sm text-muted-foreground" target="_blank" rel="noopener noreferrer">
              <img alt="" src="https://www.faviconextractor.com/favicon/www.schemavalidator.com" className="h-4 w-4 rounded" width={16} height={16} />
              Schema Validator
            </a>
            <a href="https://www.serpchecking.com/" className="hover:text-primary transition-colors flex items-center gap-2 text-sm text-muted-foreground" target="_blank" rel="noopener noreferrer">
              <img alt="" src="https://www.faviconextractor.com/favicon/www.serpchecking.com" className="h-4 w-4 rounded" width={16} height={16} />
              SERP Checking
            </a>
            <a href="https://www.publisherlens.com/" className="hover:text-primary transition-colors flex items-center gap-2 text-sm text-muted-foreground" target="_blank" rel="noopener noreferrer">
              <img alt="" src="https://www.faviconextractor.com/favicon/www.publisherlens.com" className="h-4 w-4 rounded" width={16} height={16} />
              Advertising Platform
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              Made with <span className="text-red-500">❤️</span> for content creators worldwide
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              <span>•</span>
              <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
