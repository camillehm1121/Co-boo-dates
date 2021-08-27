import React from "react";
import "./IconArrow.css";

function IconArrow(props) {
  const { line } = props;

  return (
    <div className="icon-arrow">
      <div className="overlap-group1-2">
        <img
          className="path-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fe5b76c2c6b7d8a7cd57c/img/path-17@1x.png"
        />
        <img className="line" src={line} />
      </div>
    </div>
  );
}

export default IconArrow;
