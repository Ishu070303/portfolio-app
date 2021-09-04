import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";


const Specializing = () => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 90,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
    {
      skillName: "JAVASCRIPT",
      desc: "Hands on experience in JavaScript",
      value: 90,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
    {
      skillName: "REACT-JS",
      desc: "Hands on experience in ReactJS",
      value: 90,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
    {
      skillName: "jQUERY",
      desc: "Hands on experience in Javascript",
      value: 70,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
    {
      skillName: "BOOTSTRAP",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
    {
      skillName: "SOCKET.IO",
      desc: "Hands on experience in Javascript",
      value: 50,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
    {
      skillName: "EXPRESS",
      desc: "Hands on experience in React.js",
      value: 80,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
    {
      skillName: "NPM",
      desc: "Hands on experience in Javscript",
      value: 80,
      textColor: colors.black,
      pathColor: "#ff726f",
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
        <div
          data-aos="fade-up"
          className="flexRow wrap justify-sb"
          style={{ padding: "30px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.black}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
