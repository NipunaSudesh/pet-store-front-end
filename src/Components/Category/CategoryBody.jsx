import React from 'react'
import { Filter } from './Filter'
import { SmallDog } from './SmallDog'

export const CategoryBody = () => {
  return (
    <div className='w-[1400px] flex pt-[20px]'>
      <Filter />
      <SmallDog />
    </div>
  )
}
