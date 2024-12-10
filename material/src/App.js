// src/App.js
import React from "react";
import DemoApp from "./Demo/DemoApp"; // Rename the imported 'App' to avoid conflicts

function App() {
  return (
    <div>
      <DemoApp /> {/* Use the renamed 'DemoApp' here */}
    </div>
  );
}

export default App;
