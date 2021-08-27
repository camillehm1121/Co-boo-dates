import React from "react";
import "./Iconadd2.css";

function Iconadd2(props) {
  const { src } = props;

  return <div className="iconadd-3" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Iconadd2;
