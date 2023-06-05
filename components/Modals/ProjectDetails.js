// const ProjectDetails = ({ modalShow, setModalShow, modalData }) => {
//   return (
//     <div
//       className={`duration-100 ${
//         modalShow ? "" : "!w-0 !h-0 -z-50 opacity-0  transition-all absolute"
//       }`}
//     >
//       <div className="flex justify-center items-center h-screen w-full">
//         <div
//           className={`fixed overflow-y-auto h- top-0 duration-300 left-0 w-screen z-50 flex justify-center items-center`}
//         >
//           {/* Outside of modal */}
//           <div
//             onClick={() => setModalShow(!modalShow)}
//             className="backdrop-blur-md fixed w-screen h-screen top-0 left-0 "
//           ></div>

//           <div className="flex items-center justify-center h-full">
//             {/* Modal body */}
//             <div className="max-w-2xl overflow-hidden h-full  mx-auto overflow-y-auto bg-base-200 z-50 rounded-lg shadow-md dark:bg-gray-800 ">
//               <div className="flex justify-end sticky top-0">
//                 <div className="w-full bg-base-100 flex justify-between px-4 py-2">
//                   <h2>{modalData?.title}</h2>
//                   <button
//                     onClick={() => setModalShow(!modalShow)}
//                     className="btn btn-warning btn-sm rounded-full"
//                   >
//                     x
//                   </button>
//                 </div>
//               </div>
//               <div className="overflow-y-auto">
//                 <div>
//                   <img
//                     className="object-cover object-top hover:object-bottom duration-[4000ms] w-full h-96"
//                     src={modalData?.longImage}
//                     alt="Article"
//                   />
//                   <span className="md:hidden">Click To Scroll</span>
//                   <span className="hidden sm:block">Hover To Scroll</span>
//                 </div>

//                 <div className="px-4 py-2 ">
//                   <div>
//                     <a
//                       href="#"
//                       className="block text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
//                       tabindex="0"
//                       role="link"
//                     >
//                       {modalData?.name}
//                     </a>
//                     <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                       {modalData?.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

const ProjectDetails = ({ modalShow, setModalShow, modalData }) => {
  return (
    <div className="relative">
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        
        <div className="modal-box p-0">
        <div className="max-w-2xl overflow-hidden h-full  mx-auto overflow-y-auto bg-base-200 z-50 rounded-lg shadow-md dark:bg-gray-800 ">
        <div className="flex justify-end sticky w-full top-0">
                      <div className="w-full bg-base-100 flex justify-between px-4 py-2">
                        <h2>{modalData?.title}</h2>
                        <label
                          htmlFor="my_modal_7"
                          className="btn btn-warning btn-sm rounded-full"
                        >
                          x
                        </label>
                      </div>
                    </div>
                    <div className="overflow-y-auto">
                      <div>
                        <img
                          className="object-cover object-top hover:object-bottom duration-[4000ms] w-full h-44 md:h-96"
                          src={modalData?.longImage}
                          alt="Article"
                        />
                        <span className="md:hidden">Click To Scroll</span>
                        <span className="hidden sm:block">Hover To Scroll</span>
                      </div>

                      <div className="px-4 py-2 ">
                        <div>
                          <a
                            href="#"
                            className="block text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                            tabindex="0"
                            role="link"
                          >
                            {modalData?.name}
                          </a>
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {modalData?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
        <label
          className="modal-backdrop fixed w-screen h-screen left-0 top-0 -z-10"
          htmlFor="my_modal_7"
        ></label>
      </div>
    </div>
  );
};

export default ProjectDetails;
