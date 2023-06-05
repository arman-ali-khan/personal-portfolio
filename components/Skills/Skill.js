const Skill = ({ skill }) => {
  return (
    <div
      className={`bg-white border tooltip w-auto rounded-full`}
      data-tip={`${skill.range}%`}
    >
      <div className={`relative ${skill.range} ${skill.bg} h-5 rounded-full`}>
        <div className="px-3  font-bold left-1 flex items-center ">
          <span className="text-sm">{skill.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
