import React from 'react';
import dog from '../../../assets/images/product.png'; 
import { IoIosGift } from "react-icons/io";
import { LuDot } from "react-icons/lu";

export const ProductCard = ({image,name,product,size,description,price}) => {
  return (
    <div className="max-w-[280px] w-full h-auto rounded-[12px] p-4 bg-gray-200 transition-transform transform hover:scale-105 shadow-lg">
      <div className='flex flex-col'>
        <div>
          <img src={image} alt='dog' className='w-full h-[264px] object-cover rounded' />
        </div>
        <div className='flex flex-col justify-start mt-4'>
          <h1 className="font-SVN-Gilroy font-bold text-[16px] leading-[24px] text-left text-[#00171F]">
          {name}
          </h1>
          <div className='flex gap-3'>
            <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">Product: {product}</h2>
            <LuDot />
            <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">Size: {size}</h2>
          </div>
          <h2 className="font-SVN-Gilroy font-bold text-[14px] text-[#00141F] text-left">{price}</h2>
        </div>
        <div className='flex mt-2 items-center justify-center h-[34px] p-[6px 10px] bg-[#FCEED5] w-full rounded-[8px] gap-[2px]'>
          <IoIosGift className='w-[17.46px] h-[20px] text-red-500' />
          <LuDot />
          <h2 className='font-SVN-Gilroy font-bold text-[14px] leading-[20px] text-[#002A48]'>
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};
