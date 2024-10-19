import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { BlogCard } from './BlogCard';

export const Blog = () => {
  return (
    <div className='w-full lg:w-[1440px] h-auto lg:h-[634px] relative flex flex-col'>
      {/* Heading Section */}
      <div className='absolute flex w-full top-[40px] lg:top-[60px] px-4 lg:px-[130px]'>
        <div className='w-full lg:w-[367px] h-[62px] gap-[2px]'>
          <h2 className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] font-SVN-Gilroy font-medium text-[#000000]'>
            What's new?
          </h2>
          <h1 className='text-[20px] lg:text-[24px] leading-[28px] lg:leading-[36px] font-SVN-Gilroy font-bold text-[#003459]'>
            Take a look at some of our pets
          </h1>
        </div>
      </div>

      {/* View More Button */}
      <div className='absolute top-[100px] lg:top-[78px] lg:right-[130px]'>
  <button className='flex items-center justify-between w-full sm:w-auto md:w-[150px] lg:w-[180px] h-[44px] rounded-[57px] border border-1.5 border-gray-500 px-4 lg:px-[28px] py-[12px] gap-[8px] transition hover:bg-gray-100'>
    View More
    <IoIosArrowForward className='w-5 lg:w-6 h-5 lg:h-6 text-gray-700' />
  </button>
</div>


      {/* Blog Cards Grid */}
      <div className='top-[180px] lg:top-[158px] w-full absolute grid grid-cols-1  md:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-[8px] px-4 lg:px-[130px]'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
