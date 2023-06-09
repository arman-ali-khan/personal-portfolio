import Link from "next/link";

const Blogs = () => {
  return (
    <div className="bg-base-100 border rounded-md">
      <div className="p-3 flex justify-between rounded-t-md">
      <h2 className="text-xl font-bold font-gumela">Recent Blogs</h2>
        <Link href={"/blogs"} className="">
          All Blogs
        </Link>
      </div>
     <div className="px-4">
     <div className="py-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabindex="0"
            role="button"
          >
            Design
          </a>
        </div>
        <div className="flex md:block lg:flex gap-3">
          <div className="w-44 sm:w-44 md:w-full lg:w-44 h-32 md:h-44 lg:h-32">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="mt-2 w-full ">
            <a
              href="#"
              className="text-lg leading-6 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline  px-1"
              tabindex="0"
              role="link"
            >
              Accessibility tools for designers and developers
            </a>
            <p className="mt-2 text-gray-600 text-xs sm:text-base dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto!
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabindex="0"
            role="button"
          >
            Design
          </a>
        </div>
        <div className="flex md:block lg:flex gap-3">
          <div className="w-44 sm:w-44 md:w-full lg:w-44 h-32 md:h-44 lg:h-32">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="mt-2 w-full">
            <a
              href="#"
              className="text-lg leading-6 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
              tabindex="0"
              role="link"
            >
              Accessibility tools for designers and developers
            </a>
            <p className="mt-2 text-gray-600 text-xs sm:text-base dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto!
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabindex="0"
            role="button"
          >
            Design
          </a>
        </div>
        <div className="flex md:block lg:flex gap-3">
          <div className="w-44 sm:w-44 md:w-full lg:w-44 h-32 md:h-44 lg:h-32">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="mt-2 w-full">
            <a
              href="#"
              className="text-lg leading-6 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
              tabindex="0"
              role="link"
            >
              Accessibility tools for designers and developers
            </a>
            <p className="mt-2 text-gray-600 text-xs sm:text-base dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto!
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabindex="0"
            role="button"
          >
            Design
          </a>
        </div>
        <div className="flex md:block lg:flex gap-3">
          <div className="w-44 sm:w-44 md:w-full lg:w-44 h-32 md:h-44 lg:h-32">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
          <div className="mt-2 w-full">
            <a
              href="#"
              className="text-lg leading-6 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
              tabindex="0"
              role="link"
            >
              Accessibility tools for designers and developers
            </a>
            <p className="mt-2 text-gray-600 text-xs sm:text-base dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto!
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Blogs;
