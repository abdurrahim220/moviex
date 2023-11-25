import React, { useState } from "react";

import "./switchTabs.scss";
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectTab, setSelectTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab,index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <div
            className={`tabItem ${selectTab === index ? "active" : ""}`}
            key={index}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </div>
        ))}
        <div className="movingBg" style={{ left }}></div>
      </div>
    </div>
  );
};

export default SwitchTabs;
