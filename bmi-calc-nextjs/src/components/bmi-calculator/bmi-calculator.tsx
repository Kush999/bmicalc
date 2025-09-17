"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator, Loader2, AlertCircle, CheckCircle } from "lucide-react";

interface BMIResult {
  bmi: number;
  category: string;
  description: string;
  healthRange: string;
  color: string;
}

export function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Validation
  useEffect(() => {
    const validateInputs = () => {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      const inchesNum = parseFloat(inches);

      let valid = true;
      let errorMessage = "";

      // Weight validation
      if (!weight.trim() || isNaN(weightNum) || weightNum <= 0) {
        valid = false;
        if (!weight.trim()) {
          errorMessage = "Please enter your weight";
        } else {
          errorMessage = "Weight must be a positive number";
        }
      } else if (weightNum > 1000) {
        valid = false;
        errorMessage = "Weight cannot exceed 1000 kg/lbs";
      }

      // Height validation
      if (valid) {
        if (!height.trim() || isNaN(heightNum) || heightNum <= 0) {
          valid = false;
          if (!height.trim()) {
            errorMessage = "Please enter your height";
          } else {
            errorMessage = "Height must be a positive number";
          }
        } else if (heightUnit === "cm" && (heightNum < 50 || heightNum > 300)) {
          valid = false;
          errorMessage = "Height must be between 50-300 cm";
        } else if (heightUnit === "ft" && (heightNum < 1 || heightNum > 10)) {
          valid = false;
          errorMessage = "Height must be between 1-10 feet";
        }

        // Inches validation for feet/inches
        if (valid && heightUnit === "ft") {
          if (isNaN(inchesNum) || inchesNum < 0 || inchesNum > 11) {
            valid = false;
            errorMessage = "Inches must be between 0-11";
          }
        }
      }

      setIsValid(valid);
      setError(errorMessage);
    };

    validateInputs();
  }, [weight, height, inches, heightUnit]);

  const calculateBMI = () => {
    if (!isValid) return;

    setIsLoading(true);
    setError("");

    // Simulate calculation delay for better UX
    setTimeout(() => {
      try {
        let weightKg = parseFloat(weight);
        let heightM = parseFloat(height);

        // Convert weight to kg if needed
        if (weightUnit === "lbs") {
          weightKg = weightKg * 0.453592;
        }

        // Convert height to meters
        if (heightUnit === "cm") {
          heightM = heightM / 100;
        } else {
          // feet and inches to meters
          const inchesTotal = parseFloat(inches) || 0;
          heightM = (heightM * 12 + inchesTotal) * 0.0254;
        }

        const bmi = weightKg / (heightM * heightM);
        const category = getBMICategory(bmi);
        const description = getBMIDescription(category);
        const healthRange = getHealthRange(category);
        const color = getBMIColor(category);

        setResult({
          bmi: Math.round(bmi * 10) / 10,
          category,
          description,
          healthRange,
          color,
        });

        // Track calculation
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "bmi_calculation", {
            bmi_value: bmi.toFixed(1),
            bmi_category: category,
            weight_unit: weightUnit,
            height_unit: heightUnit,
          });
        }
      } catch (error) {
        setError("An error occurred during calculation. Please try again.");
        console.error("BMI Calculation Error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const getBMIDescription = (category: string): string => {
    const descriptions = {
      "Underweight": "You may need to gain weight. Consider consulting a healthcare provider.",
      "Normal weight": "Great! You're in a healthy weight range. Keep up the good work!",
      "Overweight": "Consider making lifestyle changes to reach a healthier weight.",
      "Obese": "It's recommended to consult with a healthcare provider about weight management.",
    };
    return descriptions[category as keyof typeof descriptions] || "";
  };

  const getHealthRange = (category: string): string => {
    const ranges = {
      "Underweight": "BMI < 18.5",
      "Normal weight": "BMI 18.5 - 24.9",
      "Overweight": "BMI 25.0 - 29.9",
      "Obese": "BMI ≥ 30.0",
    };
    return ranges[category as keyof typeof ranges] || "";
  };

  const getBMIColor = (category: string): string => {
    const colors = {
      "Underweight": "bg-blue-100 text-blue-800 border-blue-200",
      "Normal weight": "bg-green-100 text-green-800 border-green-200",
      "Overweight": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Obese": "bg-red-100 text-red-800 border-red-200",
    };
    return colors[category as keyof typeof colors] || "";
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setInches("");
    setResult(null);
    setError("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calculator className="h-6 w-6" />
            Calculate Your BMI
          </CardTitle>
          <CardDescription>
            Enter your weight and height to calculate your Body Mass Index
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Weight Input */}
          <div className="space-y-2">
            <Label htmlFor="weight">Weight</Label>
            <div className="flex gap-2">
              <Input
                id="weight"
                type="number"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="0"
                max="1000"
                step="0.1"
                className="flex-1"
              />
              <Select value={weightUnit} onValueChange={setWeightUnit}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="lbs">lbs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Height Input */}
          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <div className="flex gap-2">
              <Input
                id="height"
                type="number"
                placeholder={heightUnit === "cm" ? "Height in cm" : "Feet"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="0"
                max={heightUnit === "cm" ? "300" : "10"}
                step="0.1"
                className="flex-1"
              />
              <Select value={heightUnit} onValueChange={setHeightUnit}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="ft">ft/in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Inches Input (for feet/inches) */}
          {heightUnit === "ft" && (
            <div className="space-y-2">
              <Label htmlFor="inches">Inches</Label>
              <Input
                id="inches"
                type="number"
                placeholder="Inches"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                min="0"
                max="11"
                step="1"
                className="w-full"
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={calculateBMI}
              disabled={!isValid || isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate BMI
                </>
              )}
            </Button>
            <Button variant="outline" onClick={resetCalculator}>
              Reset
            </Button>
          </div>

          {/* Result Display */}
          {result && (
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">
                      {result.bmi}
                    </div>
                    <div className="text-sm text-muted-foreground">kg/m²</div>
                  </div>
                  
                  <Badge className={`text-sm px-4 py-2 ${result.color}`}>
                    {result.category}
                  </Badge>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {result.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {result.healthRange}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
