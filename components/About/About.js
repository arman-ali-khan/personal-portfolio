import React from "react";
import { FaBeer, FaLink } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="flex justify-center">
          <div className="flex justify-center flex-col text-center my-4">
            <h3 className="text-4xl font-bold">About Me</h3>
            <p>My introduction</p>
          </div>
        </div>
        <div className="md:flex justify-center gap-16">
          <div>
            <img
              className="w-96 h-96"
              src="https://play-lh.googleusercontent.com/edmBVFMS9fhuZycs2I6jCO7vGxhH434upOADR2e3x5Wi_s6Et4vcFY0gYs0q_B0qFS8"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-12">
            <p className="w-96 text-lg">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>
            <div className="flex gap-2 justify-between">
              <div>
                <span className="text-3xl">08+</span> <br />
                Years
                <br />
                experience
              </div>
              <div>
                <span className="text-3xl">08+</span>
                <br />
                Completed
                <br />
                project
              </div>
              <div>
                <span className="text-3xl">08+</span>
                <br />
                Companies
                <br />
                worked
              </div>
            </div>
            <div>
              <button className="btn-link">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
