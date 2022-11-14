// import React, { useState } from "react";
// import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import Logo from "../assets/namelogofinal2.png";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);
//   return (
//     <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000009] text-gray-100">
//       <div className="w-[160px] h-[60px] flex justify-between items-center ml-[-30px]">
//         <img src={Logo} alt="Name Logo" style={{ width: "100px" }} />
//       </div>

//       {/* Menu */}

//       <ul className="hidden md:flex">
//         <li>
//           <Link to="home" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="skills" smooth={true} duration={500}>
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Hamburger */}

//       <div onClick={handleClick} className="md:hidden z-10">
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>

//       {/* Mobile Menu */}

//       <ul
//         className={
//           !nav
//             ? "hidden"
//             : "absolute top-0 left-0 w-full h-screen bg-[#131322] flex flex-col justify-center items-center"
//         }
//       >
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="home" smooth={true} duration={500}>
//             Home
//           </Link></li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="about" smooth={true} duration={500}>
//             About
//           </Link></li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
//             Skills
//           </Link></li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
//             Contact
//           </Link></li>
//       </ul>

//       {/* Social Icons */}

//       <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
//         <ul>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://www.linkedin.com/in/letriet/"
//             >
//               LinkedIn <FaLinkedin size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://github.com/letriet"
//             >
//               GitHub <FaGithub size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-400 ">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="/"
//             >
//               Resume <BsFillPersonLinesFill size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-[#000009] shadow text-gray-300">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl font-bold">TML</h2>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-300 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-300 hover:text-[#7290A9]">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="text-gray-300 hover:text-[#7290A9]">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="text-gray-300 hover:text-[#7290A9]">
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="text-gray-300 hover:text-[#7290A9]">
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/letriet/"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/letriet"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
