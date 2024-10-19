import React, { useEffect, useState } from 'react'
import { PetCard } from '../HomePage/Pet/PetCard';


export const Pappies = () => {
    const [Pappies,setPappies]=useState([])

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

    <div className='relative w-[1440px] h-[986px] bg-white z-20 flex flex-col'>
      
      <div className='absolute flex w-full top-[60px] left-[130px]'>
        <div className='w-[367px] h-[62px] gap-[2px]'>
          <h2 className='w-[191px] h-[24px] font-SVN-Gilroy font-medium text-[16px] leading-[24px] text-[#000000]'>
            What's new?
          </h2>
          <h1 className='w-[367px] h-[36px] font-SVN-Gilroy font-bold text-[24px] leading-[36px] text-[#003459]'>
            Take a look at some of our pets
          </h1>
        </div>
      </div>

      
      <div className='absolute top-[78px] right-[130px]'>

      </div>
      <div className='top-[158px] w-full absolute grid grid-cols-4 gap-[8px] px-[130px]'>
        {
            Pappies.map((pappy,index)=>(
                <PetCard 
                key={index}
                id={pappy.id}
                breed={pappy.breed}
                gender={pappy.gender}
                age={pappy.age}
                price={pappy.price}
                image={pappy.image}
                />
            ))

            
        }
      </div>
    </div>
  );
};

