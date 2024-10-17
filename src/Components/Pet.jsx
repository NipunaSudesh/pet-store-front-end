import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export const Pet = () => {
  return (
    <div className='relative w-full h-[986px] bg-white z-20'>
      {/* Text Section */}
      <div className='absolute flex w-full top-[60px] left-[130px]'>
        <div className='w-[367px] h-[62px] gap-[2px]'>
          <h2 className='w-[191px] h-[24px] font-SVN-Gilroy font-medium text-[16px] leading-[24px] text-[#000000]'>
            What's new?
          </h2>
          <h1 className='w-[367px] h-[36px] font-SVN-Gilroy font-bold text-[24px] leading-[36px] text-[#003459]'>
            Take a look at some of our pets
          </h1>
        </div>
      </div>

      {/* Button Section */}
      <div className='absolute top-[78px] right-[130px]'>
        <button className='flex items-center justify-between w-[180px] h-[44px] rounded-[57px] border border-1.5 border-gray-500 px-[28px] py-[12px] gap-[8px] transition hover:bg-gray-100'>
          View More
          <IoIosArrowForward className='w-6 h-6 text-gray-700' />
        </button>
      </div>
    </div>
  );
};
