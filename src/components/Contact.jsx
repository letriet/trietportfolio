import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#000009] flex justify-center items-center h-screen"
    >
      
      <form method='POST' action="https://getform.io/f/23bc1d5b-4ee8-4945-96af-f58f62f26050" className="flex flex-col max-w-[550px] w-full h-screen">
        <div className="pb-2">
          <p className="text-4xl font-bold text-gray-300 pt-14 pb-4 ">
            Contact
          </p>
          <p className="pb-4 text-gray-300">For mobile users, click below on the icons or send a form</p>
        </div>
        <div>
          <div className="w-full h-full grid grid-cols-2 gap-7 items-center pb-6">
            <a
                className="hover:scale-110 flex justify-center items-center w-full text-gray-300 bg-blue-600"
                href="https://www.linkedin.com/in/letriet/"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
              <a
                className="hover:scale-110 flex justify-center items-center w-full text-gray-300 bg-black"
                href="https://github.com/letriet"
              >
                GitHub <FaGithub size={30} />
              </a>

          </div>
        </div>
        <input className="bg-[#7290A9] p-2 placeholder-black" type="text" placeholder='Name' name="name" />
        <input className="my-4 p-2 bg-[#7290A9] placeholder-black" type="email" placeholder='Email' name="email" />
        <textarea className="bg-[#7290A9] p-2 placeholder-black" name="message" rows="10" placeholder='Message'></textarea> 
        <button className="text-gray-300 hover:bg-[#215B7A] border-2 rounded-2xl px-4 py-3 my-10  mx-auto flex items-center border-[#215B7A]">Let's Connect</button>
      </form>
    </div>
  );
};

export default Contact;
