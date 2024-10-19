import React from 'react';
import dogs from '../../assets/images/dogs.png';
import { FaPlay } from "react-icons/fa";

export const Banner = () => {
  return (
    <div className='flex flex-col'>
      {/* Large Screen Banner */}
      <div className='hidden lg:block w-[1270px] h-[378px] relative left-[130px] bg-[#FCEED5] rounded-[20px] z-0 overflow-hidden'>
        {/* Background Shape */}
        <div className='w-[816.4px] h-[799.52px] top-[-184px] absolute left-[537.23px] rounded-[99px] transform rotate-[50.22deg] bg-[#002A48] z-0'></div>

        {/* Content Wrapper */}
        <div className='flex'>
          {/* Image */}
          <div>
            <img src={dogs} alt='dogs' className='w-[650px] h-[301px] top-[77px] left-[51px] absolute z-20' />
          </div>

          {/* Text and Buttons */}
          <div className="relative flex justify-end">
            <h1 className='w-[535px] h-[68px] font-SVN-Gilroy top-[64px] absolute left-[692px] font-extrabold text-[52px] leading-[64px] mb-4 text-right text-[#FDFDFD] pr-[70px] z-20'>
              One more friend
            </h1>

            <h2 className='w-[484px] h-[60px] top-[134px] absolute left-[741px] font-SVN-Gilroy font-bold text-[36px] leading-[54px] mb-4 text-right text-[#FDFDFD] pr-[70px] z-30'>
              Thousands more fun!
            </h2>

            <p className='w-[425px] h-[54px] top-[196px] absolute left-[781px] font-SVN-Gilroy font-medium text-[12px] text-[#CCD1D2] mb-6 text-right pr-[50px] z-30'>
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>

            {/* Buttons */}
            <button className="flex items-center border border-[#FDFDFD] text-[#FDFDFD] h-[48px] absolute w-[161px] top-[274px] left-[791px] px-[28px] py-[14px] rounded-full transition-all hover:bg-gray-700 z-30">
              View Intro
              <span className="ml-2 flex justify-center items-center w-[18px] h-[18px] rounded-full border border-[#FDFDFD]">
                <FaPlay size={8} />
              </span>
            </button>

            <button className='bg-[#FDFDFD] w-[161px] text-[#323030] rounded-[57px] px-[28px] py-[14px] transition-all duration-300 hover:bg-[#8a8e90] h-[48px] absolute top-[274px] left-[1000px] z-30'>
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Small Screen Banner */}
      <div className='block lg:hidden w-[414px] h-[441px] relative bg-[#FCEED5] rounded-[16px] overflow-hidden'>
        {/* Background Shape */}
        <div className='w-[300px] h-[500px] top-[280px] absolute left-[80px] rounded-[50px] transform rotate-[100.22deg] bg-[#002A48] z-0'></div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col items-center justify-center text-center p-6">
          <h1 className='w-[300px] font-SVN-Gilroy font-extrabold text-[28px] leading-[32px] text-[#002A48] z-20'>
            One more friend
          </h1>

          <h2 className='w-[280px] font-SVN-Gilroy font-bold text-[20px] leading-[24px] mt-2 text-[#002A48] z-30'>
            Thousands more fun!
          </h2>

          <p className='w-[260px] font-SVN-Gilroy font-medium text-[12px] text-[#002A48] mt-4 z-30'>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
          </p>

          {/* Buttons */}
          <div className="flex mt-4 space-x-4 items-center">
  <button className="flex items-center justify-center border border-[#002A48] text-[#002A48] h-[40px] w-[140px] px-[20px] py-[10px] rounded-full transition-all hover:bg-gray-700 z-30">
    View Intro
    <span className="ml-2 flex justify-center items-center w-[18px] h-[18px] rounded-full border border-[#002A48]">
      <FaPlay size={8} />
    </span>
  </button>

  <button className='bg-[#002A48] w-[140px] text-[white] rounded-full px-[20px] py-[10px] transition-all duration-300 hover:bg-[#8a8e90] z-30'>
    Explore Now
  </button>
</div>

        </div>

        {/* Image */}
        <div className='w-[400px] h-[200px] absolute top-[250px] left-[15px]'>
          <img src={dogs} alt='dogs' className='w-full h-full object-cover z-20' />
        </div>
      </div>
    </div>
  );
};
