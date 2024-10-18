import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className='bg-[#FCEED5] w-[1440px] h-[440px]  p-[80px_130px_40px_130px] rounded-t-[40px] opacity-100 relative'>
      <div className="container mx-auto">

        <div className='w-auto h-auto rounded-[16px] p-[32px] gap-[20px]'>
        <div className="bg-[#003459] text-white p-4 flex rounded-lg mb-4">
      <h2 className="w-[389px] h-[72px] font-svn-gilroy font-bold text-[24px] my-auto leading-[36px]">Register Now So You Don't Miss Our Programs</h2>
      
<div className='w-[707px] h-auto rounded-[14px] p-[12px] gap-[12px] '>
<div className="flex mt-4 bg-white p-2 rounded-lg">
        <input
          type="text"
          placeholder="Enter your Email"
          className="w-full max-w-[508px] h-auto rounded-[8px] border border-gray-300 p-[14px_28px_14px_28px] gap-[10px] "
        />
        <button className="w-[163px] h-auto rounded-[8px] ml-2 p-[14px 28px 10px 28px] gap-[10px] bg-[#003459]">
          Subscribe Now
        </button>
      </div>
</div>
    </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">

          <nav className="flex space-x-8">
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">Home</a>
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">Category</a>
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">About</a>
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">Contact</a>
          </nav>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>


        <div className="mt-4 text-center text-gray-700 justify-between flex">
          © 2022 Monito. All rights reserved.

          <div className="mb-4 md:mb-0"> 

<h3 className="text-xl font-bold">Monito</h3>
<p className="text-gray-700">Pets for Best</p>
</div>
<div className='gap-4 flex'>
<a href="#" className="ml-2 hover:text-blue-500">Terms of Service</a>
<a href="#" className="ml-2 hover:text-blue-500">Privacy Policy</a>
</div>
        </div>
      </div>
    </footer>
  )
}
