import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, Heart, AlertTriangle, Info, TrendingUp } from "lucide-react";

export const metadata = {
  title: "About BMI - What is Body Mass Index? | BMI Calc",
  description: "Learn about BMI (Body Mass Index), how it's calculated, its importance for health, and its limitations. Complete guide to understanding BMI.",
  keywords: "BMI, body mass index, BMI calculation, BMI formula, health indicator, weight assessment, BMI guide",
};

export default function AboutBMIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About BMI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding Body Mass Index and its role in health assessment
            </p>
          </div>

          {/* What is BMI */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-blue-500" />
                What is BMI?
              </CardTitle>
              <CardDescription>
                Body Mass Index explained in simple terms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Body Mass Index (BMI) is a numerical value derived from a person's weight and height. 
                It's a widely used screening tool to categorize individuals into different weight categories 
                that may indicate potential health problems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                BMI provides a simple, quick, and inexpensive method to assess body fatness based on 
                population-level data. It's calculated by dividing a person's weight in kilograms by 
                the square of their height in meters.
              </p>
            </CardContent>
          </Card>

          {/* BMI Formula */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                BMI Formula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Standard BMI Formula:</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    BMI = Weight (kg) ÷ Height (m)²
                  </div>
                  <p className="text-sm text-gray-600">
                    or
                  </p>
                  <div className="text-2xl font-bold text-blue-600 mt-2">
                    BMI = (Weight (lbs) ÷ Height (in)²) × 703
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                The result is expressed in kg/m² and is used to categorize individuals into different weight ranges.
              </p>
            </CardContent>
          </Card>

          {/* BMI Categories */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                BMI Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-800">Underweight</span>
                    <Badge className="bg-blue-100 text-blue-800">BMI &lt; 18.5</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Normal weight</span>
                    <Badge className="bg-green-100 text-green-800">18.5 - 24.9</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-yellow-800">Overweight</span>
                    <Badge className="bg-yellow-100 text-yellow-800">25.0 - 29.9</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium text-red-800">Obese</span>
                    <Badge className="bg-red-100 text-red-800">≥ 30.0</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Importance of BMI */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-6 w-6 text-purple-500" />
                Why is BMI Important?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Health Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Quick health screening tool</li>
                    <li>• Identifies potential health risks</li>
                    <li>• Helps track weight changes over time</li>
                    <li>• Used by healthcare professionals worldwide</li>
                    <li>• Correlates with body fat percentage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Health Risks by Category:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Underweight:</strong> Malnutrition, osteoporosis</li>
                    <li>• <strong>Overweight:</strong> Heart disease, diabetes</li>
                    <li>• <strong>Obese:</strong> High blood pressure, stroke</li>
                    <li>• <strong>All categories:</strong> Regular monitoring recommended</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                BMI Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                While BMI is a useful screening tool, it has several limitations that should be considered:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">What BMI Doesn't Consider:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Muscle mass vs. fat mass</li>
                    <li>• Bone density</li>
                    <li>• Age and gender differences</li>
                    <li>• Ethnicity variations</li>
                    <li>• Distribution of body fat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Special Cases:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Athletes with high muscle mass</li>
                    <li>• Elderly individuals</li>
                    <li>• Pregnant women</li>
                    <li>• Children and teenagers</li>
                    <li>• People with certain medical conditions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* When to Consult a Doctor */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                When to Consult a Healthcare Provider
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                BMI is a starting point for health assessment. Consider consulting a healthcare provider if:
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• Your BMI falls outside the normal range</li>
                  <li>• You have concerns about your weight or health</li>
                  <li>• You're planning significant lifestyle changes</li>
                  <li>• You have a family history of weight-related health issues</li>
                  <li>• You're experiencing unexplained weight changes</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Calculate Your BMI?
              </h3>
              <p className="text-gray-600 mb-6">
                Use our free, accurate BMI calculator to get instant results and health insights.
              </p>
              <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Calculator className="h-5 w-5" />
                Calculate My BMI
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
