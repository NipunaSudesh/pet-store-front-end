import React from 'react';
import dog from '../../assets/images/dog.png'; 

export const PetCard = () => {
  return (
    <div className="w-[280px] h-[378px] rounded-[12px] p-[8px] gap-[8px] bg-gray-200]  transition-transform transform hover:scale-105 shadow-lg">
      <div className='flex flex-col'>
        <div>
          <img src={dog} alt='dog' className='w-[264px] h-[264px] ' />
        </div>
        <div className='flex flex-col justify-start'>
        <h1 className="font-SVN-Gilroy font-bold text-[16px] leading-[24px] text-left text-[#00171F]">
  MO512 - Alaskan Malamute Grey
</h1>
        <div className='flex gap-3'>
        <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">Gane: Male</h2>
        <h2 className="font-SVN-Gilroy font-medium text-[12px] leading-[18px] text-left text-[#667479]">age: 02 months</h2>
        </div>
            <h2 className="font-SVN-Gilroy font-bold text-[14px] text-[#00141F] text-left ">8.900.000 VHD</h2>
        </div>
      </div>
    </div>
  );
};
