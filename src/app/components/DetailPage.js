"use client";

import WizardComponent from "./WizardComponent";

export default function DetailPage({ currentMenuItem }) {
  const renderContent = () => {
    if (!currentMenuItem) return <div>Content not found</div>;

    const { content } = currentMenuItem;

    if (content.type === "wizard") {
      return <WizardComponent wizardData={content.wizardData} />;
    }

    if (content.type === "cards") {
      return (
        <div style={{ padding: "1rem" }}>
          <ui5-title level="H2">{content.title}</ui5-title>
          <div style={{
            marginTop: "1rem",
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
          }}>
            {content.cards?.map((card, index) => (
              <ui5-card key={index}>
                <ui5-card-header
                  slot="header"
                  title-text={card.title}
                  subtitle-text={card.subtitle}
                ></ui5-card-header>
                <div style={{ padding: "1rem" }}>
                  <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{card.value}</div>
                </div>
              </ui5-card>
            ))}
          </div>
        </div>
      );
    }

    if (content.type === "list") {
      return (
        <div style={{ padding: "1rem" }}>
          <ui5-title level="H2">{content.title}</ui5-title>
          <ui5-list style={{ marginTop: "1rem" }}>
            {content.items?.map((item, index) => (
              <ui5-li
                key={index}
                icon={item.icon}
                description={item.description}
                additional-text={item.additionalText || item.price}
              >
                {item.title}
              </ui5-li>
            ))}
          </ui5-list>
        </div>
      );
    }

    return <div>Content not found</div>;
  };

  return (
    <div style={{ flex: 1, backgroundColor: "#fafafa", overflow: "auto" }}>
      <div style={{
        padding: "1rem 1.5rem",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "white"
      }}>
        <ui5-title level="H4">Content</ui5-title>
      </div>
      <div style={{
        backgroundColor: "white",
        margin: "1rem",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }}>
        {renderContent()}
      </div>
    </div>
  );
}