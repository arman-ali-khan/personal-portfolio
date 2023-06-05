const Qualification = () => {
  return (
    <section className="w-full border h-full rounded-lg p-4">
      <div className="container max-w-5xl  mx-auto">
        <h1 className="text-xl font-gumela font-bold  py-2">Qualification</h1>
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 w-full space-y-2 ">
            <h2 className="font-bold border-b-2">Educations</h2>
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-2 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-warning">
                <h3 className="text-lg font-semibold tracking-wide">
                  Kumorgonj BL High School
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-600">
                  JAN 2010 - JUN 2015{" "}
                </time>
                <p className="my-1 text-xs">
                  Secondary School Certificate (SSC)
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-warning">
                <h3 className="text-lg font-semibold tracking-wide">
                  Kumorgonj BL High School
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-600">
                  JAN 2010 - JUN 2015{" "}
                </time>
                <p className="my-1 text-xs">
                  Secondary School Certificate (SSC)
                </p>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 w-full space-y-2 ">
            <h2 className="font-bold border-b-2">Jobs</h2>
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-2 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-warning">
                <h3 className="text-lg font-semibold tracking-wide">
                  Kumorgonj BL High School
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-600">
                  JAN 2010 - JUN 2015{" "}
                </time>
                <p className="my-1 text-xs">ICT Class Teacher</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-warning">
                <h3 className="text-lg font-semibold tracking-wide">
                  Kumorgonj BL High School
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-600">
                  JAN 2010 - JUN 2015{" "}
                </time>
                <p className="my-1 text-xs">
                  Secondary School Certificate (SSC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
