import React from "react";
import "./Menu22.css";

function Menu22(props) {
  const { overlapGroup19, home, activity, profile, setting } = props;

  return (
    <div className="menu">
      <div className="overlap-group16" style={{ backgroundImage: `url(${overlapGroup19})` }}>
        <div className="overlap-group1-4">
          <div className="home" style={{ backgroundImage: `url(${home})` }}></div>
        </div>
        <img className="activity" src={activity} />
        <div className="profile" style={{ backgroundImage: `url(${profile})` }}></div>
        <img className="setting" src={setting} />
      </div>
    </div>
  );
}

export default Menu22;
