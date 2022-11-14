import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000009] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="text-center max-w-[750px] w-full grid sm:grid-cols-2 gap-2">
          <div className="sm:text-right pb-5 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#7290A9]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="text-center max-w-[750px] w-full grid sm:grid-cols-2 gap-4 px-4">
          <div className="sm:text-right text-xl font-bold">
            <p className="">
              Currently completing a Bachelor of Computer Science majoring in Data Science and also Diploma
              in Japanese at Monash University. 
            </p>
          </div>
          <div className="sm:text-left">
            <p>
              Welcome to the 1st version of my Web Portfolio. 
            </p>
            <p className="py-2">
              The purpose of this website is to test if I could build a website in 4-5 days with no prior knowledge on front-end development.
              Furthermore, the website showcases my passion going forward in the Tech Industry. Thank you for visiting 
              my web portfolio.
            </p>
            <p>
              My hobbies include playing video games, rock-climbing, listening
              to music, and photography. I would love to hear about you, feel free to connect down in the contacts page 
              or any suggestions for the page!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
