import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Tile from "../UI/Tile";
import Lottie from 'react-lottie';
import * as animationData from '../../educatioin.json';
import pdf from '../pdf/eshika_Resume.docx.pdf';

const Qualification = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications" />
      <MediumHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
            <Lottie options={defaultOptions}
             style={{marginTop: '0.1rem', marginBottom: '0.5rem'}}
              height={300}
              width={500}
              isStopped={true}
              isPaused={true}/>
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <div className="mlr-10">
              <a className='button1' href= {pdf} >Download CV</a>
            </div>
          </div>
        </div>
        <div>
          <Tile
            title="High School "
            mediumTitle="Kendriya Vidyalaya No.4 Mamun Cantt Pathankot Punjab"
            desc="87.5% in BOARD (2018)"
          />
          <Tile
            title="Enter School"
            mediumTitle="Kendriya Vidyalaya No.4 Mamun Cantt Pathankot Punjab"
            desc="93.4% in BOARD (2020) in non-medical stream "
          />
          <Tile
            title="Lovely Professional University Jalandhar"
            mediumTitle="Computer Science & Engg."
            desc="8.04 CGPA in first year"
          />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
