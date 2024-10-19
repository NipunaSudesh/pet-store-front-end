import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { PetCard } from '../HomePage/Pet/PetCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Grid } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const SmallDog = () => {
  const [pets, setPets] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6; 

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPets(data);
        setItemCount(data.length);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);


  const totalPages = Math.ceil(itemCount / itemsPerPage);


  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const petsToDisplay = pets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='w-[940px] ml-[10px] flex flex-col p-4'>
      <div className='flex justify-between w-full mb-4'>
        <div className='flex'>
          <h1 className='font-SVN-Gilroy font-bold text-[24px] leading-[36px] text-[#003459]'>
            Small Dog
            <span className='font-SVN-Gilroy font-medium text-[14px] leading-[20px] text-[#667476] ml-2'>{itemCount} Puppies</span>
          </h1>
        </div>
        <div>
          <button className=' hidden md:blockflex items-center justify-between w-[180px] h-[44px] rounded-[57px] border border-1.5 border-gray-500 px-[28px] py-[12px] gap-[8px] transition hover:bg-gray-100'>
            View More
            <IoIosArrowDown className='w-6 h-6 text-gray-700' />
          </button>
        </div>
      </div>

      <div className='flex w-full'>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={0} 
          modules={[Grid]}
          className='w-full h-auto'
          style={{ height: '800px' }} 
        >
          {petsToDisplay.map((pet) => (
            <SwiperSlide 
              key={pet.id} 
              style={{ padding: '0', margin: '0', height: '300px' }} 
            >
              <PetCard 
                id={pet.id} 
                breed={pet.breed} 
                gender={pet.gender} 
                age={pet.age} 
                price={pet.price} 
                image={pet.image} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <div className='flex mx-auto justify-center mt-4 w-[356px] h-[34px] gap-[12px]'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'text-gray-400' : 'text-[#003459] hover:text-[#091219]'}`}
          disabled={currentPage === 1}
        >
          <FaArrowLeft class="w-[34px] h-[34px] rounded-[8px] px-[2px] gap-[10px]"/>
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 w-[34px] h-[34px] text-center justify-center rounded-[8px] p-[6px 13px 4px 13px] gap-[10px] ${currentPage === index + 1 ? 'bg-[#003459] text-white' : 'bg-white text-[#091219] hover:bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'text-gray-400' : 'text-[#003459] hover:text-[#091219]'}`}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight class="w-[34px] h-[34px] rounded-[8px] px-[2px] gap-[10px]" />
        </button>
      </div>
    </div>
  );
};
