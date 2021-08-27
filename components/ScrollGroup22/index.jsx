import React from "react";
import Group2734 from "../Group2734";
import Group2726 from "../Group2726";
import Group2727 from "../Group2727";
import Group2730 from "../Group2730";
import Group2729 from "../Group2729";
import Group2731 from "../Group2731";
import Group2732 from "../Group2732";
import "./ScrollGroup22.css";

function ScrollGroup22(props) {
  const { group2734Props, group2730Props, group27302Props, group2732Props } = props;

  return (
    <div className="scroll-group-2">
      <div className="scroll-group-3">
        <Group2734 component9764Props={group2734Props.component9764Props} />
        <Group2726 />
        <Group2727 />
        <Group2730 group2730={group2730Props.group2730} stapleFood={group2730Props.stapleFood} />
        <Group2729 />
        <Group2730
          group2730={group27302Props.group2730}
          stapleFood={group27302Props.stapleFood}
          className={group27302Props.className}
        />
        <Group2731 />
        <Group2732 overlapGroup9={group2732Props.overlapGroup9} grainFood={group2732Props.grainFood} />
      </div>
    </div>
  );
}

export default ScrollGroup22;
