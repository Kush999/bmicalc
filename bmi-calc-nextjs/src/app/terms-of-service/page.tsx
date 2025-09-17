import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, Mail, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Terms of Service - BMI Calculator | BMI Calc",
  description: "Terms and conditions for using our BMI calculator. Please read these terms carefully before using our service.",
  keywords: "terms of service, terms and conditions, BMI calculator terms, user agreement, legal terms",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              Last updated: January 1, 2025
            </div>
          </div>

          {/* Acceptance of Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-500" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our BMI calculator and related 
                services (the "Service") operated by BMI Calc ("us", "we", or "our").
              </p>
            </CardContent>
          </Card>

          {/* Medical Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>IMPORTANT:</strong> The BMI calculator provided on this website is for 
                informational purposes only and is not intended to replace professional medical 
                advice, diagnosis, or treatment.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• BMI is a screening tool and has limitations</li>
                <li>• Results should not be used as the sole basis for health decisions</li>
                <li>• Always consult with a qualified healthcare provider</li>
                <li>• BMI may not be accurate for certain populations</li>
                <li>• Individual health assessment requires professional evaluation</li>
              </ul>
            </CardContent>
          </Card>

          {/* Use License */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily use our BMI calculator for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                When using our service, you agree to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide accurate information when using the calculator</li>
                <li>• Use the service only for lawful purposes</li>
                <li>• Not attempt to interfere with the service's operation</li>
                <li>• Respect the intellectual property rights of others</li>
                <li>• Not use the service to transmit harmful or malicious code</li>
                <li>• Comply with all applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prohibited Uses */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You may not use our service:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>• To submit false or misleading information</li>
                <li>• To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also 
                governs your use of the service, to understand our practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our service, you consent to the collection and use of information in 
                accordance with our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The service and its original content, features, and functionality are and will 
                remain the exclusive property of BMI Calc and its licensors. The service is 
                protected by copyright, trademark, and other laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our trademarks and trade dress may not be used in connection with any product 
                or service without our prior written consent.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer of Warranties */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The information on this website is provided on an "as is" basis. To the fullest 
                extent permitted by law, BMI Calc:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Excludes all representations and warranties relating to this website and its contents</li>
                <li>• Excludes all liability for damages arising out of or in connection with your use of this website</li>
                <li>• Makes no warranties about the accuracy, reliability, completeness, or timeliness of the information</li>
                <li>• Does not warrant that the website will be available at any particular time or location</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                In no event shall BMI Calc, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You agree to defend, indemnify, and hold harmless BMI Calc and its licensee and 
                licensors, and their employees, contractors, agents, officers and directors, from 
                and against any and all claims, damages, obligations, losses, liabilities, costs 
                or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach 
                the Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the service will cease immediately.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction 
                in which BMI Calc operates, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be 
                considered a waiver of those rights.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms 
                at any time. If a revision is material, we will try to provide at least 30 days 
                notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By continuing to access or use our service after those revisions become effective, 
                you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>legal@bmicalc.fit</span>
              </div>
            </CardContent>
          </Card>

          {/* Severability */}
          <Card className="text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Severability
              </h3>
              <p className="text-gray-600">
                If any provision of these Terms is held to be invalid or unenforceable by a court, 
                the remaining provisions of these Terms will remain in effect.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
