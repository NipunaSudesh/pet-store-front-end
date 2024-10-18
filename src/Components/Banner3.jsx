import React from 'react'
import foot from '../assets/images/foot.png'
import handDog from '../assets/images/handDog.png'
import { FaPlay } from "react-icons/fa";

export const Banner3 = () => {
  return (
    <div className='w-[1180px] h-[378px] bg-[#FFB775] mx-[130px] rounded-[20px] z-0 relative overflow-hidden'> 
        <div className='flex flex-col justify-start m-10 z-10'>
            <div className='flex'>
                <h1 className='w-[225px] h-[68px] font-SVN-Gilroy font-extrabold text-[52px] leading-[68px] z-10 text-[#003459]'>
                    Adoption
                </h1>
                <img src={foot} alt='foot' className='w-[42px] h-[38px] text-[#003459] z-10 ml-10 mt-4'/>
            </div>
            <h2 className='w-[448px] h-[54px] font-SVN-Gilroy font-bold text-[36px] leading-[54px] text-[#003459]'>
                We need help. So do they.
            </h2>
            <p className='w-[394px] h-[36px] font-SVN-Gilroy font-medium text-[12px] leading-[18px] z-10'>
                Adopt a pet and give it a home,<br /> it will love you back unconditionally.
            </p>
            <div className='flex space-x-4 mt-5'>
                <button className="flex items-center border border-[#003459] text-[#003459] px-7 py-3.5 rounded-full transition-all hover:bg-gray-100">
                    View Intro
                    <span className="ml-2 text-[#003459] w-[18px] h-[18px] rounded-full border border-[#003459] flex justify-center items-center mx-auto">
                        <FaPlay size={8} />
                    </span>
                </button>
                <button className='bg-[#003459] text-white rounded-[57px] px-[28px] py-[14px] transition hover:bg-[#0c1b26]'>
                    Explore Now
                </button>
            </div>
        </div>
        
       
        <img 
            src={handDog} 
            alt='handDog' 
            className='absolute bottom-0 right-0 w-[538.53px] h-[358.79px] -rotate-[97.93deg] z-0' 
        />
    </div>
  )
}
