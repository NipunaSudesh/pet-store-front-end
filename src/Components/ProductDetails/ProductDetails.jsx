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
import msg from '../../assets/images/msg.png'

export const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    return (
        <div className='w-full min-h-screen flex flex-col'>
            {/* Navbar - Hidden on small screens */}
            <div className="hidden lg:block">
                <NavBar />
            </div>

            <div className='flex flex-col xl:flex-row mt-10 w-full h-full px-4 md:px-10'>
                {/* Image Swiper Section */}
                <div className='flex flex-col items-center lg:w-1/2'>
                    <div className='w-full md:w-[560px] p-2'>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 h-[300px] md:h-[476px] w-full rounded-[20px] mb-2"
                        >
                            {/* Replace with your image URLs */}
                            {Array.from({ length: 10 }, (_, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center bg-white">
                                    <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} className="w-full h-full object-cover" alt={`Nature ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={0}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper box-border"
                        >
                            {/* Replace with your image URLs */}
                            {Array.from({ length: 10 }, (_, index) => (
                                <SwiperSlide key={index} className="w-1/4 h-full opacity-80 hover:opacity-100">
                                    <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} className="object-cover w-[84px] h-[84px] md:w-[120px] md:h-[120px] rounded-[10px] border-[3px]" alt={`Nature ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Guarantee Section */}
 <div className="hidden sm:block mt-auto">
        {/* Guarantee Section */}
        <div className="h-[48px] w-full bg-[#FCEED5] flex justify-between items-center rounded-[10px] p-2">
            <div className="flex items-center space-x-2">
                <img src={heard} alt='heart' className='w-[24px] h-[24px]' />
                <h2 className="text-[14px] font-bold text-[#002A48]">100% health guarantee for pets</h2>
            </div>
            <div className="flex items-center space-x-2">
                <img src={heard2} alt='heart2' className='w-[24px] h-[24px]' />
                <h2 className="text-[14px] font-bold text-[#002A48]">100% guarantee of pet identification</h2>
            </div>
        </div>

        {/* Social Share Section */}
        <div className="mt-4 flex items-center space-x-4">
            <FaShareNodes className='w-[20px] h-[20px]' />
            <span className="text-[#002A48] text-[14px] font-bold">Share:</span>
            <FaFacebook className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
            <FaTwitter className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
            <FaInstagram className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
            <FaYoutube className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
        </div>
    </div>
                </div>

                {/* Product Details Section */}
                <div className='w-full md:w-1/2 mt-6 md:mt-0 md:ml-10'>
                    <div className="p-4 bg-white rounded-lg w-full md:w-[617px]">
                        <div className='flex flex-col gap-4'>
                            <p className="text-[14px] font-bold text-[#99A2A5]">SKU #1000078</p>
                            <h2 className="text-[24px] font-bold text-[#002A48]">Shiba Inu Sepia</h2>
                            <p className="text-[20px] font-bold text-[#002A48]">34.000.000 VND</p>
                        </div>

                        <div className="flex items-center gap-4 my-4">
                            <button className="w-[138px] h-[44px] bg-[#003459] text-white rounded-[57px] hover:bg-[#0e2434]">Contact us</button>
                            <button className="w-[217px] h-[44px] border-2 border-[#003459] text-[#003459] flex items-center justify-center gap-[10px] rounded-[57px] hover:bg-[#f0f0f0]">
                                <img src={msg} alt="msg" className="w-[26px] h-[28px]" />
                                <span className="text-[16px] font-bold">Chat with Monito</span>
                            </button>
                        </div>

                        {/* Additional Info Section */}
                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'SKU', value: '#1000078' },
                                { label: 'Gender', value: 'Female' },
                                { label: 'Age', value: '2 Months' },
                                { label: 'Size', value: 'Small' },
                                { label: 'Color', value: 'Apricot & Tan' },
                                { label: 'Vaccinated', value: 'Yes' },
                                { label: 'Dewormed', value: 'Yes' },
                                { label: 'Cert.', value: 'Yes (MKA)' },
                                { label: 'Microchip', value: 'Yes' },
                                { label: 'Location', value: 'Vietnam' },
                                { label: 'Published Date', value: '12-Oct-2022' },
                                { label: 'Additional Information', value: 'Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.' },
                            ].map((info, idx) => (
                                <div key={idx} className="flex justify-between border-b pb-2">
                                    <p className="text-gray-500">{info.label}</p>
                                    <p className="text-gray-500">{`: ${info.value}`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-auto block sm:hidden">
        {/* Guarantee Section */}
        <div className="h-[48px] w-full bg-[#FCEED5] flex justify-between items-center rounded-[10px] p-2">
            <div className="flex items-center space-x-2">
                <img src={heard} alt='heart' className='w-[24px] h-[24px]' />
                <h2 className="text-[14px] font-bold text-[#002A48]">100% health guarantee for pets</h2>
            </div>
            <div className="flex items-center space-x-2">
                <img src={heard2} alt='heart2' className='w-[24px] h-[24px]' />
                <h2 className="text-[14px] font-bold text-[#002A48]">100% guarantee of pet identification</h2>
            </div>
        </div>

        {/* Social Share Section */}
        <div className="mt-4 flex items-center space-x-4">
            <FaShareNodes className='w-[20px] h-[20px]' />
            <span className="text-[#002A48] text-[14px] font-bold">Share:</span>
            <FaFacebook className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
            <FaTwitter className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
            <FaInstagram className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
            <FaYoutube className="text-gray-500 hover:text-blue-500 h-[18.77px] w-[18.77px]" />
        </div>
    </div>
        </div>
    );
}
