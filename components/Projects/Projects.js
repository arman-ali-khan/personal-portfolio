import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";

const Projects = () => {

  // products
  const [projects,setProjects] = useState([])

  useEffect(()=>{
    axios.get(`projects.json`)
    .then(res=>{
      setProjects(res.data)
    })
  },[])
  return (
    <div className="bg-base-100 border rounded-md">
      <div className="p-3 flex justify-between rounded-t-md">
        <h2 className="text-xl font-bold font-gumela">Projects</h2>
        <Link href={"/projects"} className="">
          All Projects
        </Link>
      </div>
      <div className="grid px-4 py-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        {projects.slice(0,4).map((project, i) => (
          <SingleProject project={project} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
