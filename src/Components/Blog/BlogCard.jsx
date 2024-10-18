import React from 'react';
import blog from '../../assets/images/blog.png';

export const BlogCard = () => {
  return (
    <div className='w-[380px] h-[424px] rounded-[12px] p-[8px] gap-[8px] bg-[#FFFFFF] flex flex-col shadow-lg transition-transform transform hover:-translate-y-2'>
      <img src={blog} alt='blog' className='w-[364px] h-[243px]' />
      <div className='flex flex-col w-[364px]'>
        <button className='w-[189px] h-[25px] rounded-[28px] p-[2px_10px_2px_10px] gap-[10px] bg-[#00A7E7] my-2'>
          Pet Knowledge
        </button>
        <h1 className='w-[348px] h-[48px] font-SVN-Gilroy font-bold text-[16px] leading-[24px] text-[#00171F]'>
          Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively
        </h1>
        <h2 className='w-[348px] h-[60px] font-SVN-Gilroy font-normal text-[14px] leading-[20px] text-[#242B33] mt-2'>
          Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.
        </h2>
      </div>
    </div>
  );
}
