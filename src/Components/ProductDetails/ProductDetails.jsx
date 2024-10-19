import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { NavBar } from '../HomePage/NavBar';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import heard2 from '../../assets/images/heard2.png'
import heard from '../../assets/images/heard.png';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaShareNodes } from "react-icons/fa6";

export const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    return (
        <div className='w-full h-screen flex flex-col'>
            <NavBar />
            <div className='flex w-full h-full ml-[130px]'>
                <div className='flex flex-col '>
                                    <div className=' h-full gap-[17px] w-[560px] p-2 rounded-lg'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null} // Only pass if thumbsSwiper is defined
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 h-[476px] w-[545px] rounded-[20px] mb-2"
                    >
                        {/* Replace with your image URLs */}
                        {Array.from({ length: 10 }, (_, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center bg-white ">
                                <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} className="w-full h-full object-cover" alt={`Nature ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={0}
                        slidesPerView={6}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper  box-border"
                    >
                        {/* Replace with your image URLs */}
                        {Array.from({ length: 10 }, (_, index) => (
                            <SwiperSlide key={index} className="w-1/6 h-full opacity-80 hover:opacity-100 ">
                                <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} className=" object-cover w-[84px] h-[84px] rounded-[10px] border-[3px]" alt={`Nature ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
                <div className="h-[48px] w-full rounded-[10px] justify-between p-[4px] flex bg-[#FCEED5]">
                    <div className="w-[560px] h-[48px] rounded-[10px] justify-between py-[9px] px-[12px] flex">
                        <div className='flex'>
                            <img src={heard} alt='heart' className='w-[24px] h-[24px]'/>
                            <h2 className="text-[14px] font-bold leading-[20px] text-left SVN-Gilroy ml-2">100% health guarantee for pets</h2>
                        </div>
                        <div className='flex'>
                        <img src={heard2} alt='heart2' className='w-[24px] h-[24px]'/>
                            <h2 className="text-[14px] font-bold leading-[20px] text-left SVN-Gilroy ml-2">100% guarantee of pet identification</h2>
                  
                        </div>
                    </div>
                </div>
                <div className="h-[48px] mt-2 w-full rounded-[10px] justify-between p-[4px] flex ">
                <div className="flex items-center space-x-4">
                <FaShareNodes className='w-[20px] h-[20px]'/>
      <span className="text-[#002A48] text-[14px] font-bold leading-[20px] text-left SVN-Gilroy">Share:</span>
        <FaFacebook className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
        <FaTwitter className="text-gray-500  hover:text-blue-500  h-[18.77px] w-[18.77px]" />
        <FaInstagram className="text-gray-500 hover:text-blue-500  h-[18.77px] w-[18.77px]" />
        <FaYoutube className="text-gray-500  hover:text-blue-500  h-[18.77px] w-[18.77px]" />

    </div>
                </div>
                </div>

                <div className='w-1/2 bg-slate-400'></div>
            </div>
        </div>
    );
}
