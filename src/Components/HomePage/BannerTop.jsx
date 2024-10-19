import React from 'react';
import girl from '../../assets/images/girlWithDog.png';
import { FaPlay } from "react-icons/fa";

export const BannerTop = () => {
  return (
    <div>

      <div className='hidden md:flex w-[1280px] h-[378px] absolute top-[1681px] md:left-[130px] rounded-[20px] bg-[#003459] z-0 overflow-hidden mt-[20px]'>

<div className="relative w-full">
  <div className="w-[787.54px] h-[787.54px] absolute top-[188.72px] left-[-155.49px] z-10 gap-0 rounded-[99px] opacity-100 -rotate-[-28.25deg] bg-[#002A48]"></div>
  <div className="w-[782.29px] h-[635px] absolute top-[-240px] left-[605.67px] gap-0 rounded-[99px] opacity-100 -rotate-[-25.23deg] bg-[#FCEED5] z-10"></div>
</div>

<div className='absolute top-[36px] left-[20px] w-[513px] h-[342px] z-30'>
  <img src={girl} alt='A girl with a dog' className='w-full h-full object-cover' />
</div>

<div className="relative flex flex-col mb-[100px] justify-end">
  <h1 className='w-[535px]  h-auto font-SVN-Gilroy font-extrabold text-[52px] leading-[64px] mb-4 text-right z-30 text-[#003459] pr-[75px]'>
    One more friend
  </h1>
  <h2 className='w-[484px] h-auto font-SVN-Gilroy font-bold text-[36px] leading-[54px] mb-4 text-right z-30 text-[#003459] pr-[70px]'>
    Thousands more fun!
  </h2>
  <p className='w-[425px] h-auto font-SVN-Gilroy font-medium text-[12px] text-[#242B33] mb-6 text-right z-30 pr-[20px]'>
    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
  </p>
</div>



<button className="flex items-center border border-[#003459] text-[#003459] h-[48px] absolute w-[161px] top-[274px] left-[791px] px-[28px] py-[14px] rounded-full transition-all hover:bg-gray-100 z-30 ">
  View Intro
  <span className="ml-2 flex justify-center items-center w-[18px] h-[18px] rounded-full border border-[#003459]">
    <FaPlay size={8} />
  </span>
</button>
<button
  className='bg-[#003459] w-[161px] text-white rounded-[57px] px-[28px] py-[14px] transition-all duration-300 hover:bg-[#0c1b26] h-[48px] absolute top-[274px] left-[1000px] z-30'
>
  Explore Now
</button>
</div>


<div className='overflow-hidden mt-4 md:hidden w-[382px] h-[640px] rounded[]20px bg-[#193b53] flex  flex-col relative'>
<div className="relative flex flex-col justify-center">
  <h1 className='w-[389px] h-auto font-SVN-Gilroy top-[64px] mt-10 ml-4  left-[692px] font-extrabold text-[36px] leading-[54px] mb-4 text-right z-30 text-[#003459] pr-[70px]'>
    One more friend
  </h1>
  <h2 className='w-[356px] h-auto top-[134px]  left-[741px] font-SVN-Gilroy font-bold text-[24px] leading-[36px] mb-4 text-right z-30 text-[#003459] pr-[70px]'>
    Thousands more fun!
  </h2>
  <p className='w-[342px] h-auto top-[196px] left-[781px] font-SVN-Gilroy font-medium text-[12px] text-[#242B33] justify-center mb-6 text-right z-30 pr-[50px] ml-4'>
    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
  </p>
</div>

<div className='flex gap-4 '>
<button className="flex items-center border border-[#003459] text-[#003459] h-[48px] w-[161px] top-[274px] left-[791px] px-[28px] py-[14px] rounded-full transition-all hover:bg-gray-100 z-30 ">
  View Intro
  <span className="ml-2 flex justify-center items-center w-[18px] h-[18px] rounded-full border border-[#003459]">
    <FaPlay size={8} />
  </span>
</button>
<button
  className='bg-[#003459] w-[161px] text-white rounded-[57px] px-[28px] py-[14px] transition-all duration-300 hover:bg-[#0c1b26] h-[48px] top-[274px] left-[1000px] z-30'
>
  Explore Now
</button>
</div>

<div className='absolute top-[298px] left-[-50px] w-[513px] h-[342px] z-30'>
  <img src={girl} alt='A girl with a dog' className='w-full h-full object-cover' />
</div>
<div className="w-[787.54px] h-[787.54px] absolute top-[528.72px] left-[-155.49px] z-10 gap-0 rounded-[99px] opacity-100 -rotate-[-25.25deg] bg-[#002A48]"></div>
<div className="w-[782.29px] h-[635px] absolute top-[-340px] left-[-205.67px] gap-0 rounded-[99px] opacity-100 -rotate-[255.23deg] bg-[#FCEED5] z-10"></div>
</div>
</div>
    
  );
};
