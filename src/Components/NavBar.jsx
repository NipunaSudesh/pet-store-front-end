import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <header className="w-full h-[100px] p-[28px] px-[130px] flex justify-between bg-transparent opacity-100">
      <div className="w-[529px] h-[40px] flex gap-[48px] opacity-100">
        <div className="flex items-center gap-10">
          <div className='flex-col w-[115px] h-[40px] flex'>
            <h1 className="text-4xl font-bold">Monito</h1>
            <h4 className='mx-auto text-[#103559] text-xs'>Pets For Best</h4>
          </div>
          <nav className="ml-4 flex">
            <ul className="space-x-4 flex gap-[48px]">
              <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Home</a></li>
              <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Category</a></li>
              <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">About</a></li>
              <li className='font-bold text-lg leading-6 text-[#003459]'><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="w-[615px] h-[44px] flex gap-[14px] opacity-100">
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
          <div className="bg-[#D80027] w-[16px] h-[16px] top-[2.5px] flex items-center justify-center rounded-full left-[3px]">
  <FaStar className="w-[7.31px] h-[7.31px] text-[#FFDA44]" />
</div>

            <select className="border bg-transparent rounded-md p-2 ml-2">
              <option value="VND">VND</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
