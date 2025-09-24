"use client";

export default function RequirementsStep({ formData, setFormData }) {
  return (
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
}