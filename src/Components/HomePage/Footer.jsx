import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id='footer' className='bg-[#FCEED5] w-full h-auto p-[40px_20px_20px_20px] rounded-t-[40px]'>
      <div className="container mx-auto">

        <div className='w-full h-auto rounded-[16px] p-[32px] gap-[20px]'>
          <div className="bg-[#003459] text-white p-4 flex flex-col md:flex-row justify-between items-center rounded-lg mb-4">
            <h2 className="font-svn-gilroy font-bold text-[24px] leading-[36px] mb-4 md:mb-0">
              Register Now So You Don't Miss Our Programs
            </h2>
            <div className='w-full md:w-auto'>
              <div className="flex mt-4 bg-white p-2 rounded-lg">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="w-full max-w-[300px] h-auto rounded-[8px] border border-gray-300 p-[14px_28px]"
                />
                <button className="w-[163px] h-auto rounded-[8px] ml-2 p-[14px 28px] bg-[#003459]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-6">

          <nav className="flex flex-wrap space-x-6 md:space-x-8 mb-4 md:mb-0">
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">Home</a>
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">Category</a>
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">About</a>
            <a href="#" className="font-svn-gilroy text-[16px] font-medium leading-[24px] ">Contact</a>
          </nav>

          <div className="flex space-x-8 md:space-x-4 mx-auto">
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

        <div className="mt-4 text-center text-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0"> 
            <h3 className="text-xl font-bold">Monito</h3>
            <p className="text-gray-700">Pets for Best</p>
          </div>
          <div className="flex items-center">
            <a href="#" className="ml-2 hover:text-blue-500">Terms of Service</a>
            <a href="#" className="ml-2 hover:text-blue-500">Privacy Policy</a>
          </div>
          <div className='hidden md:block'>© 2022 Monito. All rights reserved.</div>

        </div>
      </div>
    </footer>
  )
}
