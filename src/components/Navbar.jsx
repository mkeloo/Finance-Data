import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">
        <span className=" link link-underline link-underline-black">
          DollarTech
        </span>
        <span className="text-5xl">.</span>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a]  link link-underline link-underline-black">
          Home
        </li>
        <li className="p-4 hover:text-[#00df9a]  link link-underline link-underline-black">
          Company
        </li>
        <li className="p-4 hover:text-[#00df9a]  link link-underline link-underline-black">
          Resources
        </li>
        <li className="p-4 hover:text-[#00df9a]  link link-underline link-underline-black">
          About
        </li>
        <li className="p-4 hover:text-[#00df9a]  link link-underline link-underline-black">
          Contact
        </li>
      </ul>

      <div onClick={toggleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] duration-300 ease-in-out'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-8 duration-300 hover:skew-x-3 hover:skew-y-3">
          DollarTech<span className="text-5xl">.</span>
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <span className="hover:text-[#00df9a] duration-300 ">Home</span>
          </li>
          <li className="p-4 border-b border-gray-600">
            <span className="hover:text-[#00df9a] duration-300">Company</span>
          </li>
          <li className="p-4 border-b border-gray-600">
            <span className="hover:text-[#00df9a] duration-300">Resources</span>
          </li>
          <li className="p-4 border-b border-gray-600">
            <span className="hover:text-[#00df9a] duration-300">About</span>
          </li>
          <li className="p-4">
            <span className="hover:text-[#00df9a] duration-300">Contact</span>
          </li>
          <h2 className="m-10 flex items-center justify-center ">
            Made by{' '}
            <span className="m-4 link link-underline link-underline-black">
              {' '}
              Moksh Keloo
            </span>
          </h2>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
