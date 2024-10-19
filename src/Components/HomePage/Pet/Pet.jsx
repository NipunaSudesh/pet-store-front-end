import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { PetCard } from './PetCard';

export const Pet = () => {
  const [pappies, setPappies] = useState([]);

  useEffect(() => {
      const fetchPappies = async () => {
          try {
              const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
              
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
    <div className='relative w-full max-w-[1340px] h-auto bg-white z-20 flex flex-col px-4 md:px-10 '>
      
      <div className=' sm:ml-[130px] flex flex-col md:flex-row md:items-center w-full mt-10 justify-between'>
        <div className='w-full md:w-auto'>
          <h2 className='font-SVN-Gilroy font-medium text-[16px] leading-[24px] text-[#000000]'>
            What's new?
          </h2>
          <h1 className='font-SVN-Gilroy font-bold text-[20px] md:text-[24px] leading-[36px] text-[#003459]'>
            Take a look at some of our pets
          </h1>
        </div>
        
        <div className='mt-4 md:mt-0 '>
          <button className='flex items-center justify-between w-full md:w-[180px] h-[44px] rounded-[57px] border border-1.5 border-gray-500 px-[28px] py-[12px] gap-[8px] transition hover:bg-gray-100'>
            View More
            <IoIosArrowForward className='w-6 h-6 text-gray-700' />
          </button>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 sm:l-[130px] gap-4 w-full'>
        {pappies.map((pappy, index) => (
            <PetCard 
                key={index}
                id={pappy.id}
                breed={pappy.breed}
                gender={pappy.gender}
                age={pappy.age}
                price={pappy.price}
                image={pappy.image}
            />
        ))}
      </div>
    </div>
  );
};
