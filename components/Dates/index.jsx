import React from "react";
import HomeHeading82 from "../HomeHeading82";
import Card142 from "../Card142";
import Card2 from "../Card2";
import Component10451 from "../Component10451";
import Group275822 from "../Group275822";
import ScrollGroup22 from "../ScrollGroup22";
import Component1321 from "../Component1321";
import Network4 from "../Network4";
import Battery from "../Battery";
import Menu22 from "../Menu22";
import "./Dates.css";

function Dates(props) {
  const {
    fontawsomeBars,
    path11544,
    wifi,
    text3,
    wifi2,
    text4,
    homeHeading82Props,
    card142Props,
    card2Props,
    component10451Props,
    group275822Props,
    scrollGroup22Props,
    component1321Props,
    network4Props,
    network42Props,
    menu22Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dates screen">
        <div className="overlap-group">
          <div className="group-2620">
            <div className="overlap-group2">
              <HomeHeading82 component95125Props={homeHeading82Props.component95125Props} />
              <img className="font-awsome-bars" src={fontawsomeBars} />
            </div>
            <div className="overlap-group1">
              <Card142 component3242Props={card142Props.component3242Props} />
              <Card2 discoverByMeal={card2Props.discoverByMeal} text1={card2Props.text1} text2={card2Props.text2} />
            </div>
          </div>
          <Component10451
            surname={component10451Props.surname}
            week={component10451Props.week}
            month={component10451Props.month}
          />
          <Group275822
            iconadd4Props={group275822Props.iconadd4Props}
            iconadd42Props={group275822Props.iconadd42Props}
            iconadd3Props={group275822Props.iconadd3Props}
          />
          <ScrollGroup22
            group2734Props={scrollGroup22Props.group2734Props}
            group2730Props={scrollGroup22Props.group2730Props}
            group27302Props={scrollGroup22Props.group27302Props}
            group2732Props={scrollGroup22Props.group2732Props}
          />
          <img className="path-11544" src={path11544} />
          <Component1321 {...component1321Props} />
          <div className="group-2748">
            <div className="wifi" style={{ backgroundImage: `url(${wifi})` }}></div>
            <Network4 path67={network4Props.path67} path68={network4Props.path68} />
            <Battery />
            <div className="text-3">{text3}</div>
          </div>
          <div className="group-2745">
            <div className="wifi" style={{ backgroundImage: `url(${wifi2})` }}></div>
            <Network4 path67={network42Props.path67} path68={network42Props.path68} />
            <Battery />
            <div className="text-4 roboto-normal-white-13px">{text4}</div>
          </div>
        </div>
        <Menu22
          overlapGroup19={menu22Props.overlapGroup19}
          home={menu22Props.home}
          activity={menu22Props.activity}
          profile={menu22Props.profile}
          setting={menu22Props.setting}
        />
      </div>
    </div>
  );
}

export default Dates;
