import { BMICalculator } from "@/components/bmi-calculator/bmi-calculator";
import { AdBanner } from "@/components/ads/ad-banner";
import { AdSidebar } from "@/components/ads/ad-sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Heart, TrendingUp, Shield, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Free BMI Calculator 2024
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Calculate your Body Mass Index instantly and discover your health status. 
            Get detailed health information and BMI categories.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Calculator className="w-4 h-4 mr-2" />
              Free & Accurate
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Instant Results
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Protected
            </Badge>
          </div>
        </div>
      </section>

      {/* Top Banner Ad */}
      <div className="container mx-auto px-4 mb-8">
        <AdBanner slot="1234567891" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* BMI Calculator */}
          <div className="lg:col-span-2">
            <BMICalculator />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sidebar Ad */}
            <AdSidebar slot="1234567890" />

            {/* BMI Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  About BMI
                </CardTitle>
                <CardDescription>
                  Understanding your Body Mass Index
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">BMI Categories:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-600">Underweight</span>
                      <span className="text-muted-foreground">&lt; 18.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Normal weight</span>
                      <span className="text-muted-foreground">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Overweight</span>
                      <span className="text-muted-foreground">25.0 - 29.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-600">Obese</span>
                      <span className="text-muted-foreground">≥ 30.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    BMI is a screening tool and should not replace professional medical advice.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Health Tips Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <p>• Maintain a balanced diet</p>
                  <p>• Exercise regularly</p>
                  <p>• Get adequate sleep</p>
                  <p>• Stay hydrated</p>
                  <p>• Consult healthcare providers</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <div className="container mx-auto px-4 mt-12 mb-8">
        <AdBanner slot="1234567892" />
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our BMI Calculator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <CardTitle>Accurate Calculations</CardTitle>
                <CardDescription>
                  Uses the standard BMI formula recommended by health organizations worldwide
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>Instant Results</CardTitle>
                <CardDescription>
                  Get your BMI calculation and health category in seconds
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your data stays on your device. No personal information is stored
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}