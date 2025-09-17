import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Apple, Dumbbell, Moon, Brain, Users, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Health Tips - BMI and Wellness Advice | BMI Calc",
  description: "Expert health tips and wellness advice for maintaining a healthy BMI. Get practical tips for nutrition, exercise, sleep, and mental health.",
  keywords: "health tips, wellness advice, BMI tips, healthy lifestyle, nutrition tips, exercise advice, sleep tips, mental health",
};

export default function HealthTipsPage() {
  const nutritionTips = [
    "Eat a balanced diet with plenty of fruits and vegetables",
    "Choose whole grains over refined carbohydrates",
    "Include lean proteins in every meal",
    "Limit processed foods and added sugars",
    "Stay hydrated by drinking plenty of water",
    "Control portion sizes to maintain healthy weight",
    "Eat regular meals to avoid overeating",
    "Include healthy fats like nuts and olive oil"
  ];

  const exerciseTips = [
    "Aim for at least 150 minutes of moderate exercise per week",
    "Include both cardio and strength training",
    "Start slowly and gradually increase intensity",
    "Find activities you enjoy to stay motivated",
    "Take the stairs instead of the elevator",
    "Walk or bike for short trips",
    "Stand up and move every hour if you sit a lot",
    "Make exercise a social activity with friends or family"
  ];

  const sleepTips = [
    "Aim for 7-9 hours of quality sleep each night",
    "Maintain a consistent sleep schedule",
    "Create a relaxing bedtime routine",
    "Keep your bedroom cool, dark, and quiet",
    "Avoid screens 1 hour before bedtime",
    "Limit caffeine in the afternoon and evening",
    "Exercise regularly but not too close to bedtime",
    "Avoid large meals and alcohol before sleep"
  ];

  const mentalHealthTips = [
    "Practice stress management techniques like meditation",
    "Stay connected with friends and family",
    "Set realistic goals and celebrate small wins",
    "Take breaks and practice self-care",
    "Seek professional help when needed",
    "Maintain a positive outlook and gratitude practice",
    "Engage in hobbies and activities you enjoy",
    "Limit social media and news consumption"
  ];

  const bmiSpecificTips = [
    "Monitor your BMI regularly but don't obsess over daily changes",
    "Focus on overall health rather than just BMI numbers",
    "Consult healthcare providers for personalized advice",
    "Remember that BMI is just one health indicator",
    "Consider other factors like muscle mass and body composition",
    "Set realistic weight goals based on your individual needs",
    "Celebrate non-scale victories like increased energy",
    "Focus on sustainable lifestyle changes rather than quick fixes"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Health & Wellness Tips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice for maintaining a healthy BMI and overall well-being. 
              Get practical tips for nutrition, exercise, sleep, and mental health.
            </p>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="nutrition" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="nutrition" className="flex items-center gap-2">
                <Apple className="h-4 w-4" />
                <span className="hidden sm:inline">Nutrition</span>
              </TabsTrigger>
              <TabsTrigger value="exercise" className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4" />
                <span className="hidden sm:inline">Exercise</span>
              </TabsTrigger>
              <TabsTrigger value="sleep" className="flex items-center gap-2">
                <Moon className="h-4 w-4" />
                <span className="hidden sm:inline">Sleep</span>
              </TabsTrigger>
              <TabsTrigger value="mental" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">Mental Health</span>
              </TabsTrigger>
              <TabsTrigger value="bmi" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">BMI Specific</span>
              </TabsTrigger>
            </TabsList>

            {/* Nutrition Tips */}
            <TabsContent value="nutrition">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="h-6 w-6 text-green-500" />
                    Nutrition Tips for Healthy BMI
                  </CardTitle>
                  <CardDescription>
                    Fuel your body with the right nutrients to maintain a healthy weight and BMI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {nutritionTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exercise Tips */}
            <TabsContent value="exercise">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-6 w-6 text-blue-500" />
                    Exercise Tips for Healthy BMI
                  </CardTitle>
                  <CardDescription>
                    Stay active with these practical exercise tips to support your BMI goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exerciseTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sleep Tips */}
            <TabsContent value="sleep">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-6 w-6 text-purple-500" />
                    Sleep Tips for Better Health
                  </CardTitle>
                  <CardDescription>
                    Quality sleep is essential for maintaining a healthy BMI and overall well-being.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sleepTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mental Health Tips */}
            <TabsContent value="mental">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-orange-500" />
                    Mental Health & Wellness
                  </CardTitle>
                  <CardDescription>
                    Take care of your mental health to support your overall well-being and BMI goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mentalHealthTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* BMI Specific Tips */}
            <TabsContent value="bmi">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-red-500" />
                    BMI-Specific Health Tips
                  </CardTitle>
                  <CardDescription>
                    Special considerations for understanding and working with your BMI.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bmiSpecificTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick Tips Summary */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-indigo-500" />
                  Quick Health Checklist
                </CardTitle>
                <CardDescription>
                  A daily checklist to help you maintain a healthy lifestyle and BMI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Daily Habits</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Drink 8 glasses of water</li>
                      <li>• Eat 5 servings of fruits/vegetables</li>
                      <li>• Take 10,000 steps</li>
                      <li>• Get 7-9 hours of sleep</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Weekly Goals</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 150 minutes of exercise</li>
                      <li>• 2 strength training sessions</li>
                      <li>• Plan healthy meals</li>
                      <li>• Practice stress management</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Monthly Check-ins</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Calculate your BMI</li>
                      <li>• Review your goals</li>
                      <li>• Schedule health checkup</li>
                      <li>• Celebrate progress</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-12 text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Calculate Your BMI?
              </h3>
              <p className="text-gray-600 mb-6">
                Use our free BMI calculator to get started on your health journey today.
              </p>
              <a 
                href="/" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Heart className="h-5 w-5" />
                Calculate My BMI
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
