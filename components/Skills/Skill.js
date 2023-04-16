import ReactSkillbar, { SkillBar } from 'react-skillbars';

const Skill = ({item}) => {
  const allSkills = [
    {type:'HTML',level:90},
    {type:'HTML',level:50},
    {type:'CSS',level:66},
    {type:'Javascript',level:20},
    {type:'HTML',level:50},
    {type:'Tailwind',level:50},
    {type:'Firebase',level:50},
    {type:'MongoDB',level:50},
    {type:'Express',level:66},
    {type:'Node',level:50},
   ]

 const colors = {
  bar: 'red',
  title: {
    text: '#abc123',
    background: '#fff',
  },
};
    
    return (
        <div className={`h-6 relative rounded-full tooltip z-40`} >
        <div className="w-44 h-full bg-gray-200 rounded-full absolute " ></div>
        <div >
        <SkillBar skills={allSkills} colors={colors} height={'20px'} />
       </div>
      </div>
    );
};

export default Skill;