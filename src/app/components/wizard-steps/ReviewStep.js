"use client";

export default function ReviewStep({ formData, setFormData }) {
  return (
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
}