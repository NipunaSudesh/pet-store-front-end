import React, { useEffect, useState } from 'react';
import { PetCard } from '../HomePage/Pet/PetCard';

export const Pappies = () => {
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
        <div className='relative bg-white z-20 flex flex-col px-4 md:px-8 lg:px-16 sm:mx-auto'>
            <div className='flex flex-col items-start mt-16'>
                <h2 className='font-SVN-Gilroy font-medium text-[16px] leading-[24px] text-[#000000]'>
                    What's new?
                </h2>
                <h1 className='font-SVN-Gilroy font-bold text-[24px] leading-[36px] text-[#003459] sm:text-[16px]'>
                    Take a look at some of our pets
                </h1>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'>
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
