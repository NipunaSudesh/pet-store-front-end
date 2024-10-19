import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const Customer = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch('https://monitor-backend-rust.vercel.app/api/customers');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                setImages(data);
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div className='w-[1149px] mx-auto flex flex-col mt-20 px-4'>
            <h1 className='font-[SVN-Gilroy] text-[24px] font-bold leading-[36px] text-left text-[#00141F]'>
                Our Lovely Customers
            </h1>
            <div className='relative w-full mt-6'>
                <Swiper
                    slidesPerView={4} 
                    spaceBetween={2}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {images.map((customer, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="flex flex-col items-center w-full max-w-[248px] h-[340px]">
                                <img
                                    src={customer.image} 
                                    alt={customer.name} 
                                    className="object-cover w-full h-full rounded-[20px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-pagination absolute bottom-2 left-0 right-0 flex justify-center z-10" />
            </div>
        </div>
    );
};
