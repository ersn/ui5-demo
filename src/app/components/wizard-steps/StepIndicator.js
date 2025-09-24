"use client";

export default function StepIndicator({ currentStep, completedSteps, onStepClick }) {
  const steps = [
    { number: 1, label: "Personal Info" },
    { number: 2, label: "Project Details" },
    { number: 3, label: "Requirements" },
    { number: 4, label: "Review" }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem", padding: "0 2rem" }}>
      {steps.map((step, index) => (
        <div
          key={step.number}
          onClick={() => onStepClick(step.number)}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: step.number <= Math.max(...completedSteps, 1) ? "pointer" : "default",
            opacity: step.number <= currentStep ? 1 : 0.5
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: step.number === currentStep ? "#0854a0" : completedSteps.includes(step.number) ? "#107e3e" : "#e5e5e5",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              marginRight: "0.5rem"
            }}
          >
            {completedSteps.includes(step.number) && step.number !== currentStep ? "✓" : step.number}
          </div>
          <div>
            <div style={{ fontWeight: step.number === currentStep ? "bold" : "normal", fontSize: "0.9rem" }}>
              {step.label}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              style={{
                flex: 1,
                height: "2px",
                backgroundColor: completedSteps.includes(step.number) ? "#107e3e" : "#e5e5e5",
                margin: "0 1rem"
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}