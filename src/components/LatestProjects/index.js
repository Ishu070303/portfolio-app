import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import Lottie from 'react-lottie';
import * as animationData from '../../musicplayer.json';
import * as animationDatas from '../../mic.json';
import "./style.css";


const LatestProjects = () => {

  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: animationDatas.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  

  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
      data-aos="zoom-in-up"
    >
      <div>
      <MediumHeading text={"PROJECTS"} style={{marginBottom: '23px',}} />
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <MediumHeading style={{color: '#BB0000'}} text="Text-To-Speech" />
          <MediumHeading
            style={{ fontSize: '17px',marginLeft: '12px',marginTop: '12px' }}
            text="A text to speech app for non-verbal people. Pre-made buttons and custom text speech. This project uses the Web Speech API build by using javascript."
          />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
          <a className='button' href="https://ishu070303.github.io/Text-To-Speech/">Live Link</a>
          </div>
        </div>
        <div className="projectImgContainer">
        <Lottie options={defaultOptions1}
             style={{marginTop: '0.1rem', marginLeft: '5rem'}}
              height={220}
              width={500}
              isStopped={true}
              isPaused={true}/>
        </div>
      </Card>
      </div>
      <div style ={{ marginTop: '12px'}}>
      <Card className="flexRow flexCol align-center justify-sb">
        <div className="projectPortfolioContainer">
          <MediumHeading style={{color: '#BB0000'}} text="Music Player" />
          <MediumHeading style={{ fontSize: '17px',marginLeft: '12px',marginTop: '12px' }}
            text="Create beautiful UI to play music stored in the music folder using the HTML5 audio API"
          />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <a className='button' href="https://ishu070303.github.io/MusicPlayer/">Live Link</a>
          </div>
        </div>
        <div className="projectImgContainer">
        <Lottie options={defaultOptions}
             style={{marginTop: '0.1rem', marginRight: '0px'}}
              height={250}
              width={400}
              isStopped={true}
              isPaused={true}/>
        </div>
      </Card>
      </div>
    </div>
    
  );
};

export default LatestProjects;
