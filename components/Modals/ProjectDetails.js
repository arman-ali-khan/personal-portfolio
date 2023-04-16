import React from 'react';

const ProjectDetails = ({modalShow,setModalShow}) => {
    return (
       <div>
         <div className={`fixed top-0 duration-300 left-0 w-screen h-screen  z-50 flex justify-center items-center`}>
            {/* Outside of modal */}
        <div onClick={()=>setModalShow(!modalShow)} className='backdrop-blur-xl  backdrop-brightness-95 backdrop-contrast-75 backdrop-saturate-150 -backdrop-hue-rotate-15 fixed w-screen h-screen top-0 left-0 '></div>

        {/* Modal body */}
         <div class="max-w-2xl overflow-hidden bg-base-200 z-50 rounded-lg shadow-md dark:bg-gray-800 ">
         <div className='flex justify-end'>
                <button onClick={()=>setModalShow(!modalShow)} className='btn btn-warning btn-sm rounded-full'>x</button>
            </div>
    <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article"/>

    <div class="p-6">
        <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
            <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">I Built A Successful Blog In One Year</a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
        </div>

        <div class="mt-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                </div>
                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
            </div>
            
        </div>
    </div>
</div>
        </div>
       </div>
    );
};

export default ProjectDetails;