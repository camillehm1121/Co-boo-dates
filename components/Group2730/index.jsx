import React from "react";
import "./Group2730.css";

function Group2730(props) {
  const { group2730, stapleFood, className } = props;

  return (
    <div className={`group-27-1 ${className || ""}`} style={{ backgroundImage: `url(${group2730})` }}>
      <div className="color-1 quicksand-bold-romance-18px">{stapleFood}</div>
    </div>
  );
}

export default Group2730;
