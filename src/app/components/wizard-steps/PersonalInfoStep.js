"use client";

export default function PersonalInfoStep({ formData, setFormData }) {
  return (
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
}