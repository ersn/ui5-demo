"use client";


export default function MasterPage({ menuItems, selectedItem, onItemSelect }) {
  return (
    <div style={{
      width: "280px",
      backgroundColor: "white",
      borderRight: "1px solid #e0e0e0",
      display: "flex",
      flexDirection: "column",
      boxShadow: "2px 0 5px rgba(0,0,0,0.05)"
    }}>
      <div style={{
        padding: "1rem",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fafafa"
      }}>
        <ui5-title level="H4">Menu</ui5-title>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "1rem" }}>
        {menuItems.map(item => (
          <div
            key={item.key}
            onClick={() => onItemSelect(item.key)}
            style={{
              marginBottom: "0.75rem",
              padding: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: selectedItem === item.key ? "#0854a0" : "white",
              border: selectedItem === item.key ? "2px solid #0854a0" : "1px solid #e0e0e0",
              boxShadow: selectedItem === item.key ? "0 2px 8px rgba(8,84,160,0.2)" : "0 1px 3px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (selectedItem !== item.key) {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedItem !== item.key) {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
              <ui5-icon
                name={item.icon}
                style={{
                  marginRight: "0.75rem",
                  fontSize: "1.3rem",
                  color: selectedItem === item.key ? "white" : "#0854a0"
                }}
              ></ui5-icon>
              <span style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: selectedItem === item.key ? "white" : "#333"
              }}>
                {item.title}
              </span>
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: selectedItem === item.key ? "#e0e0e0" : "#666",
              marginLeft: "2.05rem"
            }}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}