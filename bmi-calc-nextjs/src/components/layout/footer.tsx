import Link from "next/link";
import { Calculator, Heart, FileText, HelpCircle, Mail, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">BMI Calc</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for health calculations and wellness information.
            </p>
          </div>

          {/* Health Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Health Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-bmi" className="text-muted-foreground hover:text-foreground transition-colors">
                  About BMI
                </Link>
              </li>
              <li>
                <Link href="/bmi-categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  BMI Categories
                </Link>
              </li>
              <li>
                <Link href="/health-tips" className="text-muted-foreground hover:text-foreground transition-colors">
                  Health Tips
                </Link>
              </li>
              <li>
                <Link href="/medical-disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                  Sitemap
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 BMI Calculator Pro. All rights reserved. | This tool is for informational purposes only and should not replace professional medical advice.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for your health</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
