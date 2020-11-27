import React from "react";
import "./AchievementCard.css";

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (

      <div className="certificate-card">
        <div className="certificate-image-div">
         <a href={cardInfo.image} target="_blank" >
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
          </a>
        </div>
        
      </div>
  );
}
