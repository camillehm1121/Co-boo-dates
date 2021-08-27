import React from "react";
import "./Iconadd4.css";

function Iconadd4(props) {
  const { className } = props;

  return (
    <div className={`iconadd ${className || ""}`}>
      <img
        className="union"
        src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/union-17@1x.png"
      />
    </div>
  );
}

export default Iconadd4;
