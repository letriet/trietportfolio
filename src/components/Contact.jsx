import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000009] flex justify-center items-center p-4"
    >
      <form method='POST' action="https://getform.io/f/23bc1d5b-4ee8-4945-96af-f58f62f26050" className="flex flex-col max-w-[550px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#7290A9] text-gray-300">
            Contact
          </p>
        </div>
        <input className="bg-[#7290A9] p-2 placeholder-black" type="text" placeholder='Name' name="name" />
        <input className="my-4 p-2 bg-[#7290A9] placeholder-black" type="email" placeholder='Email' name="email" />
        <textarea className="bg-[#7290A9] p-2 placeholder-black" name="message" rows="10" placeholder='Message'></textarea> 
        <button className="text-gray-300 hover:bg-[#215B7A] border-2 rounded-2xl px-4 py-3 my-8 mx-auto flex items-center border-[#215B7A]">Let's Connect</button>
      </form>
    </div>
  );
};

export default Contact;
