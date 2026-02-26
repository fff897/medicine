"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom" // Assuming Vite + React Router
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type SurveyAnswer = {
  intimacyTime?: string;       // Time/effort spent (analogous to hairTime)
  mainConcern?: string;        // Primary sexual/intimate health concern
  ageGroup?: string;
  frequency?: string;          // How often (common in sexual health surveys)
  satisfaction?: string;       // Overall satisfaction level (helps gauge need)
}

type StepConfig = {
  id: keyof SurveyAnswer | "complete";
  title: string;
  description?: string;
  options?: string[];
  field: keyof SurveyAnswer;
}

const steps: StepConfig[] = [
  {
    id: "intimacyTime",
    title: "How much time and effort do you typically put into your intimate/sexual routine?",
    description: "We offer solutions that fit easily into your lifestyle — whether quick or more involved.",
    options: ["Minimal / almost none", "5–15 minutes", "15+ minutes or very intentional"],
    field: "intimacyTime",
  },
  {
    id: "mainConcern",
    title: "What is your main sexual or intimate health concern right now?",
    description: "Select the one that bothers you the most — this helps us focus on the right support.",
    options: [
      "Low libido / low sex drive",
      "Difficulty getting or maintaining arousal / erection",
      "Premature ejaculation or lasting longer concerns",
      "Dryness, discomfort, or pain during intimacy",
      "Overall satisfaction or pleasure concerns",
      "Other (e.g., energy, confidence, recovery)",
    ],
    field: "mainConcern",
  },
  {
    id: "frequency",
    title: "How often do you currently engage in sexual or intimate activity?",
    description: "This helps us understand your baseline and recommend realistic options.",
    options: ["Rarely / less than once a month", "1–2 times per month", "1–2 times per week", "3+ times per week"],
    field: "frequency",
  },
  {
    id: "ageGroup",
    title: "Which age group do you belong to?",
    description: "Age influences common concerns and the most suitable recommendations.",
    options: ["Under 25", "25–34", "35–44", "45–54", "55+"],
    field: "ageGroup",
  },
  {
    id: "satisfaction",
    title: "How satisfied are you with your current sexual/intimate wellness?",
    description: "Be honest — this helps us tailor suggestions to improve your experience.",
    options: ["Very satisfied", "Somewhat satisfied", "Neutral", "Somewhat dissatisfied", "Very dissatisfied"],
    field: "satisfaction",
  },
];

export default function SurveyPage() {
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<SurveyAnswer>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentStep = steps[stepIndex]
  const isLastStep = stepIndex === steps.length - 1
  const isFirstStep = stepIndex === 0
  const selected = answers[currentStep?.field as keyof SurveyAnswer]

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep.field]: value }))
  }

  const goNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1)
    } else {
      console.log("Survey completed with:", answers)
      setIsSubmitted(true)
    }
  }

  const goBack = () => {
    if (stepIndex > 0) {
      setStepIndex((i) => i - 1)
    }
  }

  // Navigate to index.tsx (root)
  const handleReturnHome = () => {
    navigate("/")
  }

  const canGoNext = !!selected

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        console.log("Auto-redirect logic could trigger here")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  return (
    <div className="min-h-screen bg-[#f3f3f1] flex items-center justify-center px-5 py-10 md:px-6 md:py-12">
      <div className="w-full max-w-xl space-y-8 relative">
        
        {/* Brand logo */}
        <div className="text-5xl font-serif text-[#6f3900] text-center tracking-tight">
          wrp
        </div>

        {/* Header Row: Back button and Step Counter */}
        {/* Only visible if NOT submitted */}
        {!isSubmitted && (
          <div className="flex items-center justify-between px-2">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={isFirstStep}
              className={cn(isFirstStep && "invisible")}
            >
              Back
            </Button>

            <div className="text-sm text-neutral-500 font-medium">
              Step {stepIndex + 1} of {steps.length}
            </div>

            <div className="w-20" /> {/* horizontal spacer */}
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key={`step-${stepIndex}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-neutral-900">
                  {currentStep.title}
                </h1>
                {currentStep.description && (
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {currentStep.description}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {currentStep.options?.map((option) => (
                  <Card
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={cn(
                      "cursor-pointer rounded-2xl border px-6 py-7 text-lg font-medium transition-all duration-300",
                      "hover:border-neutral-400 hover:shadow-sm active:scale-[0.985]",
                      selected === option
                        ? "border-amber-800/70 bg-amber-50/40 ring-1 ring-amber-800/30"
                        : "border-neutral-200/80 bg-white"
                    )}
                  >
                    {option}
                  </Card>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Thank You Screen */
            <motion.div
              key="completion"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-center py-16 space-y-12"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2, type: "spring", stiffness: 100, damping: 12 }}
                className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-amber-800/10 to-amber-600/5 flex items-center justify-center border border-amber-800/20 shadow-[0_8px_40px_-12px_rgba(120,53,15,0.2)]"
              >
                <motion.span
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 1.1, type: "spring" }}
                  className="text-7xl text-amber-900 font-light"
                >
                  ✓
                </motion.span>
              </motion.div>

              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-neutral-900 tracking-wide">
                  Thank You
                </h2>
                <p className="text-xl text-neutral-700 max-w-md mx-auto leading-relaxed">
                  Your answers are being carefully reviewed to craft your perfect treatment.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="pt-8"
              >
                <Button
                  onClick={handleReturnHome}
                  className="h-14 px-10 rounded-full text-base font-medium bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 shadow-lg"
                >
                  Return to Start
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Navigation: Only visible during the survey */}
        <AnimatePresence>
          {!isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="pt-4"
            >
              <Button
                onClick={goNext}
                disabled={!canGoNext}
                className={cn(
                  "w-full h-14 rounded-full text-base font-medium transition-all",
                  isLastStep 
                    ? "bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 shadow-md" 
                    : "",
                  !canGoNext && "opacity-50 cursor-not-allowed"
                )}
              >
                {isLastStep ? "Finish & Get Your Recommendations" : "Continue"}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}