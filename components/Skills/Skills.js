import React from "react";
import { SkillBar } from "react-skillbars";

const Skills = () => {
  const frontend = [
    { type: "Java", level: 85 },
    { type: "Javascript", level: 75 },
  ];
  const colors = {
    bar: "rgb(71 85 105)",
    title: {
      text: "white",
      background: "rgb(12 85 105)",
    },
  };
  return (
    <div className="my-12">
      <div className="w-full my-4 flex text-center justify-center">
        <div>
          <h2 className="text-4xl font-bold">Skills</h2>
          <p>My technical level</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full">
          <SkillBar skills={frontend} height={33} colors={colors} />
        </div>
        <div className="w-full">
          <SkillBar skills={frontend} height={33} colors={colors} />
        </div>
        <div className="w-full">
          <SkillBar skills={frontend} height={33} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
