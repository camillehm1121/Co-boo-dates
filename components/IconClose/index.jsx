import React from "react";
import "./IconClose.css";

function IconClose(props) {
  const { overlapGroup2, line } = props;

  return (
    <a href="javascript:history.back()">
      <div className="icon-close">
        <div className="overlap-group2-2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <img className="line-1" src={line} />
        </div>
      </div>
    </a>
  );
}

export default IconClose;
