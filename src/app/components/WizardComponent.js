"use client";

import useWizardState from "../hooks/useWizardState.js";
import StepIndicator from "./wizard-steps/StepIndicator.js";
import PersonalInfoStep from "./wizard-steps/PersonalInfoStep.js";
import ProjectDetailsStep from "./wizard-steps/ProjectDetailsStep.js";
import RequirementsStep from "./wizard-steps/RequirementsStep.js";
import ReviewStep from "./wizard-steps/ReviewStep.js";

export default function WizardComponent({ wizardData }) {
  const {
    currentStep,
    completedSteps,
    formData,
    setFormData,
    totalSteps,
    handleNext,
    handlePrevious,
    handleStepClick,
    handleFinish
  } = useWizardState();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <ProjectDetailsStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <RequirementsStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <ReviewStep formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <ui5-title level="H2">Setup Wizard</ui5-title>

      <div style={{ marginTop: "2rem" }}>
        <ui5-progress-indicator
          value={Math.round((currentStep / totalSteps) * 100)}
          show-value
        ></ui5-progress-indicator>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <StepIndicator
          currentStep={currentStep}
          completedSteps={completedSteps}
          onStepClick={handleStepClick}
        />
      </div>

      <ui5-card style={{ marginTop: "2rem" }}>
        <div style={{ padding: "2rem", minHeight: "400px" }}>
          {renderCurrentStep()}
        </div>
      </ui5-card>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "space-between" }}>
        <div>
          {currentStep > 1 && (
            <ui5-button design="Transparent" icon="navigation-left-arrow" onClick={handlePrevious}>
              Previous
            </ui5-button>
          )}
        </div>
        <div>
          {currentStep < totalSteps ? (
            <ui5-button design="Emphasized" icon="navigation-right-arrow" icon-end onClick={handleNext}>
              Next
            </ui5-button>
          ) : (
            <ui5-button
              design="Positive"
              icon="accept"
              onClick={handleFinish}
              disabled={!formData.agreed}
            >
              Finish
            </ui5-button>
          )}
        </div>
      </div>
    </div>
  );
}