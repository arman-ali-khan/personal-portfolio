import axios from "axios";
import { useEffect, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  
  useEffect(()=>{
    axios.get("/skills.json")
    .then((res) => {
      setSkills(res.data);
    })
  },[])

  return (
    <div className="border h-full rounded-lg p-3">
      <h1 className="text-xl font-gumela font-bold  py-2">Skills</h1>
      <div className="w-full flex flex-wrap gap-2">
        {skills.map((skill, i) => <Skill key={i} skill={skill} />)}
      </div>
    </div>
  );
};

export default Skills;
