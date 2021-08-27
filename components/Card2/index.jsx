import React from "react";
import ScrollGroup1 from "../ScrollGroup1";
import "./Card2.css";

function Card2(props) {
  const { discoverByMeal, text1, text2 } = props;

  return (
    <div className="card-2">
      <div className="overlap-group11">
        <div className="group-2608">
          <div className="overlap-group3-2">
            <div className="group-2606">
              <div className="rectangle-2311"></div>
            </div>
            <div className="discover-by-meal quicksand-bold-white-20px">{discoverByMeal}</div>
          </div>
        </div>
        <ScrollGroup1 />
        <div className="group-2736">
          <div className="text-1 helveticaneue-regular-normal-white-20px">{text1}</div>
        </div>
        <div className="text-2 helveticaneue-regular-normal-white-20px">{text2}</div>
      </div>
    </div>
  );
}

export default Card2;
