
import Skill from "./Skill";

const Skills = () => {
 const allSkills = [
  {name:'HTML',size:'90'},
  {name:'HTML',size:'50'},
  {name:'CSS',size:'66'},
  {name:'Javascript',size:'20'},
  {name:'HTML',size:'50'},
  {name:'Tailwind',size:'50'},
  {name:'Firebase',size:'50'},
  {name:'MongoDB',size:'50'},
  {name:'Express',size:'50'},
  {name:'Node',size:'50'},
 ]

  return (
    <div className="border h-full rounded-lg p-3">
      <h1 className="text-xl font-gumela font-bold">Skills</h1>
      <div className="w-full my-4 flex text-center justify-center"></div>
     <div className="flex flex-wrap gap-3 justify-center">
       {/* HTML */}
      {
       allSkills.map((item,i)=><Skill item={item} key={i} />)
      }
     </div>
    </div>
  );
};

export default Skills;
