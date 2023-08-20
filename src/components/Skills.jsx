import React from "react";
import MySql from "../assets/mysql.PNG";
import MongoDB from "../assets/mongo.png";
import Node from "../assets/node.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#020846]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ea1179]">
            Skills
          </p>
          <p className="py-4">
            The following are the technologies I've worked with and have
            experience using:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="Javascript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reactjs} alt="ReaCT icon" />
            <p className="my-4">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySql} alt="MySQL icon" />
            <p className="my-4">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB icon" />
            <p className="my-4">MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#d9d9d9] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
