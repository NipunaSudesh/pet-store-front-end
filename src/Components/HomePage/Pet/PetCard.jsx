import React from 'react';
import { LuDot } from "react-icons/lu";

export const PetCard = ({ id, breed, gender, age, price, image }) => {
  return (
    <div className="w-[280px] mb-2 h-[378px] rounded-[12px] p-[8px] gap-[8px] bg-gray-200 transition-transform transform hover:scale-105 shadow-lg">
      <div className='flex flex-col'>
        <div>
          <img src={image} alt={breed} className='w-[264px] h-[264px] rounded' />
        </div>
        <div className='flex flex-col justify-start mt-4'>
          <h1 className="font-SVN-Gilroy font-bold text-[16px] leading-[24px] text-left text-[#00171F]">
            {id} - {breed}
          </h1>
          <div className='flex gap-3'>
            <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">Gender: {gender}</h2>
            <LuDot />
            <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">Age: {age}</h2>
          </div>
          <h2 className="font-SVN-Gilroy font-bold text-[14px] text-[#00141F] text-left">{price} VND</h2>
        </div>
      </div>
    </div>
  );
};
