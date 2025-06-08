import React from "react";
import CareDuelBanner from "./components/CareDuelBanner";
import AwardsPanels from "./components/AwardsPanels";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="hero">Welcome to MumbaiLore</h1>
      <CareDuelBanner />
      <AwardsPanels />
    </div>
  );
}

export default App;
