
import { SkillBars } from 'react-skills';
import Skill from "./Skill";

const Skills = () => {
  const skillsData= [
    {
      name: 'HTML',
      level: 90,
      color: '#FF6701',
    },
    {
      name: 'CSS',
      level: 85,
      color: '#2965f1',
    },
    {
      name: 'Javascript',
      level: 80,
      color: '#F0DB4F',
    },
    {
      name: 'ReactJS',
      level: 70,
      color: '#61DBFB',
    },
    {
      name: 'Firebase',
      level: 50,
      color: '#F5820D',
    },
    {
      name: 'NodeJS',
      level: 60,
      color: '#3c873a',
    },
    {
      name: 'ExpressJS',
      level: 50,
      color: '#aaa',
    },
    {
      name: 'MongoDB',
      level: 40,
      color: '#4DB33D',
    },
    {
      name: 'NextJS',
      level: 50,
      color: '#484848',
    },
    {
      name: 'MySQL',
      level: 40,
      color: '#F29111',
    },
    {
      name: 'Github',
      level: 85,
      color: '#999999',
    },
    {
      name: 'Vue.Js',
      level: 70,
      color: '#41B883',
    }
  ]


  return (
    <div className="border h-full rounded-lg p-3">
      <h1 className="text-xl font-gumela font-bold">Skills</h1>
      <div className="w-full my-4 flex text-center justify-center"></div>
     <div  className="w-full">
       {/* HTML */}
       <SkillBars skills={skillsData} />      
     </div>
    </div>
  );
};

export default Skills;
