import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#020846] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#ea1179]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a versatile full-stack developer experienced in building both
              frontend and backend of web applications. I work with React and
              Node.js, Express.js to create dynamic user interfaces and
              functional server systems. My database proficiency spans MySQL and
              MongoDB. Within my portfolio, you'll discover a collection of
              projects that serve as tangible demonstrations of my abilities.
              Let's collaborate to achieve success together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
