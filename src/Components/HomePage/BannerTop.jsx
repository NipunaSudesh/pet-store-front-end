import React from 'react';
import girl from '../../assets/images/girlWithDog.png';
import { FaPlay } from "react-icons/fa";

export const BannerTop = () => {
  return (
    <div className='w-[1280px] h-[378px] absolute top-[1681px] md:left-[130px] rounded-[20px] bg-[#003459] z-0 overflow-hidden mt-[20px]'>

      <div className="relative w-full">
        <div className="w-[787.54px] h-[787.54px] absolute top-[188.72px] left-[-155.49px] z-10 gap-0 rounded-[99px] opacity-100 -rotate-[-28.25deg] bg-[#002A48]"></div>
        <div className="w-[782.29px] h-[635px] absolute top-[-240px] left-[605.67px] gap-0 rounded-[99px] opacity-100 -rotate-[-25.23deg] bg-[#FCEED5] z-10"></div>
      </div>

      <div className='absolute top-[36px] left-[20px] w-[513px] h-[342px] z-30'>
        <img src={girl} alt='A girl with a dog' className='w-full h-full object-cover' />
      </div>

      <div className="relative flex justify-end">
        <h1 className='w-[535px] h-auto font-SVN-Gilroy top-[64px] absolute left-[692px] font-extrabold text-[52px] leading-[64px] mb-4 text-right z-30 text-[#003459] pr-[70px]'>
          One more friend
        </h1>
        <h2 className='w-[484px] h-auto top-[134px] absolute left-[741px] font-SVN-Gilroy font-bold text-[36px] leading-[54px] mb-4 text-right z-30 text-[#003459] pr-[70px]'>
          Thousands more fun!
        </h2>
        <p className='w-[425px] h-auto top-[196px] absolute left-[781px] font-SVN-Gilroy font-medium text-[12px] text-[#242B33] mb-6 text-right z-30 pr-[50px]'>
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
      </div>

      <button className="flex items-center border border-[#003459] text-[#003459] h-[48px] absolute w-[161px] top-[274px] left-[791px] px-[28px] py-[14px] rounded-full transition-all hover:bg-gray-100 z-30 ">
        View Intro
        <span className="ml-2 flex justify-center items-center w-[18px] h-[18px] rounded-full border border-[#003459]">
          <FaPlay size={8} />
        </span>
      </button>
      <button
        className='bg-[#003459] w-[161px] text-white rounded-[57px] px-[28px] py-[14px] transition-all duration-300 hover:bg-[#0c1b26] h-[48px] absolute top-[274px] left-[1000px] z-30'
      >
        Explore Now
      </button>
    </div>
  );
};
