import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#020846] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ea1179]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fff0f0]">
          Machabelele Manaka
        </h1>
        <h2 className="text-4xl sm:7xl font-bold text-[#8892b0]">
          I'm a Full Stack Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A full-stack developer specialising in building and designing
          exceptional digital experience.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ea1179] hover:border-[#ea1179]">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
