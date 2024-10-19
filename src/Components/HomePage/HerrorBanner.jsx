import React from 'react';
import banner from '../../assets/images/banner.png';
import { NavBar } from './NavBar';
import { FaPlay } from "react-icons/fa";

export const HerrorBanner = () => {
  return (
    <div className='relative flex flex-col w-full max-w-[1440px] h-auto bg-[#FCEED5] rounded-b-[40px]'>
      <div className="relative z-10">
        <NavBar />
      </div>

      {/* Background Shapes */}
      <div className="hidden md:block w-[635px] h-[635px] absolute -top-[597px] -left-[214.33px] rounded-[99px] rotate-[25.23deg] bg-[#F7DBA7] z-0"></div>
      <div className="hidden md:block w-[67.1px] h-[67.1px] absolute top-[179px] left-[139.22px] gap-0 rounded-tl-[20px] opacity-100 rotate-[-25.23deg] bg-[#F7DBA7] z-10"></div>
 

      <div>
        <div
          className="absolute w-[585px] h-[635px] top-[268px] left-[699.22px] rounded-[99px] opacity-100 -rotate-[-9.35deg] bg-[#003459] " 
        ></div>
        <div className="w-[605px] h-[635px] absolute top-[245px] left-[750.67px] rounded-[99px] -rotate-[-25.23deg] bg-[#F7DBA7] z-0"></div>
      </div>

      <div className="hidden md:block w-[635px] h-[635px] absolute top-[664px] left-[38.33px] rounded-[99px] -rotate-[-56.47deg] bg-[#372b14] z-0 opacity-[40%]"></div>
      <div className="hidden md:block w-[21.47px] h-[21.47px] absolute top-[223.64px] left-[727px] rounded-[6px] -rotate-[43deg] bg-[#002A48] "></div>
      <div className="hidden md:block w-[27.5px] h-[27.5px] absolute top-[210.68px] left-[728px] rounded-[9px] -rotate-[22.85deg] bg-[#F7DBA7] z-0 "></div>
      <div className="hidden md:block w-[14.63px] h-[14.63px] absolute top-[148px] left-[762.19px] rounded-[4px] -rotate-[-20.79deg] bg-[#F7DBA7] z-0 "></div>


      <div
          className="md:hidden absolute w-[220px] h-[520px] top-[518px] left-[49.22px] rounded-[30px] opacity-100 -rotate-[-19.35deg] bg-[#003459] z-10 " 
        ></div>
<div
  className="md:hidden absolute w-[220px] h-[520px] top-[488px] left-[59.22px] rounded-[30px] opacity-100 -rotate-[-29.35deg] bg-[#F7DBA7] z-20" 
></div>
<div
  className="md:hidden absolute w-[220px] h-[520px] top-[-438px] left-[59.22px] rounded-[30px] opacity-100 -rotate-[-29.35deg] bg-[#F7DBA7] z-0" 
></div>
<div
  className="md:hidden absolute w-[18px] h-[18px] top-[218px] left-[199.22px] rounded-[5px] opacity-100 -rotate-[-29.35deg] bg-[#003459] z-0" 
></div>




      {/* Main Content */}
      <div className='flex flex-col md:flex-row bg-transparent items-start justify-between relative z-20 p-4'>
  <div className='flex flex-col justify-start relative top-10 md:top-[29px] md:left-[132.6px] gap-4 w-full md:w-[50%]'>
  <h1 className='font-SVN-Gilroy font-extrabold text-[5vw] md:text-[60px] leading-[68px] text-left sm:mb-4 mb-[-30px]'>
  One more friend
</h1>
<h2 className='font-SVN-Gilroy font-bold text-[4vw] md:text-[46px] leading-[40px] text-left '>
  Thousands more fun!
</h2>

    <p className='font-SVN-Gilroy font-medium text-[3vw] md:text-[16px] leading-[24px] text-gray-700 text-left'>
      Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
    </p>
    <div className='flex space-x-4'>
      <button className="flex items-center border border-[#003459] text-[#003459] px-7 py-3.5 rounded-full transition-all hover:bg-gray-100">
        View Intro
        <span className="ml-2 text-[#003459] w-[18px] h-[18px] rounded-full border border-[#003459] flex justify-center items-center mx-auto">
          <FaPlay size={8} />
        </span>
      </button>
      <button className='bg-[#003459] text-white rounded-[57px] px-[28px] py-[14px] transition hover:bg-[#0c1b26]'>
        Explore Now
      </button>
    </div>

        </div>

        <div className='relative flex items-center justify-center mt-4 md:mt-0'>
          <img src={banner} alt="Banner of various pets" className='w-full max-w-[944px] h-auto z-10' />
        </div>
      </div>
    </div>
  );
};
