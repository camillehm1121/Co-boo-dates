import React from "react";
import Group2560 from "../Group2560";
import Group2704 from "../Group2704";
import Group2541 from "../Group2541";
import Group2702 from "../Group2702";
import Group2705 from "../Group2705";
import Group2547 from "../Group2547";
import Component961 from "../Component961";
import "./Component3242.css";

function Component3242(props) {
  const { breakfast, x15Gco, group2701, lunch } = props;

  return (
    <div className="component-32-4">
      <div className="overlap-group5-1">
        <div className="group-2717">
          <Group2560 />
          <div className="flex-row">
            <div className="group-2715">
              <div className="group-2714">
                <div className="breakfast quicksand-bold-black-8px">{breakfast}</div>
                <div className="group-2713">
                  <div className="overlap-group6">
                    <div className="x15g-co -applesystemuifont-bold-black-7px">{x15Gco}</div>
                    <Group2704 />
                  </div>
                </div>
              </div>
              <Group2541 />
            </div>
            <div className="group-2546">
              <Group2702 />
              <div className="group-2701" style={{ backgroundImage: `url(${group2701})` }}>
                <div className="rectangle-566"></div>
              </div>
            </div>
            <div className="group-2707">
              <div className="group-2706">
                <div className="lunch quicksand-bold-black-8px">{lunch}</div>
                <Group2705 />
              </div>
              <Group2547 />
            </div>
          </div>
        </div>
        <Component961 />
      </div>
      <div className="rectangle-2365 border-1px-dove-gray"></div>
    </div>
  );
}

export default Component3242;
