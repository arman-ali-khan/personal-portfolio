import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" z-10 backdrop-blur-2xl bg-base-100 border h-96 rounded-lg overflow-hidden relative">
      <div className="w-full flex justify-center py-4">
        <Image
          className="rounded-full border-warning border-4"
          src={"https://arman.top/img/arman.png"}
          height={200}
          width={200}
        ></Image>
      </div>
      <div className="w-full flex justify-center text-center">
        <div>
          <h2 className="text-3xl font-bold font-gumela">Arman Ali Khan</h2>
          <p>MERN Stack Developer</p>
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-between w-full">
        <a
          className="w-1/2 mr-1 btn btn-warning btn-sm rounded-bl-lg rounded-tr-3xl rounded-none"
          href="#"
        >
          Download Resume
        </a>
        <a
          className="w-1/2 ml-1 btn btn-warning btn-sm rounded-tl-3xl rounded-br-lg rounded-none"
          href="/about"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
