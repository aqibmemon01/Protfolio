import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { Fade } from "react-reveal";
import Mern01 from './Images/Mern01.PNG';
import Mern02 from './Images/Mern02.PNG';
import Mern03 from './Images/Mern03.PNG';
import Backimg from './Images/Background.jpeg'
import Moon01 from './Images/Moon01.PNG';
import Moon03 from './Images/Moon03.PNG';
import Moon04 from './Images/Moon04.PNG';
import JobApp01 from './Images/student01.PNG';
import JobApp02 from './Images/student02.PNG';
import JobApp03 from './Images/student03.PNG';
import CV01 from './Images/cv01.PNG';
import CV02 from './Images/cv02.PNG';
import CV03 from './Images/cv03.PNG';
import SignUpForm from './Images/loginpage.PNG';
import Calcu from './Images/calculator.PNG';
import AgeCalcu from './Images/agecal.PNG';
import Google from './Images/google.PNG';
import TikTok from './Images/tiktok.PNG';

// import Backimg from './Image/download (3).jpg'

var PicArr = [Mern01, Mern02, Mern03];
var PicArr2 = [Moon01,Moon03,Moon04,];
var PicArr3 = [JobApp02,JobApp01,JobApp03,];
var PicArr4 = [CV01,CV03,CV02];
var PicArr5 = [SignUpForm];
var PicArr6 = [Calcu];
var PicArr7 = [AgeCalcu];
var PicArr8 = [Google];
var PicArr9 = [TikTok];

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
<div className="main" id="projects">
      <h1 className="heading" >Work Samples</h1>

   {/* PROJECT 01 MERN */}
    <Fade bottom duration={1000} distance="20px">
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
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
    <div id="ProDetail" >
 <h1 className="heading" >MERN STACK PROJECT<br />
 "Accounts Master"
 </h1>
 <span className="OnWork" >( On Working )</span>
 
 <h4>Live Demo : <a href="https://accountsmaster.herokuapp.com/" target="_blank" >AccountsMaster.com</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com</a> </h4>

<p>
Mern Stack Project Create with the Help of HTML + CSS + JavaScript + React.js + Node.js + Mongodb + Redux + firebase + Heroku</p>
</div>

