"use client";

import { useState, useEffect } from "react";
import menuData from "./data/menuData.json";
import MasterPage from "./pages/MasterPage";
import DetailPage from "./pages/DetailPage";
import UI5Wrapper from "./components/UI5Wrapper";


export default function Home() {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [currentMenuItem, setCurrentMenuItem] = useState();

  useEffect(() => {
    const item = menuData.menuItems.find(item => item.key === selectedItem);
    setCurrentMenuItem(item);
  }, [selectedItem]);

  return (
    <UI5Wrapper>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f7f7f7" }}>
        <ui5-bar design="Header" style={{ backgroundColor: "#354a5f", color: "white" }}>
          <ui5-title slot="startContent" level="H3" style={{ color: "white" }}>UI5 Demo Application</ui5-title>
        </ui5-bar>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          <MasterPage
            menuItems={menuData.menuItems}
            selectedItem={selectedItem}
            onItemSelect={setSelectedItem}
          />
          <DetailPage
            currentMenuItem={currentMenuItem}
          />
        </div>
      </div>
    </UI5Wrapper>
  );
}