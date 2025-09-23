"use client";

import { useState } from "react";


export default function WizardComponent({ wizardData }) {
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

  const renderStepIndicator = () => (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem", padding: "0 2rem" }}>
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          onClick={() => handleStepClick(step)}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: step <= Math.max(...completedSteps, 1) ? "pointer" : "default",
            opacity: step <= currentStep ? 1 : 0.5
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: step === currentStep ? "#0854a0" : completedSteps.includes(step) ? "#107e3e" : "#e5e5e5",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              marginRight: "0.5rem"
            }}
          >
            {completedSteps.includes(step) && step !== currentStep ? "✓" : step}
          </div>
          <div>
            <div style={{ fontWeight: step === currentStep ? "bold" : "normal", fontSize: "0.9rem" }}>
              {step === 1 && "Personal Info"}
              {step === 2 && "Project Details"}
              {step === 3 && "Requirements"}
              {step === 4 && "Review"}
            </div>
          </div>
          {step < 4 && (
            <div
              style={{
                flex: 1,
                height: "2px",
                backgroundColor: completedSteps.includes(step) ? "#107e3e" : "#e5e5e5",
                margin: "0 1rem"
              }}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ui5-message-strip design="Information">
        Please provide your personal information
      </ui5-message-strip>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <ui5-label for="firstName" required>First Name:</ui5-label>
          <ui5-input
            id="firstName"
            placeholder="Enter your first name"
            style={{ width: "100%" }}
            value={formData.firstName}
            onInput={(e) => setFormData({ ...formData, firstName: e.target.value })}
          ></ui5-input>
        </div>
        <div>
          <ui5-label for="lastName" required>Last Name:</ui5-label>
          <ui5-input
            id="lastName"
            placeholder="Enter your last name"
            style={{ width: "100%" }}
            value={formData.lastName}
            onInput={(e) => setFormData({ ...formData, lastName: e.target.value })}
          ></ui5-input>
        </div>
      </div>

      <div>
        <ui5-label for="email" required>Email:</ui5-label>
        <ui5-input
          id="email"
          type="Email"
          placeholder="Enter your email"
          style={{ width: "100%" }}
          value={formData.email}
          onInput={(e) => setFormData({ ...formData, email: e.target.value })}
        ></ui5-input>
      </div>

      <div>
        <ui5-label for="phone">Phone Number:</ui5-label>
        <ui5-input
          id="phone"
          type="Tel"
          placeholder="Enter your phone number"
          style={{ width: "100%" }}
          value={formData.phone}
          onInput={(e) => setFormData({ ...formData, phone: e.target.value })}
        ></ui5-input>
      </div>

      <div>
        <ui5-label for="birthdate">Date of Birth:</ui5-label>
        <ui5-date-picker
          id="birthdate"
          style={{ width: "100%" }}
          value={formData.birthdate}
          onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
        ></ui5-date-picker>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ui5-message-strip design="Information">
        Project Configuration - Use the accordion sections below
      </ui5-message-strip>

      <ui5-panel header-text="Basic Information" collapsed>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
          <div>
            <ui5-label for="projectName" required>Project Name:</ui5-label>
            <ui5-input
              id="projectName"
              placeholder="Enter project name"
              style={{ width: "100%" }}
              value={formData.projectName}
              onInput={(e) => setFormData({ ...formData, projectName: e.target.value })}
            ></ui5-input>
          </div>

          <div>
            <ui5-label for="projectType" required>Project Type:</ui5-label>
            <ui5-select
              id="projectType"
              style={{ width: "100%" }}
              onChange={(e) => setFormData({ ...formData, projectType: e.detail.selectedOption.textContent })}
            >
              <ui5-option>Web Application</ui5-option>
              <ui5-option>Mobile Application</ui5-option>
              <ui5-option>Desktop Application</ui5-option>
              <ui5-option>API Service</ui5-option>
            </ui5-select>
          </div>
        </div>
      </ui5-panel>

      <ui5-panel header-text="Project Details" collapsed>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
          <div>
            <ui5-label for="description">Project Description:</ui5-label>
            <ui5-textarea
              id="description"
              placeholder="Describe your project"
              rows={4}
              style={{ width: "100%" }}
              value={formData.description}
              onInput={(e) => setFormData({ ...formData, description: e.target.value })}
            ></ui5-textarea>
          </div>

          <div>
            <ui5-label>Priority Level:</ui5-label>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <ui5-radio-button
                name="priority"
                text="Low"
                onChange={() => setFormData({ ...formData, priority: "low" })}
              ></ui5-radio-button>
              <ui5-radio-button
                name="priority"
                text="Medium"
                checked
                onChange={() => setFormData({ ...formData, priority: "medium" })}
              ></ui5-radio-button>
              <ui5-radio-button
                name="priority"
                text="High"
                onChange={() => setFormData({ ...formData, priority: "high" })}
              ></ui5-radio-button>
            </div>
          </div>
        </div>
      </ui5-panel>

      <ui5-panel header-text="Technical Requirements" collapsed>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
          <div>
            <ui5-label>Required Features:</ui5-label>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
              <ui5-checkbox text="User Authentication"></ui5-checkbox>
              <ui5-checkbox text="Database Integration"></ui5-checkbox>
              <ui5-checkbox text="API Integration"></ui5-checkbox>
              <ui5-checkbox text="Real-time Updates"></ui5-checkbox>
            </div>
          </div>

          <div>
            <ui5-label for="techStack">Technology Stack:</ui5-label>
            <ui5-select
              id="techStack"
              style={{ width: "100%" }}
              onChange={(e) => setFormData({ ...formData, techStack: e.detail.selectedOption.textContent })}
            >
              <ui5-option>React/Next.js</ui5-option>
              <ui5-option>Vue.js/Nuxt.js</ui5-option>
              <ui5-option>Angular</ui5-option>
              <ui5-option>Svelte/SvelteKit</ui5-option>
            </ui5-select>
          </div>
        </div>
      </ui5-panel>
    </div>
  );

  const renderStep3 = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ui5-message-strip design="Information">
        Select additional requirements
      </ui5-message-strip>

      <div>
        <ui5-label>Select Features:</ui5-label>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <ui5-checkbox text="User Authentication"></ui5-checkbox>
          <ui5-checkbox text="Database Integration"></ui5-checkbox>
          <ui5-checkbox text="Payment Processing"></ui5-checkbox>
          <ui5-checkbox text="Email Notifications"></ui5-checkbox>
          <ui5-checkbox text="Analytics Dashboard"></ui5-checkbox>
          <ui5-checkbox text="Multi-language Support"></ui5-checkbox>
        </div>
      </div>

      <div>
        <ui5-label for="timeline">Expected Timeline:</ui5-label>
        <ui5-select
          id="timeline"
          style={{ width: "100%" }}
          onChange={(e) => setFormData({ ...formData, timeline: e.detail.selectedOption.textContent })}
        >
          <ui5-option>1 Month</ui5-option>
          <ui5-option>3 Months</ui5-option>
          <ui5-option>6 Months</ui5-option>
          <ui5-option>1 Year</ui5-option>
        </ui5-select>
      </div>

      <div>
        <ui5-label for="budget">Budget Range:</ui5-label>
        <ui5-select
          id="budget"
          style={{ width: "100%" }}
          onChange={(e) => setFormData({ ...formData, budget: e.detail.selectedOption.textContent })}
        >
          <ui5-option>$5,000 - $10,000</ui5-option>
          <ui5-option>$10,000 - $25,000</ui5-option>
          <ui5-option>$25,000 - $50,000</ui5-option>
          <ui5-option>$50,000+</ui5-option>
        </ui5-select>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ui5-message-strip design="Success">
        Please review your information before submitting
      </ui5-message-strip>

      <ui5-card>
        <ui5-card-header slot="header" title-text="Summary"></ui5-card-header>
        <div style={{ padding: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "0.5rem" }}>
            <strong>Name:</strong>
            <span>{formData.firstName} {formData.lastName}</span>
            <strong>Email:</strong>
            <span>{formData.email || "Not provided"}</span>
            <strong>Project:</strong>
            <span>{formData.projectName || "Not provided"}</span>
            <strong>Type:</strong>
            <span>{formData.projectType || "Not selected"}</span>
            <strong>Priority:</strong>
            <span>{formData.priority}</span>
            <strong>Timeline:</strong>
            <span>{formData.timeline || "Not selected"}</span>
            <strong>Budget:</strong>
            <span>{formData.budget || "Not selected"}</span>
          </div>
        </div>
      </ui5-card>

      <div>
        <ui5-checkbox
          text="I agree to the terms and conditions"
          onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
        ></ui5-checkbox>
      </div>
    </div>
  );

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
        {renderStepIndicator()}
      </div>

      <ui5-card style={{ marginTop: "2rem" }}>
        <div style={{ padding: "2rem", minHeight: "400px" }}>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
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