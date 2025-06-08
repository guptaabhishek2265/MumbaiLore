import React from "react";
import "./AwardsPanels.css";

function AwardsPanels() {
  return (
    <div className="awards-container">
      <a
        href="https://top216.com/vote"
        className="award-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        🗳 Vote Top216
      </a>

      <a
        href="https://thetop36.com/highlights"
        className="award-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        🌟 Explore TheTop36
      </a>
    </div>
  );
}

export default AwardsPanels;
