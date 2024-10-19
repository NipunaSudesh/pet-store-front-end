import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai"; // Import the menu icon

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[100px] p-[28px] flex items-center justify-between bg-transparent opacity-100">
      {/* Left Menu Icon for Small Screens */}
    <div className='flex justify-between items-center gap-20 md:hidden'>
    <div className="md:hidden flex items-center">
        <AiOutlineMenu className="w-6 h-6 text-[#003459]" onClick={toggleMenu} />
      </div>

      {/* Logo Section - Centered */}
      <div className="flex md:hidden flex-col items-center mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#003459]">Monito</h1>
        <h4 className='text-[#103559] text-xs text-center'>Pets For Best</h4>
      </div>
      <div className="md:hidden flex items-center">
        <CiSearch className="w-6 h-6 text-[#003459]" />
      </div>
    </div>



      <div className="flex flex-col items-center ml-[130px]">
        <h1 className="text-4xl font-bold text-center text-[#003459]">Monito</h1>
        <h4 className='text-[#103559] text-xs text-center'>Pets For Best</h4>
      </div>

      {/* Right Search Icon for Small Screens */}
      <div className="md:hidden flex items-center">
        <CiSearch className="w-6 h-6 text-gray-400" />
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex items-center gap-[48px]">
        <ul className="space-x-4 flex">
          <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Home</a></li>
          <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Category</a></li>
          <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">About</a></li>
          <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Search Bar and Community Button for Desktop */}
      <div className="hidden md:flex items-center gap-[14px] opacity-100">
        <div className="relative w-[280px]">
          <CiSearch className="absolute left-4 top-2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            className="border border-gray-300 rounded-full pl-12 pr-4 py-2 shadow-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Search something here!"
          />
        </div>
        <button className="bg-[#003459] w-[203px] h-[44px] text-white px-4 py-2 rounded-[57px] flex items-center justify-center">
          Join the community
        </button>
        <div className='flex items-center'>
          <div className="bg-[#D80027] w-[16px] h-[16px] flex items-center justify-center rounded-full">
            <FaStar className="w-[7.31px] h-[7.31px] text-[#FFDA44]" />
          </div>
          <select className="border bg-transparent rounded-md p-2 ml-2">
            <option value="VND">VND</option>
          </select>
        </div>
      </div>

      {/* Responsive Navigation Menu for Small Screens */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-[100px] left-0 right-0 bg-white p-4 shadow-lg z-10">
          <ul className="flex flex-col space-y-2">
            <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Home</a></li>
            <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Category</a></li>
            <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">About</a></li>
            <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};
