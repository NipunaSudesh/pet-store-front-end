import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { img1,img2,img3,img4,img5,img6,img7 } from '../assets';

export const Banner2 = () => {
  return (
    <div className='w-[1438px] h-[251px] mt-[100px] gap-[15px] p-[40px 130px 40px 130px] flex flex-col '>
        <div className='w-full h-[44px] flex justify-between px-36'>
        <h1 className='w-[341px] h-[31px] font-SVN-Gilroy font-medium text-[16px] leading-[31px]'>
    Proud to be part of  <span> </span>
    <span className='w-[117px] h-[36px] font-SVN-Gilroy font-bold text-[24px] leading-[36px]'>
         Pet Sellers
    </span>
</h1>

        
        <div>
 <button className='flex items-center justify-between w-[261px] h-[44px] rounded-[57px] border border-1.5 border-gray-500 px-[28px] py-[12px] gap-[8px] transition hover:bg-gray-100'>
          View Our More Sallars
          <IoIosArrowForward className='w-6 h-6 text-gray-700' />
        </button> 
        </div>
    </div>
    <div className='flex w-[1180px] h-[112px] gap-[20px] mx-[130px]'>

        <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
        <img src={img2} alt='image' className='w-[92px] h-[92px]'/>
        </div>
        <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
        <img src={img3} alt='image' className='w-[92px] h-[92px]'/>
        </div>
        <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
        <img src={img4} alt='image' className='w-[92px] h-[92px]'/>
        </div>
        <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
        <img src={img1} alt='image' className='w-[92px] h-[92px]'/>
        </div>
        <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
        <img src={img5} alt='image' className='w-[92px] h-[92px]'/>
        </div>
        <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
        <img src={img6} alt='image' className='w-[92px] h-[92px]'/>
        </div>
        <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
        <img src={img7} alt='image' className='w-[92px] h-[92px]'/>
        </div>

        
        
    </div>
    </div>
  )
}
