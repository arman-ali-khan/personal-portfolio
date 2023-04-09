import React from "react";
import { SkillBar } from "react-skillbars";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaArrowDown, FaArrowUp, FaCode } from "react-icons/fa";

const Skills = () => {
    // expert
  const expert = [
    { type: "HTML", level: 85 },
    { type: "CSS", level: 80 },
    { type: "JavaScript", level: 75 },
    { type: "Nodejs", level: 80 },
    { type: "Express", level: 70 },
  ];
//   Intermediate
  const intermediate = [
    { type: "Figma", level: 50 },
    { type: "Canva", level: 70 },
    { type: "MongoDB", level: 50 },
    { type: "MongoDB", level: 50 },
  ];
//   Beginner
  const beginner = [
    { type: "Github", level: 85 },
    { type: "Firebase", level: 75 },
    { type: "Linux", level: 40 },
    { type: "Figma", level: 50 },
    { type: "Canva", level: 70 },
  ];
  const colors = {
    bar: "rgb(71 85 105)",
    title: {
      text: "white",
      background: "rgb(12 85 105)",
    },
  };
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="my-12 mx-3">
      <div className="w-full my-4 flex text-center justify-center">
        <div>
          <h2 className="text-4xl font-bold">Skills</h2>
          <p>My technical level</p>
        </div>
      </div>
      <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
       
      <Accordion open={open === 1}>
      <AccordionHeader onClick={() => handleOpen(1)}>
         <p className="text-2xl flex  items-center gap-2">

            <FaCode className="text-4xl" /> Expert</p> 
            <div>{open===1?<FaArrowUp />:<FaArrowDown />}</div>

        </AccordionHeader>
        <p>More than 4 years</p>
        <AccordionBody>
        <div className="w-full">
            <label>Expert</label>
          <SkillBar skills={expert} height={20} colors={colors} />
        </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
      <AccordionHeader onClick={() => handleOpen(2)}>
         <p className="text-2xl flex  items-center gap-2"><FaCode className="text-4xl" /> Expert</p> {open===2?<FaArrowUp />:<FaArrowDown />}
        </AccordionHeader>
        <p>More than 4 years</p>
        <AccordionBody>
        <div className="w-full">
        <label>Intermediate</label>
          <SkillBar skills={intermediate} height={20} colors={colors} />
        </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
      <AccordionHeader onClick={() => handleOpen(3)}>
         <p className="text-2xl flex  items-center gap-2"><FaCode className="text-4xl" /> Expert</p> {open===3?<FaArrowUp />:<FaArrowDown />}
        </AccordionHeader>
        <p>More than 4 years</p>
        <AccordionBody>
        <div className="w-full">
        <label>Beginner</label>
          <SkillBar skills={beginner} height={20} colors={colors} />
        </div>
        </AccordionBody>
      </Accordion>
      </div>
    </Fragment>
    </div>
  );
};

export default Skills;
