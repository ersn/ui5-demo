"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// UI5 Web Components dynamic loader
const UI5Wrapper = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import all UI5 components
    const loadUI5Components = async () => {
      try {
        // Load CLDR data for Norwegian locale
        await import("@ui5/webcomponents-localization/dist/generated/cldr/nb.js");

        // Set locale configuration
        const { setLanguage } = await import("@ui5/webcomponents-base/dist/config/Language.js");
        setLanguage("nb");

        await Promise.all([
          import("@ui5/webcomponents/dist/Button.js"),
          import("@ui5/webcomponents/dist/Input.js"),
          import("@ui5/webcomponents/dist/Label.js"),
          import("@ui5/webcomponents/dist/TextArea.js"),
          import("@ui5/webcomponents/dist/Select.js"),
          import("@ui5/webcomponents/dist/Option.js"),
          import("@ui5/webcomponents/dist/DatePicker.js"),
          import("@ui5/webcomponents/dist/CheckBox.js"),
          import("@ui5/webcomponents/dist/RadioButton.js"),
          import("@ui5/webcomponents/dist/Title.js"),
          import("@ui5/webcomponents/dist/Card.js"),
          import("@ui5/webcomponents/dist/CardHeader.js"),
          import("@ui5/webcomponents/dist/Icon.js"),
          import("@ui5/webcomponents/dist/List.js"),
          import("@ui5/webcomponents/dist/ListItem.js"),
          import("@ui5/webcomponents/dist/Bar.js"),
          import("@ui5/webcomponents/dist/MessageStrip.js"),
          import("@ui5/webcomponents/dist/ProgressIndicator.js"),
          import("@ui5/webcomponents/dist/TabContainer.js"),
          import("@ui5/webcomponents/dist/Tab.js"),
          import("@ui5/webcomponents/dist/Panel.js"),
          import("@ui5/webcomponents-fiori/dist/Assets.js"),
          import("@ui5/webcomponents-icons/dist/AllIcons.js"),
        ]);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load UI5 components:", error);
        setIsLoaded(true); // Still set to true to prevent infinite loading
      }
    };

    loadUI5Components();
  }, []);

  // Show loading state until components are loaded
  if (!isLoaded) {
    return <div>Loading UI5 components...</div>;
  }

  return <>{children}</>;
};

export default UI5Wrapper;