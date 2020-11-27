import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import Pic01 from "./MyPc.jpg";
import Pic02 from "./Certificate.jpg";
import Cer03 from "./Certificate01.PNG";
import Cer04 from "./Certificate02.PNG";
import Cer05 from "./Certificate03.PNG";
import Cer06 from "./Certificate04.PNG";

var PicArr = [Cer03,Cer04,Cer05,Cer06,] 

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">

    <div className="achievement-main-div">
        <div className="achievement-header">

          <h1 className="heading achievement-heading">{achievementSection.title}</h1>
          <p className="subTitle achievement-subtitle">{achievementSection.subtitle}</p>
          <img className="Pic01"  src={Pic01}  />
          <img className="Pic01"  src={Pic02}  />


        </div>
</div>
</div>


        <div className="achievement-cards-div">
          {PicArr.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
    </div>
    </Fade>
  );
}
