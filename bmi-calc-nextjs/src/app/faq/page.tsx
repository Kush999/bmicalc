import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Calculator, Heart, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "BMI Calculator FAQ - Frequently Asked Questions | BMI Calc",
  description: "Find answers to common questions about BMI calculation, categories, health implications, and our BMI calculator tool.",
  keywords: "BMI FAQ, BMI questions, BMI calculator help, BMI calculation questions, BMI health questions",
};

export default function FAQPage() {
  const faqData = [
    {
      category: "General BMI Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is BMI and how is it calculated?",
          answer: "BMI (Body Mass Index) is a numerical value derived from a person's weight and height. It's calculated by dividing weight in kilograms by the square of height in meters (BMI = kg/m²). For imperial units, the formula is (weight in pounds / height in inches²) × 703."
        },
        {
          question: "Is BMI an accurate measure of health?",
          answer: "BMI is a useful screening tool for population-level health assessment, but it has limitations. It doesn't distinguish between muscle and fat mass, and may not be accurate for athletes, elderly individuals, or people with certain medical conditions. It's best used as a starting point for health discussions with healthcare providers."
        },
        {
          question: "What are the different BMI categories?",
          answer: "BMI categories are: Underweight (BMI < 18.5), Normal weight (BMI 18.5-24.9), Overweight (BMI 25.0-29.9), and Obese (BMI ≥ 30.0). These categories are based on population studies and health risk associations."
        },
        {
          question: "Should I be concerned if my BMI is outside the normal range?",
          answer: "If your BMI falls outside the normal range, it's a good idea to discuss this with a healthcare provider. They can help you understand what this means for your individual health and provide personalized guidance based on your overall health status, lifestyle, and risk factors."
        }
      ]
    },
    {
      category: "Using Our Calculator",
      icon: Calculator,
      questions: [
        {
          question: "How accurate is your BMI calculator?",
          answer: "Our BMI calculator uses the standard BMI formula recommended by the World Health Organization and other health organizations. It provides accurate calculations based on the weight and height values you enter. The accuracy of your BMI result depends on the accuracy of the measurements you input."
        },
        {
          question: "What units can I use for weight and height?",
          answer: "You can use both metric and imperial units. For weight, you can choose between kilograms (kg) or pounds (lbs). For height, you can choose between centimeters (cm) or feet and inches (ft/in). The calculator automatically converts between units for accurate BMI calculation."
        },
        {
          question: "Do I need to create an account to use the calculator?",
          answer: "No, our BMI calculator is completely free to use without requiring any account creation or personal information. All calculations are performed locally in your browser, ensuring your privacy and data security."
        },
        {
          question: "Can I save my BMI results?",
          answer: "Our calculator doesn't store your results automatically. However, you can take a screenshot or write down your results if you want to keep track of them over time. We recommend consulting with a healthcare provider for proper health monitoring."
        }
      ]
    },
    {
      category: "Health and BMI",
      icon: Heart,
      questions: [
        {
          question: "What health risks are associated with different BMI ranges?",
          answer: "Underweight (BMI < 18.5) may increase risk of malnutrition, weakened immune system, and osteoporosis. Normal weight (18.5-24.9) is associated with lower health risks. Overweight (25-29.9) increases risk of heart disease, diabetes, and high blood pressure. Obese (≥30) significantly increases risk of serious health conditions including heart disease, stroke, and certain cancers."
        },
        {
          question: "Can BMI be different for different ethnicities?",
          answer: "Yes, BMI thresholds may need adjustment for different ethnic groups. For example, Asian populations may have higher health risks at lower BMI values, so some organizations recommend lower BMI thresholds for these populations. It's important to discuss this with healthcare providers who understand these variations."
        },
        {
          question: "Is BMI applicable to children and teenagers?",
          answer: "BMI for children and teenagers (ages 2-19) is calculated differently using BMI-for-age percentiles rather than fixed categories. This accounts for normal growth patterns and body composition changes during development. Our calculator is designed for adults aged 20 and older."
        },
        {
          question: "What should I do if my BMI indicates I'm overweight or obese?",
          answer: "If your BMI indicates overweight or obesity, consider consulting with a healthcare provider for personalized advice. They can help you develop a safe and effective plan that may include dietary changes, increased physical activity, and other lifestyle modifications. Remember that BMI is just one factor in overall health assessment."
        }
      ]
    },
    {
      category: "Limitations and Considerations",
      icon: AlertTriangle,
      questions: [
        {
          question: "Why might BMI not be accurate for me?",
          answer: "BMI may not be accurate if you have high muscle mass (athletes), are elderly with muscle loss, have certain medical conditions affecting body composition, or have significant edema. BMI also doesn't account for where body fat is distributed, which can be important for health risk assessment."
        },
        {
          question: "Should I use BMI if I'm pregnant?",
          answer: "BMI is not recommended for pregnant women as it doesn't account for the weight of the developing baby, placenta, and increased fluid volume. Healthcare providers use different methods to monitor healthy weight gain during pregnancy."
        },
        {
          question: "How often should I check my BMI?",
          answer: "For most adults, checking BMI every few months is sufficient unless you're actively trying to change your weight. If you're working with a healthcare provider on weight management, they may recommend more frequent monitoring. Remember that BMI is just one tool in overall health assessment."
        },
        {
          question: "What other measurements should I consider along with BMI?",
          answer: "Consider waist circumference, body fat percentage, muscle mass, blood pressure, cholesterol levels, blood sugar levels, and overall fitness level. These measurements together provide a more complete picture of your health than BMI alone. A healthcare provider can help you understand how these measurements relate to your overall health."
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(qa => ({
        "@type": "Question",
        "name": qa.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": qa.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about BMI calculation and our calculator tool
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {faqData.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <Card key={sectionIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-6 w-6 text-blue-500" />
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((qa, qaIndex) => (
                        <AccordionItem key={qaIndex} value={`item-${sectionIndex}-${qaIndex}`}>
                          <AccordionTrigger className="text-left">
                            {qa.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {qa.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Section */}
          <Card className="mt-12 text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer you're looking for, feel free to reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <HelpCircle className="h-5 w-5" />
                  Contact Us
                </a>
                <a 
                  href="/" 
                  className="inline-flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Calculator className="h-5 w-5" />
                  Try Our Calculator
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </div>
  );
}
