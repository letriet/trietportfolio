import React from "react";

import Python from "../assets/python.png";
import R from "../assets/r-project.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import sql from "../assets/OracleSQLDev.png";

const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#000009] text-gray-300 py-8">
      {/* Container */}
      <div className="max-w-[750px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#7290A9]">
            Skills
          </p>
          <p className="py-4">
            Below are my current skillset I have with full-stack development.
          </p>
        </div>

        <div className="w-full h-screen grid grid-cols-2 gap-4 text-center py-8">
          <div class="relative group">
            <img className="w-20 mx-auto" src={Python} alt="Python" />
            <p className="my-4">Python</p>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 h-full left-0 bottom-0 right-0 flex justify-center items-center text-xs shadow-md shadow-[#15191d] bg-[#000009] text-gray-300 font-semibold">
              Proficient at Python. Learnt Algorithms and Data Structures using
              Python; in addition, used Python libraries: Numpy and Pandas for
              multiple regression models and machine learning for university
              assignments.
            </div>
          </div>

          <div class="relative group">
            <img className="w-20 mx-auto" src={R} alt="R" />
            <p className="my-4">R</p>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute h-full left-0 bottom-0 right-0 z-10 flex justify-center items-center text-xs shadow-md shadow-[#15191d] bg-[#000009] text-gray-300 font-semibold">
              Proficient at R. Used for machine learning models, multiple
              regression models, multivariate statistics for university
              assignments.
            </div>
          </div>

          <div class="relative group">
            <img className="w-20 mx-auto" src={react} alt="react" />
            <p className="my-4">React</p>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute h-full left-0 bottom-0 right-0 z-10 flex justify-center items-center text-xs shadow-md shadow-[#15191d] bg-[#000009] text-gray-300 font-semibold">
              Beginner level at ReactJS. Currently self-learning ReactJS for web
              development.
            </div>
          </div>

          <div class="relative group">
            <img className="w-20 mx-auto" src={node} alt="Node" />
            <p className="my-4">Node</p>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute h-full left-0 bottom-0 right-0 z-10 flex justify-center items-center text-xs shadow-md shadow-[#15191d] bg-[#000009] text-gray-300 font-semibold">
              Beginner level at NodeJS. Currently self-learning NodeJS for web
              development.
            </div>
          </div>

          <div class="relative group">
            <img className="w-20 mx-auto " src={tailwind} alt="Tailwind" />
            <p className="my-4">Tailwind</p>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute h-full left-0 bottom-0 right-0 z-10 flex justify-center items-center text-xs shadow-md shadow-[#15191d] bg-[#000009] text-gray-300 font-semibold">
              Beginner level at TailwindCSS. Currently self-learning TailwindCSS
              for web design.
            </div>
          </div>

          <div class="relative group">
            <img className="w-20 mx-auto" src={javascript} alt="Javascript" />
            <p className="my-4">Javascript</p>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute h-full left-0 bottom-0 right-0 z-10 flex justify-center items-center text-xs shadow-md shadow-[#15191d] bg-[#000009] text-gray-200 font-semibold">
              Beginner level at Javascript. Currently self-learning Javascript
              for web development.
            </div>
          </div>

          <div class="relative group">
            <img className="w-20 mx-auto" src={sql} alt="OracleSQL" />
            <p className="my-4">Oracle SQL</p>
            <div class="opacity-0 group-hover:opacity-100 duration-300 absolute h-full left-0 bottom-0 right-0 z-10 flex justify-center items-center text-xs shadow-md shadow-[#15191d] bg-[#000009] text-gray-200 font-semibold">
              Intermediate level at Oracle SQL. Built Databases and knows the
              basics of SQL queries and scripting but have not gone any further
              than University assignments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
