import React from "react";
import Component3242 from "../Component3242";
import TotalCo2 from "../TotalCo2";
import "./Card142.css";

function Card142(props) {
  const { component3242Props } = props;

  return (
    <div className="card-1">
      <div className="overlap-group3-1">
        <div className="card-1-1"></div>
        <div className="group-2603">
          <div className="overlap-group4-1">
            <Component3242
              breakfast={component3242Props.breakfast}
              x15Gco={component3242Props.x15Gco}
              group2701={component3242Props.group2701}
              lunch={component3242Props.lunch}
            />
            <TotalCo2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card142;
