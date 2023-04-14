
const Skill = ({item}) => {
    
    return (
        <div className={`h-6 relative rounded-full tooltip z-40`} data-tip={`${item.size}%`}>
        <div className="w-full h-full bg-gray-200 rounded-full absolute " ></div>
        <div
          id="bar"
          className={`transition-all z-30 ease-out  duration-1000 h-full 
          before:content-normal before:h-full before:-z-10  before:rounded-full before:bg-green-500 before:absolute before:left-0 before:w-[${item.size}%] relative w-full px-3  `} >{item.name}</div>

      </div>
    );
};

export default Skill;