import React from 'react'
import {NavBar} from '../HomePage/NavBar';
import {Banner} from './Banner'

export const Home = () => {
  return (
    <div className=' w-[1440px] overflow-hidden flex flex-col '>
        <NavBar />
        <Banner />
    </div>
  )
}
