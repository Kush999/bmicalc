import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Heart, FileText, Phone, Calendar } from "lucide-react";

export const metadata = {
  title: "Medical Disclaimer - BMI Calculator | BMI Calc",
  description: "Important medical disclaimer for BMI calculator usage. This tool is for informational purposes only and should not replace professional medical advice.",
  keywords: "medical disclaimer, BMI calculator disclaimer, health information, medical advice, healthcare provider",
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Medical Disclaimer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important information about the limitations of BMI and when to seek professional medical advice.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              Last updated: January 1, 2025
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>IMPORTANT:</strong> This BMI calculator is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment.
            </AlertDescription>
          </Alert>

          {/* General Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-500" />
                General Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The information provided by this BMI calculator is intended for general informational purposes only. 
                It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Always seek the advice of your physician or other qualified health provider with any questions 
                you may have regarding a medical condition or health objectives.
              </p>
            </CardContent>
          </Card>

          {/* BMI Limitations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                BMI Limitations and Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                BMI is a screening tool with several important limitations that users should understand:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">What BMI Doesn't Measure:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Muscle mass vs. fat mass:</strong> BMI cannot distinguish between muscle and fat</li>
                    <li>• <strong>Body fat distribution:</strong> Where fat is stored (waist, hips, etc.)</li>
                    <li>• <strong>Bone density:</strong> Bone mass affects weight but not health risk</li>
                    <li>• <strong>Age and gender differences:</strong> BMI interpretation varies by demographics</li>
                    <li>• <strong>Ethnicity variations:</strong> Different populations may have different risk thresholds</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">When BMI May Not Be Accurate:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Athletes:</strong> High muscle mass can result in high BMI despite low body fat</li>
                    <li>• <strong>Elderly individuals:</strong> Age-related muscle loss may affect BMI accuracy</li>
                    <li>• <strong>Pregnant women:</strong> BMI is not applicable during pregnancy</li>
                    <li>• <strong>Children and teenagers:</strong> Different BMI calculations and interpretations apply</li>
                    <li>• <strong>People with certain medical conditions:</strong> Edema, ascites, or other conditions</li>
                    <li>• <strong>Individuals with amputations:</strong> Height and weight measurements may be affected</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Seek Medical Advice */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                When to Consult a Healthcare Provider
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You should consult with a qualified healthcare provider if:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">BMI-Related Concerns:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Your BMI falls outside the normal range</li>
                    <li>• You have concerns about your weight or health</li>
                    <li>• You're planning significant lifestyle changes</li>
                    <li>• You have a family history of weight-related health issues</li>
                    <li>• You're experiencing unexplained weight changes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">General Health Concerns:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• You have existing medical conditions</li>
                    <li>• You're taking medications that affect weight</li>
                    <li>• You have symptoms of health problems</li>
                    <li>• You're considering weight loss surgery</li>
                    <li>• You need personalized health advice</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Medical Advice */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Professional Medical Advice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                A qualified healthcare provider can:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide personalized health assessments based on your individual circumstances</li>
                <li>• Consider factors beyond BMI, such as medical history, family history, and lifestyle</li>
                <li>• Recommend appropriate tests and screenings</li>
                <li>• Develop personalized treatment plans if needed</li>
                <li>• Monitor your health over time and adjust recommendations as needed</li>
                <li>• Address any concerns or questions you may have about your health</li>
              </ul>
            </CardContent>
          </Card>

          {/* Emergency Situations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Emergency Situations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                If you experience any of the following, seek immediate medical attention:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Severe chest pain or difficulty breathing</li>
                <li>• Signs of stroke (sudden weakness, numbness, or difficulty speaking)</li>
                <li>• Severe abdominal pain</li>
                <li>• Signs of severe dehydration or electrolyte imbalance</li>
                <li>• Any other medical emergency</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 font-semibold">
                  In case of emergency, call your local emergency number immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* No Liability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>No Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                BMI Calc and its operators:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Do not provide medical advice or diagnosis</li>
                <li>• Are not responsible for any health decisions made based on BMI results</li>
                <li>• Do not guarantee the accuracy of BMI calculations</li>
                <li>• Are not liable for any health outcomes related to BMI interpretation</li>
                <li>• Recommend consulting healthcare providers for medical advice</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Questions or Concerns?
              </h3>
              <p className="text-gray-600 mb-6">
                If you have questions about this medical disclaimer or our BMI calculator, 
                please contact us or consult with a healthcare provider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>Contact your healthcare provider</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FileText className="h-5 w-5" />
                  <span>Read our Terms of Service</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
