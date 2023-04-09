import React from 'react';

const Card = () => {
    return (
        <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2">
      <div class="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="flex justify-center -mt-16 md:justify-end relative">
         
          <a className="relative" href="https://ledp.ictd.gov.bd/">
            <img
              class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400 bg-blue-300 "
              alt="Testimonial avatar"
              src="http://ledp.ictd.gov.bd/global/img/ledp.apng"
            />
            <span className="absolute top-1 left-0 hover:text-slate-600 text-transparent hover:backdrop-blur-sm p-7 rounded-full text-black">
              <FaLink className="text-2xl duration-200" />
            </span>
          </a>
        </div>

        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
          Wordpress Developer
        </h2>

        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Wrodress/Elementor Developer
        </p>

        <div class="flex justify-end mt-4">
          <a
            href="#"
            class="text-lg font-medium text-blue-600 dark:text-blue-300"
            tabindex="0"
            role="link"
          >
            John Doe
          </a>
        </div>
      </div>
      <div class="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="flex justify-center -mt-16 md:justify-end">
        <a className="relative" href="https://ledp.ictd.gov.bd/">
            <img
              class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400 bg-blue-300 "
              alt="Testimonial avatar"
              src="http://ledp.ictd.gov.bd/global/img/ledp.apng"
            />
            <span className="absolute top-1 left-0 hover:text-slate-600 text-transparent hover:backdrop-blur-sm p-7 rounded-full text-black">
              <FaLink className="text-2xl duration-200" />
            </span>
          </a>
        </div>

        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
          Design Tools
        </h2>

        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>

        <div class="flex justify-end mt-4">
          <a
            href="#"
            class="text-lg font-medium text-blue-600 dark:text-blue-300"
            tabindex="0"
            role="link"
          >
            John Doe
          </a>
        </div>
      </div>
      <div class="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="flex justify-center -mt-16 md:justify-end">
        <a className="relative" href="https://ledp.ictd.gov.bd/">
            <img
              class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400 bg-blue-300 "
              alt="Testimonial avatar"
              src="http://ledp.ictd.gov.bd/global/img/ledp.apng"
            />
            <span className="absolute top-1 hover:text-slate-600 text-transparent left-0 hover:backdrop-blur-sm p-7 rounded-full text-black">
              <FaLink className="text-2xl duration-200" />
            </span>
          </a>
        </div>

        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
          Design Tools
        </h2>

        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>

        <div class="flex justify-end mt-4">
          <a
            href="#"
            class="text-lg font-medium text-blue-600 dark:text-blue-300"
            tabindex="0"
            role="link"
          >
            John Doe
          </a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Card;