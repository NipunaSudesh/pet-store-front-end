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
        <div className='w-full h-[826px] flex flex-col'>
            <NavBar />
            <div className='flex mt-10 w-full h-full ml-[130px]'>
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
                <div className="h-[48px] mt-[-200px] w-[98%] rounded-[10px] justify-between p-[4px] flex bg-[#FCEED5]">
                    <div className="w-[540px] h-[48px] rounded-[10px] justify-between py-[9px] px-[12px] flex">
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

                <div className='w-1/2 ml-10'>
                <div className="p-4  bg-white rounded-lg w-[617px] h-[787px] gap-[18px]">
                    <div className='flex flex-col  gap-[6px]'>
                    <p className="text-[14px] font-bold leading-[20px] text-left SVN-Gilroy text-[#99A2A5]">SKU #1000078</p>
      <h2 className="text-[24px] font-bold leading-[36px] text-left SVN-Gilroy text-[#002A48]">Shiba Inu Sepia</h2>
      <p className="text-[20px] font-bold leading-[32px] text-left SVN-Gilroy text-[#002A48]">34.000.000 VND</p>
                    </div>

      <div className="flex items-center mb-2">
        <div className='flex gap-4'>
          
          <button className="text-center w-[138px] h-[44px] rounded-[57px]  gap-[10px] bg-[#003459] text-white hover:bg-[#0e2434]">Contact us</button>
          <button className="w-[217px] h-[44px] hover:bg-[#b3b8bb] rounded-[57px] border-2 border-[#003459] text-center text-[#003459] flex items-center justify-center gap-[10px]">
  <img src={msg} alt="msg" className="w-[26px] h-[28px]" />
  <span className="text-[16px] font-bold leading-[24px] text-[#002A48]">Chat with Monito</span>
</button>

        </div>
      </div>
      <div className="flex flex-col gap-4 relative">
        <div className='flex border-b-[1px] rounded-lg h-[30px]'>
          <p className="text-gray-500 ml-1">SKU</p>
          <p className="text-g25y-500 left-[180px] absolute">: #1000078</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Gender</p>
          <p className="text-gray-500 left-[250px] absolute">: Female</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Age</p>
          <p className="text-gray-500 left-[250px] absolute">: 2 Months</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Size</p>
          <p className="text-gray-500 left-[250px] absolute">: Small</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Color</p>
          <p className="text-gray-500 left-[250px] absolute">: Apricot & Tan</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Vaccinated</p>
          <p className="text-gray-500 left-[250px] absolute">: Yes</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Dewormed</p>
          <p className="text-gray-500 left-[250px] absolute">: Yes</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Cert.</p>
          <p className="text-gray-500 left-[250px] absolute">: Yes (MKA)</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Microchip</p>
          <p className="text-gray-500 left-[250px] absolute">: Yes</p>
          </div>
          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Location</p>
          <p className="text-gray-500 left-[250px] absolute">: Vietnam</p>
          </div>

          <div className='flex  border-b-[1px] rounded- h-[30px] rounded-lg'>
          <p className="text-gray-500 ml-1">Published Date</p>
          <p className="text-gray-500 left-[250px] absolute">: 12-Oct-2022</p>
          </div>
          <div className='flex '>
          <p className="text-gray-500 ml-1">Additional Information</p>
          <p className="text-gray-500 left-[250px] absolute">: Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.</p>
          </div>
          </div>
        </div>
        <div>
          
          
        </div>
      </div>
      
      
    
                
              
            </div>
        </div>
    );
}
