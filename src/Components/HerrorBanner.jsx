import React from 'react';
import banner from '../assets/images/banner.png';
import { NavBar } from './NavBar';

export const HerrorBanner = () => {
  return (
    <div className='relative flex flex-col w-full h-[663px] bg-[#FCEED5] rounded-b-[40px]'>
      {/* NavBar at the top */}
      <div className="relative z-10">
        <NavBar />
      </div>

      {/* Rotated background elements */}
      <div className="w-[635px] h-[635px] absolute -top-[597px] -left-[214.33px] rounded-[99px] rotate-[25.23deg] bg-[#F7DBA7] z-0"></div>
   
      <div className="w-[67.1px] h-[67.1px] absolute top-[179px] left-[139.22px] gap-0 rounded-tl-[20px] opacity-100 rotate-[-25.23deg] bg-[#F7DBA7] z-10"></div>

      <div>
  {/* Blue Div Underneath */}
  <div
    className="absolute w-[605px] h-[635px] top-[268px] left-[699.22px] rounded-[99px] opacity-100 -rotate-[-9.35deg] bg-[#003459] " // Set z-index to -1 to keep it under
  ></div>

  {/* Yellow Div on Top */}
  <div className="w-[635px] h-[635px] absolute top-[245px] left-[750.67px] rounded-[99px] -rotate-[-25.23deg] bg-[#F7DBA7] z-0"></div>
</div>



      {/* Content area */}
      <div className='flex bg-transparent items-start justify-between relative z-20 '>
        {/* Text section */}
        <div className='flex flex-col justify-start relative top-[79px] left-[132.6px]'>
          <h1 className='w-[535px] h-[68px] font-SVN-Gilroy font-extrabold text-[60px] leading-[68px] mb-4 text-left'>
            One more friend
          </h1>
          <h2 className='w-[532px] h-[60px] font-SVN-Gilroy font-bold text-[46px] leading-[60px] mb-4 text-left'>
            Thousands more fun!
          </h2>
          <p className='w-[530px] h-[72px] font-SVN-Gilroy font-medium text-[16px] leading-[24px] text-gray-700 mb-6 text-left'>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className='flex space-x-4'>
            <button className='border border-[#003459] bg-transparent text-black px-7 py-3.5 rounded-[57px] transition hover:bg-gray-100'>
              View Intro
            </button>
            <button className='bg-[#003459] text-white rounded-[57px] px-[28px] py-[14px] transition hover:bg-[#0c1b26]'>
              Explore Now
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className='relative flex items-center justify-center'>
          <img src={banner} alt="Banner of various pets" className='w-[944px] h-[693px] top-[84px] left-[530px] z-10' />
        </div>
      </div>
    </div>
  );
};
