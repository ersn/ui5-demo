"use client";

import { useState, useEffect, useContext, createContext } from "react";
import UI5Wrapper from "../components/UI5Wrapper";

// Context example
const ThemeContext = createContext();

export default function HooksDemo() {
  // 1. useState - State management
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("light");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // Runs when count changes

  useEffect(() => {
    document.title = `Hooks Demo - ${name || 'No name'}`;
  }, [name]);

  // 3. Custom Hook usage
  const windowSize = useWindowSize();

  return (
    <ThemeContext.Provider value={theme}>
      <UI5Wrapper>
        <div style={{
          padding: "20px",
          backgroundColor: theme === "dark" ? "#201e1eff" : "#f7f7f7",
          minHeight: "100vh"
        }}>
          <ui5-title level="H2">React Hooks Examples (4 Essential Hooks)</ui5-title>

          {/* useState Example */}
          <ui5-panel header-text="1. useState - State Management" collapsed={false} style={{ marginTop: "20px" }}>
            <div style={{ padding: "10px" }}>
              <ui5-label>Counter: {count}</ui5-label>
              <br /><br />
              <ui5-button onClick={() => setCount(count + 1)}>Increment</ui5-button>
              <ui5-button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrement</ui5-button>
              <ui5-button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>Reset</ui5-button>
            </div>
          </ui5-panel>

          {/* useEffect Example */}
          <ui5-panel header-text="2. useEffect - Side Effects and Lifecycle" collapsed={false} style={{ marginTop: "20px" }}>
            <div style={{ padding: "10px" }}>
              <ui5-label>Name: {name || "Not entered yet"}</ui5-label>
              <br /><br />
              <ui5-input
                value={name}
                onInput={handleNameChange}
                placeholder="Enter your name (document.title changes)"
              />
              <br /><br />
              <ui5-label>Check the console - useEffect logs will appear</ui5-label>
              <br />
              <ui5-label>✓ Component mount/unmount</ui5-label>
              <br />
              <ui5-label>✓ Count changes</ui5-label>
              <br />
              <ui5-label>✓ Document title updates</ui5-label>
            </div>
          </ui5-panel>

          {/* useContext Example */}
          <ui5-panel header-text="3. useContext - Global State Sharing" collapsed={false} style={{ marginTop: "20px" }}>
            <div style={{ padding: "10px" }}>
              <ui5-label>Active Theme: {theme}</ui5-label>
              <br /><br />
              <ui5-button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
              </ui5-button>
              <br /><br />
              <ThemedComponent />
            </div>
          </ui5-panel>

          {/* Custom Hook Example */}
          <ui5-panel header-text="4. Custom Hook - useWindowSize" collapsed={false} style={{ marginTop: "20px" }}>
            <div style={{ padding: "10px" }}>
              <ui5-label>Window Width: {windowSize.width}px</ui5-label>
              <br />
              <ui5-label>Window Height: {windowSize.height}px</ui5-label>
              <br /><br />
              <ui5-label>Resize the window, values will update automatically!</ui5-label>
            </div>
          </ui5-panel>
        </div>
      </UI5Wrapper>
    </ThemeContext.Provider>
  );
}

// Child component using useContext
function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{
      padding: "10px",
      backgroundColor: theme === "dark" ? "#2d2d2d" : "#e3f2fd",
      borderRadius: "4px",
      marginTop: "10px"
    }}>
      <ui5-label>This component accesses theme information via useContext: {theme}</ui5-label>
    </div>
  );
}

// Custom Hook example - Tracks window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
