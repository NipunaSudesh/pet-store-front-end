import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { PetCard } from '../HomePage/Pet/PetCard';

export const SmallDog = () => {
  const [pets, setPets] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        const data = await response.json();
        setPets(data);
        setItemCount(data.length);
        console.log(data); 
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className='w-[1140px] ml-[5px] flex flex-col  p-4'>
      <div className='flex justify-between w-full mb-4'>
        <div className='flex'>
          <h1 className='font-SVN-Gilroy font-bold text-[24px] leading-[36px] text-[#003459]'>
            Small Dog
            <span className='font-SVN-Gilroy font-medium text-[14px] leading-[20px] text-[#667476] ml-2'>{itemCount} Puppies</span>
          </h1>
        </div>
        <div>
          <button className='flex items-center justify-between w-[180px] h-[44px] rounded-[57px] border border-1.5 border-gray-500 px-[28px] py-[12px] gap-[8px] transition hover:bg-gray-100'>
            View More
            <IoIosArrowDown className='w-6 h-6 text-gray-700' />
          </button>
        </div>
      </div>
      <div className='w-full h-auto grid grid-cols-3 gap-4'>
  {pets.map((pet) => (
    <PetCard 
      key={pet.id} 
      id={pet.id} 
      breed={pet.breed} 
      gender={pet.gender} 
      age={pet.age} 
      price={pet.price} 
      image={pet.image} 
    />
  ))}
</div>

    </div>
  );
};
