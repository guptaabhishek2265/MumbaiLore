import React from "react";
import "./AwardsPanels.css";

const AwardsPanels = () => {
  return (
    <div className="awards-panels">
      <a className="award-card" href="https://top216.com/vote" target="_blank" rel="noreferrer">
        <span className="icon">🗳️</span>
        Vote Top216
      </a>
      <a className="award-card" href="https://thetop36.com/highlights" target="_blank" rel="noreferrer">
        <span className="icon">🏆</span>
        Explore TheTop36
      </a>
    </div>
  );
};

export default AwardsPanels;
