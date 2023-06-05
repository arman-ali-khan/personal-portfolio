const Qualification = () => {
  return (
    <section className="w-full border h-full rounded-lg p-4">
      <div className="container max-w-5xl  mx-auto">
        <h1 className="text-xl font-gumela font-bold  py-2">Qualification</h1>
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 w-full space-y-2 ">
            <h2 className="font-bold border-b-2">Educations</h2>
            <div className="col-span-12 md:space-y-6 relative px-4 sm:col-span-8 sm:space-y-2 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300">
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-warning">
                <h3 className="text-base font-semibold tracking-wide">
                  Kumorgonj BL High School
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-600">
                  JAN 2010 - JUN 2015{" "}
                </time>
                <p className="my-1 text-xs">
                  Secondary School Certificate (SSC)
                </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-warning">
                <h3 className="text-base font-semibold tracking-wide">
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
            <div className="col-span-12 md:space-y-6 relative px-4 sm:col-span-8 sm:space-y-2 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300">
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-warning">
                <h3 className="text-base font-semibold tracking-wide">
                  Kumorgonj BL High School
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-600">
                  JAN 2010 - JUN 2015{" "}
                </time>
                <p className="my-1 text-xs">ICT Class Teacher</p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-warning">
                <h3 className="text-base font-semibold tracking-wide">
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
