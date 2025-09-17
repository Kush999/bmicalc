import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Calendar, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - BMI Calculator | BMI Calc",
  description: "Learn how we protect your privacy and handle data when using our BMI calculator. We are committed to your privacy and data security.",
  keywords: "privacy policy, data protection, BMI calculator privacy, user data, GDPR compliance",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect your data.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              Last updated: January 1, 2025
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-500" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy describes how BMI Calc ("we," "our," or "us") collects, uses, 
                and protects your information when you use our BMI calculator and related services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to protecting your privacy and ensuring the security of your personal 
                information. This policy explains our data practices and your rights regarding your information.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-800">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our BMI calculator is designed to work without collecting personal information. 
                  We do not require you to create an account or provide personal details to use our service.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>No account required:</strong> You can use our calculator anonymously</li>
                  <li>• <strong>No data storage:</strong> Your BMI calculations are not stored on our servers</li>
                  <li>• <strong>Local processing:</strong> All calculations happen in your browser</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3 text-gray-800">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may automatically collect certain technical information when you visit our website:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Usage data:</strong> Pages visited, time spent, clicks</li>
                  <li>• <strong>Device information:</strong> Browser type, operating system, device type</li>
                  <li>• <strong>Location data:</strong> General geographic location (country/region level)</li>
                  <li>• <strong>Analytics data:</strong> Website performance and usage statistics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Service provision:</strong> To provide and maintain our BMI calculator</li>
                <li>• <strong>Analytics:</strong> To understand how our website is used and improve user experience</li>
                <li>• <strong>Performance:</strong> To monitor and improve website performance</li>
                <li>• <strong>Security:</strong> To protect against fraud and ensure website security</li>
                <li>• <strong>Legal compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use the following third-party services that may collect information:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Google Analytics</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    We use Google Analytics to understand website usage. This service may collect 
                    cookies and usage data. You can opt out using Google's opt-out tools.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Google AdSense</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    We display advertisements through Google AdSense. This service may use cookies 
                    to show relevant ads based on your interests.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Vercel Analytics</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    We use Vercel Analytics for performance monitoring. This service collects 
                    anonymous usage data to help us improve our website.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>HTTPS encryption:</strong> All data transmission is encrypted</li>
                <li>• <strong>Secure hosting:</strong> Our website is hosted on secure, reputable platforms</li>
                <li>• <strong>Regular updates:</strong> We keep our systems updated with security patches</li>
                <li>• <strong>Access controls:</strong> Limited access to any collected data</li>
                <li>• <strong>Monitoring:</strong> Regular security monitoring and assessments</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Access:</strong> Request access to your personal information</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                <li>• <strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li>• <strong>Objection:</strong> Object to certain processing of your information</li>
                <li>• <strong>Withdrawal:</strong> Withdraw consent where applicable</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Essential cookies:</strong> Required for website functionality</li>
                <li>• <strong>Analytics cookies:</strong> Help us understand website usage</li>
                <li>• <strong>Advertising cookies:</strong> Used to show relevant advertisements</li>
                <li>• <strong>Preference cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                You can control cookies through your browser settings. Note that disabling certain 
                cookies may affect website functionality.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our BMI calculator is not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If you are a parent 
                or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For children and teenagers (ages 2-19), BMI should be calculated using age-appropriate 
                methods and interpreted by healthcare professionals.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of our service after any modifications to this Privacy Policy 
                constitutes your acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>privacy@bmicalc.fit</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We will respond to your inquiry within 48 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
