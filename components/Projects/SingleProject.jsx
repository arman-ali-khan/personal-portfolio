import { useState } from "react";
import ProjectDetails from "../Modals/ProjectDetails";

const SingleProject = ({ project }) => {
  // Modal show / hide
  const [modalShow, setModalShow] = useState(false);
  // send data to modal
  const [modalData, setModalData] = useState(project);
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
     <div className="bg-warning pb-6 w-full rounded-md border">
     <img
        src={project?.thumb}
        className="w-full h-56 bg-gray-300 rounded-md bg-center bg-cover shadow-md object-cover"
      />
     </div>

      <div className="w-56 -mt-10 border rounded-md overflow-hidden backdrop-blur-lg shadow-lg md:w-64">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase px-1">
          {project?.name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 backdrop-blur-lg">
          <span className="font-bold text-gray-800">
            <a
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
              href={""}
            >
              Live
            </a>
          </span>
          <label
            htmlFor="my_modal_7"
            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
          >
            Details
          </label>
        </div>
      </div>
      {/* Modal inport */}

      <ProjectDetails
        modalData={modalData}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </div>
  );
};

export default SingleProject;
