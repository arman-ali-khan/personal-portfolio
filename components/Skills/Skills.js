import axios from "axios";
import { useEffect, useState } from "react";

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
        {skills.map((skill, i) => (
          <div key={skill.id} className={`bg-gray-500 w-auto rounded-full`}>
            <div
              className={`relative ${skill.range} ${skill.bg} h-5 rounded-full`}
            >
              <div className="px-3 text-base-100 font-bold left-1 flex items-center ">
                <span className="text-sm">{skill.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