</div>
    </Fade>
 
   {/* PROJECT 02 Moon.pk */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr2.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
    </div>
    <div id="ProDetail" >
 <h1 className="heading" >"Moon.pk"<br />
 E-Commerce 
 </h1>
 <span className="OnWork" >( Single Page Web App )</span>
 
 <h4>Live Demo : <a href="https://project-7860.firebaseapp.com//" target="_blank" >Moon.pk</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/Moon.pk</a> </h4>
<p>
Moon.pk(React App) Create with the Help of HTML + CSS + JavaScript + React.js + Redux + firebase + Surge
With All Functionallity
</p>
</div>

</div>
    </Fade>

   {/* PROJECT 03 StudentSystem */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr3.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
    </div>
    <div id="ProDetail" >
 <h1 className="heading" >"Job Master"<br />
 Apply, Hire & Manage Jobs 
 </h1>
 <span className="OnWork" >( Single Page Web App )</span>
 
 <h4>Live Demo : <a href="http://brach-system.surge.sh/" target="_blank" >Job App</a> </h4>
 <h4>Live Demo 2 : <a href="http://studentsystem-5ac9f.web.app" target="_blank" >Job App</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/Job App</a> </h4>

<p>
  Job Master (React App) Create with the help of HTML + CSS + JavaScript + React.js + Redux + firebase + surge
</p>
<ul>
  <li><h3>Module</h3></li>
  <li>Company Login</li>
  <li>Student Login</li>
  <li>Admin Login</li>
  <li>Company can view Student data</li>
  <li>Company can see Own Posts, Own Requests, Own Received Requests</li>
  <li>Company can Post New Jobs</li>
  <li>Student can view Company data ( Jobs )</li>
  <li>Student can view Company data ( Jobs )</li>
  <li>Admin can Block & UnBlock All Company & Student Accounts</li>
</ul>

</div>

</div>
    </Fade>

   {/* PROJECT 04 CvOnWeb */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr4.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
    </div>
    <div id="ProDetail" >
 <h1 className="heading" >"CvOnWeb"
 </h1>
 {/* <span className="OnWork" >( Single Page Web App )</span> */}
 
 <h4>Live Demo : <a href="http://cvonweb.surge.sh/" target="_blank" >CvOnWeb.com</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/CvOnWeb</a> </h4>
<p>
Moon.pk(React App) Create with the Help of HTML + CSS + JavaScript + React.js + Redux + firebase + Surge
With All Functionallity
</p>
</div>

</div>
    </Fade>
       {/* PROJECT 05 SignUp Form */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr5.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
 <div id="ProDetail" >
 <h1 className="heading" >"SignUp Form"
 </h1>
 {/* <span className="OnWork" >( Single Page Web App )</span> */}
 
 <h4>Live Demo : <a href="http://cvonweb.surge.sh/" target="_blank" >CvOnWeb.com</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/CvOnWeb</a> </h4>
<p>
Moon.pk(React App) Create with the Help of HTML + CSS + JavaScript + React.js + Redux + firebase + Surge
With All Functionallity
</p>
</div>
    </div>
    

</div>
    </Fade>
   {/* PROJECT 06 Calculator */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr6.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
 <div id="ProDetail" >
 <h1 className="heading" >"Calculator"
 </h1>
 {/* <span className="OnWork" >( Single Page Web App )</span> */}
 
 <h4>Live Demo : <a href="http://cvonweb.surge.sh/" target="_blank" >CvOnWeb.com</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/CvOnWeb</a> </h4>
<p>
Moon.pk(React App) Create with the Help of HTML + CSS + JavaScript + React.js + Redux + firebase + Surge
With All Functionallity
</p>
</div>

    </div>
 

</div>
    </Fade>
   {/* PROJECT 07 Calculator */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr7.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
 <div id="ProDetail" >
 <h1 className="heading" >"Age Calculator"
 </h1>
 {/* <span className="OnWork" >( Single Page Web App )</span> */}
 
 <h4>Live Demo : <a href="http://cvonweb.surge.sh/" target="_blank" >CvOnWeb.com</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/CvOnWeb</a> </h4>
<p>
Moon.pk(React App) Create with the Help of HTML + CSS + JavaScript + React.js + Redux + firebase + Surge
With All Functionallity
</p>
</div>

    </div>
 

</div>
    </Fade>
   {/* PROJECT 08 Calculator */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr8.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
 <div id="ProDetail" >
 <h1 className="heading" >"Google"
 </h1>
 {/* <span className="OnWork" >( Single Page Web App )</span> */}
 
 <h4>Live Demo : <a href="http://cvonweb.surge.sh/" target="_blank" >CvOnWeb.com</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/CvOnWeb</a> </h4>
<p>
Moon.pk(React App) Create with the Help of HTML + CSS + JavaScript + React.js + Redux + firebase + Surge
With All Functionallity
</p>
</div>

    </div>
 

</div>
    </Fade>
   {/* PROJECT 09 Calculator */}
   <Fade bottom duration={1000} distance="20px">      
<div style={{backgroundImage:`url(${Backimg})`}} className="Promain" >

      <div  className="achievement-cards-div Promain">
          {PicArr9.map(val => {
            return (
              <AchivementCard
                cardInfo={{
                  image: val,
                }}
              />
            );
          })}
 
 <div id="ProDetail" >
 <h1 className="heading" >"TikTok Game"
 </h1>
 {/* <span className="OnWork" >( Single Page Web App )</span> */}
 
 <h4>Live Demo : <a href="http://cvonweb.surge.sh/" target="_blank" >CvOnWeb.com</a> </h4>
<h4>Code Source : <a href="https://github.com/aqibmemon01" target="_blank" >Github.com/CvOnWeb</a> </h4>
<p>
Moon.pk(React App) Create with the Help of HTML + CSS + JavaScript + React.js + Redux + firebase + Surge
With All Functionallity
</p>
</div>

    </div>
 

</div>
    </Fade>















    </div>
  );
}
