import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000009]">
      {/* Container */}
      
      <div className="max-w-[750px] mx-auto px-8 flex flex-col justify-center h-full items-center">
        <p className="text-[#7290A9] text-m sm:text-l">
          Hi, nice to meet you. I am
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#215B7A] py-1">
          Triet Le.
        </h1>
        <h2 className="text-[#7290A9] text-2xl sm:text-4xl ">
          Aspiring Full-stack Developer
        </h2>
        <div>
          <button className="py-3 text-[#7290A9] flex items-center hover:bg-[#215B7A] border-2 rounded-2xl px-6 my-3 border-[#215B7A]">
            View Skills <HiArrowNarrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
