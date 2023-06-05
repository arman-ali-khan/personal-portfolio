import { useState } from "react";
import ProjectDetails from "../Modals/ProjectDetails";

const SingleProject = ({ project }) => {
  // Modal show / hide
  const [modalShow, setModalShow] = useState(false);
  // send data to modal
  const [modalData, setModalData] = useState(project);
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <img
        src={project?.thumb}
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md object-cover"
      />

      <div className="w-56 -mt-10 overflow-hidden bg-base-200 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white truncate px-1">
          {project?.name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-base-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
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
