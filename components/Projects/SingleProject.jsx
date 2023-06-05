import { useState } from "react";
import ProjectDetails from "../Modals/ProjectDetails";

const SingleProject = ({items,}) => {
      // Modal show / hide
  const [modalShow, setModalShow] = useState(false);
  // send data to modal
  const [modalData, setModalData] = useState({ data: "Hello Modal" });
    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto">
            <img
              src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md object-cover"
            />
  
            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3
               
                className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white truncate px-1"
              >
                Project Title GHello hjkasfkjah fdasdjkaskldj
              </h3>
  
              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  <a className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full" href={''}>Live</a>
                </span>
                <button  onClick={() => setModalShow(!modalShow)} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                 Details
                </button>
              </div>
            </div>
             {/* Modal inport */}
      
        <ProjectDetails modalData={modalData} modalShow={modalShow} setModalShow={setModalShow} />
      
          </div>
    );
};

export default SingleProject;