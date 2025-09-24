"use client";

import { useState } from "react";

export default function useWizardState() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthdate: "",
    projectName: "",
    projectType: "",
    description: "",
    priority: "medium",
    features: [],
    timeline: "",
    budget: "",
    techStack: "",
    agreed: false
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step) => {
    if (step <= Math.max(...completedSteps, 1)) {
      setCurrentStep(step);
    }
  };

  const handleFinish = () => {
    console.log("Wizard completed with data:", formData);
    alert("Wizard completed successfully!");
  };

  return {
    currentStep,
    completedSteps,
    formData,
    setFormData,
    totalSteps,
    handleNext,
    handlePrevious,
    handleStepClick,
    handleFinish
  };
}