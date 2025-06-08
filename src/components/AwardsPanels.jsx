import React from "react";
import "./AwardsPanels.css";

const panels = [
  {
    title: "🏆 Vote Top216",
    link: "https://top216.com/vote",
  },
  {
    title: "🔍 Explore TheTop36",
    link: "https://thetop36.com/highlights",
  },
];

const AwardsPanels = () => {
  return (
    <div className="awards-panel-container">
      {panels.map((panel, index) => (
        <a
          key={index}
          href={panel.link}
          target="_blank"
          rel="noopener noreferrer"
          className="award-card"
        >
          <h3 className="award-title">{panel.title}</h3>
        </a>
      ))}
    </div>
  );
};

export default AwardsPanels;
