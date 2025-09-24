"use client";

export default function ProjectDetailsStep({ formData, setFormData }) {
  return (
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
}