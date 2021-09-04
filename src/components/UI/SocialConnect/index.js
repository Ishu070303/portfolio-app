import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";



const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span style={{color: '#100c08',fontSize: '16px'}}  className="textColor font-12">Follow me on: </span>
      <a className="socialLink" href="https://www.facebook.com/eshika.rawat.505">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="https://www.instagram.com/esh_ik_a/">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="https://github.com/Ishu070303">
        <img src={socialIcons.github} alt="" />
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/eshika-rawat-b518611b2/">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
