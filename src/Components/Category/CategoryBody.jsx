import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

function updateCheckboxes(currentValues, newValue, isChecked) {
  if (isChecked) {
    return [...currentValues, newValue];
  } else {
    return currentValues.filter((value) => value !== newValue);
  }
}

export const CategoryBody = () => {
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [breed, setBreed] = useState('');
  return (
    <div className='w-[1180px] flex'>
      <div className='w-[280px] h-[600px] ml-[130px]  flex flex-col'>
        <h1 className='w-[57px] h-[36px] ml-[130px] absolute font-SVN-Gilroy font-bold text-[24px] leading-[36px]'>Filter</h1>

        <div className="bg-white rounded-lg p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-2">Pet Filter</h2>
      <div className="mb-2 flex flex-col">
      <label className="block mb-1 font-SVN-Gilroy font-bold text-[16px] leading-[24px]">Gender</label>
        <div className="flex flex-col">
          <div>
          <input
            type="checkbox"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />

          <label className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Male</label>
          </div>
            <div>
            <input
            type="checkbox"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Female</label>
            </div>
        </div>
          
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-SVN-Gilroy font-bold text-[16px] leading-[24px]">Color</label>
        <div className="flex flex-col gap-2">
          <div className='flex'>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="color"
              value="red"
              checked={color.includes('red')}
              onChange={(e) => setColor(updateCheckboxes(color, 'red', e.target.checked))}
            />
               <FaCircle size={15} className='mt-1 text-red-500'/>
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Red</span>
          </label>
          </div>
          <div className='flex'>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="color"
              value="apricot"
              checked={color.includes('apricot')}
              onChange={(e) => setColor(updateCheckboxes(color, 'apricot', e.target.checked))}
            />
                           <FaCircle size={15} className='mt-1 text-[#FBCEB1]'/>
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Apricot</span>
          </label>
          </div>
          <div className='flex'>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="color"
              value="Black"
              checked={color.includes('Black')}
              onChange={(e) => setColor(updateCheckboxes(color, 'Black', e.target.checked))}
            />
                           <FaCircle size={15} className='mt-1 text-black'/>
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Black</span>
          </label>
          </div>
          <div className='flex'>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="color"
              value="Black and White"
              checked={color.includes('Black and White')}
              onChange={(e) => setColor(updateCheckboxes(color, 'Black and White', e.target.checked))}
            />
                           <VscColorMode size={15} className='mt-1'/>
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Black & White</span>
          </label>
          </div>
          <div className='flex'>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="color"
              value="silver"
              checked={color.includes('silver')}
              onChange={(e) => setColor(updateCheckboxes(color, 'silver', e.target.checked))}
            />
                           <FaCircle size={15} className='mt-1 text-[#C0C0C0]'/>
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">silver</span>
          </label>
          </div>
          <div className='flex'>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="color"
              value="ron"
              checked={color.includes('red')}
              onChange={(e) => setColor(updateCheckboxes(color, 'ron', e.target.checked))}
            />
                           <FaCircle size={15} className='mt-1 text-[#CD7F32]'/>
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">ron</span>
          </label>
          </div>
          




        </div>
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-SVN-Gilroy font-bold text-[16px] leading-[24px]">Price</label>
        <div className="flex space-x-2 ">
          <input
            type="number"
            className="w-full rounded-md border-gray-300 border-[1px]  p-[10px] gap-[10px]"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            placeholder="Min"
          />
          <input
            type="number"
            className="w-full rounded-md border-gray-300 border-[1px]  p-[10px] gap-[10px]"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            placeholder="Max"
          />
        </div>
      </div>
      <div className="mb-2">
        <label className="block mb-1 font-SVN-Gilroy font-bold text-[16px] leading-[24px]">Breed</label>
        <div className="flex gap-2 flex-col">
          <label className="inline-block">
            <input
              type="checkbox"
              name="breed"
              value="small"
              checked={breed.includes('small')}
              onChange={(e) => setBreed(updateCheckboxes(breed, 'small', e.target.checked))}
            />
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Small</span>
          </label>
          <label className="inline-block">
            <input
              type="checkbox"
              name="breed"
              value="medium"
              checked={breed.includes('medium')}
              onChange={(e) => setBreed(updateCheckboxes(breed, 'medium', e.target.checked))}
            />
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Medium</span>
          </label>
          <label className="inline-block">
            <input
              type="checkbox"
              name="breed"
              value="large"
              checked={breed.includes('large')}
              onChange={(e) => setBreed(updateCheckboxes(breed, 'large', e.target.checked))}
            />
            <span className="inline-block ml-2 font-SVN-Gilroy font-medium text-[14px] leading-[20px]">Large</span>
          </label>
        </div>
      </div>
 
    </div>

      </div>
    </div>
  )
}
