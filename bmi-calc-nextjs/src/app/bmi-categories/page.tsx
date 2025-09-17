import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, AlertTriangle, CheckCircle, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "BMI Categories - Understanding BMI Ranges | BMI Calc",
  description: "Complete guide to BMI categories: Underweight, Normal weight, Overweight, and Obese. Learn about health implications and recommended actions for each BMI range.",
  keywords: "BMI categories, BMI ranges, underweight, normal weight, overweight, obese, BMI chart, health implications",
};

export default function BMICategoriesPage() {
  const categories = [
    {
      name: "Underweight",
      range: "BMI < 18.5",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
      icon: AlertTriangle,
      description: "You may be underweight for your height",
      healthImplications: [
        "Malnutrition risk",
        "Weakened immune system",
        "Osteoporosis risk",
        "Fertility issues",
        "Anemia risk"
      ],
      recommendations: [
        "Consult a healthcare provider",
        "Increase caloric intake",
        "Focus on nutrient-dense foods",
        "Consider strength training",
        "Monitor weight gain progress"
      ],
      percentage: 15
    },
    {
      name: "Normal Weight",
      range: "BMI 18.5 - 24.9",
      color: "green",
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      borderColor: "border-green-200",
      icon: CheckCircle,
      description: "You're in a healthy weight range",
      healthImplications: [
        "Lower disease risk",
        "Better mobility",
        "Improved energy levels",
        "Better sleep quality",
        "Reduced joint stress"
      ],
      recommendations: [
        "Maintain current lifestyle",
        "Regular physical activity",
        "Balanced diet",
        "Regular health checkups",
        "Stay hydrated"
      ],
      percentage: 60
    },
    {
      name: "Overweight",
      range: "BMI 25.0 - 29.9",
      color: "yellow",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-200",
      icon: TrendingUp,
      description: "You may be carrying excess weight",
      healthImplications: [
        "Increased heart disease risk",
        "Type 2 diabetes risk",
        "High blood pressure risk",
        "Sleep apnea risk",
        "Joint problems"
      ],
      recommendations: [
        "Consult a healthcare provider",
        "Moderate calorie reduction",
        "Increase physical activity",
        "Focus on whole foods",
        "Set realistic weight loss goals"
      ],
      percentage: 20
    },
    {
      name: "Obese",
      range: "BMI ≥ 30.0",
      color: "red",
      bgColor: "bg-red-50",
      textColor: "text-red-800",
      borderColor: "border-red-200",
      icon: Heart,
      description: "You may be significantly overweight",
      healthImplications: [
        "High heart disease risk",
        "Type 2 diabetes risk",
        "Stroke risk",
        "Certain cancers risk",
        "Severe joint problems"
      ],
      recommendations: [
        "Immediate medical consultation",
        "Structured weight loss program",
        "Regular exercise routine",
        "Dietary counseling",
        "Consider bariatric surgery if appropriate"
      ],
      percentage: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BMI Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding BMI ranges and their health implications
            </p>
          </div>

          {/* BMI Scale Visualization */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center">BMI Scale Overview</CardTitle>
              <CardDescription className="text-center">
                Visual representation of BMI categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>0</span>
                  <span>15</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40+</span>
                </div>
                <div className="relative h-8 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <div className="w-[15%] bg-blue-500"></div>
                    <div className="w-[60%] bg-green-500"></div>
                    <div className="w-[20%] bg-yellow-500"></div>
                    <div className="w-[5%] bg-red-500"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className={`${category.bgColor} ${category.borderColor} border-2`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-2 ${category.textColor}`}>
                      <IconComponent className="h-6 w-6" />
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold">
                      {category.range}
                    </CardDescription>
                    <p className="text-gray-700">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Health Implications */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Health Implications:</h4>
                      <ul className="space-y-1">
                        {category.healthImplications.map((implication, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            {implication}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Recommended Actions:</h4>
                      <ul className="space-y-1">
                        {category.recommendations.map((recommendation, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            {recommendation}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Population Percentage */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Population Distribution</span>
                        <span className="text-sm text-gray-600">{category.percentage}%</span>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Special Considerations */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-purple-500" />
                Special Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Age Groups:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Children (2-19):</strong> Use BMI-for-age percentiles</li>
                    <li>• <strong>Adults (20-65):</strong> Standard BMI categories apply</li>
                    <li>• <strong>Elderly (65+):</strong> May need adjusted ranges</li>
                    <li>• <strong>Pregnant women:</strong> BMI not applicable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Ethnicity Variations:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Asian populations:</strong> Lower BMI thresholds</li>
                    <li>• <strong>African populations:</strong> May have different risks</li>
                    <li>• <strong>Hispanic populations:</strong> Consider cultural factors</li>
                    <li>• <strong>All groups:</strong> Individual assessment needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BMI Limitations */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                Important Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                BMI is a screening tool and has limitations. It doesn't distinguish between muscle and fat mass, 
                and may not be accurate for certain populations.
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-gray-800">When BMI May Not Be Accurate:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Athletes with high muscle mass</li>
                  <li>• Elderly individuals with muscle loss</li>
                  <li>• People with certain medical conditions</li>
                  <li>• Individuals with significant edema</li>
                  <li>• Those with amputations or physical disabilities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Calculate Your BMI Category
              </h3>
              <p className="text-gray-600 mb-6">
                Find out which BMI category you fall into and get personalized health insights.
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
