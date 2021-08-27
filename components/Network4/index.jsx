import React from "react";
import "./Network4.css";

function Network4(props) {
  const { path67, path68 } = props;

  return (
    <div className="network">
      <div className="overlap-group1-3">
        <img className="path-67" src={path67} />
        <img className="path-68" src={path68} />
      </div>
    </div>
  );
}

export default Network4;
