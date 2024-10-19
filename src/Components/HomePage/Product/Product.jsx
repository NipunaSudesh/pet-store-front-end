import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { ProductCard } from './ProductCard';

export const Product = () => {
  const [pappies, setPappies] = useState([]);

  useEffect(() => {
    const fetchPappies = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/products');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json(); 
        setPappies(data); 
        console.log(data); 
      } catch (error) {
        console.error('Error fetching Pappies:', error);
      }
    };

    fetchPappies(); 
  }, []);

  return (
    <div className='relative max-w-[1320px] mx-auto bg-white z-20 flex flex-col md:mt-[470px] p-4'>
      <div className='flex flex-col items-start md:flex-row md:justify-between md:items-center mb-4'>
        <div className='gap-[2px]'>
          <h2 className='font-SVN-Gilroy font-medium text-[16px] leading-[24px] text-[#000000]'>
            What's new?
          </h2>
          <h1 className='font-SVN-Gilroy font-bold text-[24px] leading-[36px] text-[#003459]'>
            Take a look at some of our pets
          </h1>
        </div>
        
        <div className='mt-4 md:mt-0'>
          <button className='flex items-center justify-between w-[180px] h-[44px] rounded-[57px] border border-1.5 border-gray-500 px-[28px] py-[12px] gap-[8px] transition hover:bg-gray-100'>
            View More
            <IoIosArrowForward className='w-6 h-6 text-gray-700' />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {pappies.map((pappy, index) => (
          <ProductCard 
            key={index}
            name={pappy.name}
            gender={pappy.gender}
            price={pappy.price}
            size={pappy.size}
            description={pappy.description}
            image={pappy.image}
            product={pappy.product}
          />
        ))}
      </div>
    </div>
  );
};
