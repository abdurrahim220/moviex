import React from "react";

import "./switchTabs.scss";
const SwitchTabs = ({ data, onTabChange }) => {
    
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <div className={`tabItem`} key={index}>
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwitchTabs;
