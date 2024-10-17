import React from 'react';
import banner from '../assets/images/banner.png';

export const HerrorBanner = () => {
  return (
    <div className='w-full flex h-[663px] bg-[#FCEED5] rounded-b-[40px] items-center justify-between relative'>

      <div className='flex flex-col justify-center ml-[130px]'>
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
          <button className='bg-blue-500 text-white rounded-[57px] px-[28px] py-[14px] transition hover:bg-blue-600'>
            Explore Now
          </button>
        </div>
      </div>

      
      <div className='flex items-center justify-center mr-[130px]'>
        <img src={banner} alt="Banner of various pets" className='w-[944px] h-[693px] top-[84px] left-[539ox]' />
      </div>
    </div>
  );
};
