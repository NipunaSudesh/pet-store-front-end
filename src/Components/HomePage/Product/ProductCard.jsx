import React from 'react';
import dog from '../../../assets/images/product.png'; 
import { IoIosGift } from "react-icons/io";
import { LuDot } from "react-icons/lu";


export const ProductCard = () => {
  return (
    <div className="w-[280px] h-[446px] rounded-[12px] p-[8px] gap-[8px] bg-gray-200]  transition-transform transform hover:scale-105 shadow-lg">
      <div className='flex flex-col'>
        <div>
          <img src={dog} alt='dog' className='w-[264px] h-[264px] rounded' />
        </div>
        <div className='flex flex-col justify-start mt-4'>
        <h1 className="font-SVN-Gilroy font-bold text-[16px] leading-[24px] text-left text-[#00171F]">
        Costumes Fashion Pet Clother Cowboy Rider
</h1>
        <div className='flex gap-3'>
        <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">Product: Toy</h2>
        <LuDot />
        <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">Size: 350gm</h2>
        </div>
            <h2 className="font-SVN-Gilroy font-bold text-[14px] text-[#00141F] text-left ">8.900.000 VHD</h2>
        </div>
        <div className='flex mt-2 items-center justify-center my-auto h-[34px] p-[6px 10px 4px 10px] bg-[#FCEED5] w-full rounded-[8px] gap-[2px]'>
    <IoIosGift className='w-[17.46px] h-[20px] text-red-500' />
    <LuDot />
    <h2 className='w-[168px] h-[20px] font-SVN-Gilroy font-bold text-[14px] leading-[20px] text-[#002A48]'>
        Free Toy & Free Shaker
    </h2>
</div>

      </div>
    </div>
  );
};
