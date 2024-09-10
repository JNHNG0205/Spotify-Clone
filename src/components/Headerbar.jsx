import React from 'react'
import { assets } from '../assets/assets'

const Headerbar = () => {
  return (
    <div className='w-screen p-2 flex items-center'>
      <img src={assets.spotify_logo} alt="" className='w-8 h-8 ml-5'/>
      <div className='ml-10 w-12 h-12 bg-[#1F1F1F] rounded-full flex items-center justify-center'>
        <button><img src={assets.home_icon} alt="" className='w-7 h-7' /></button>
      </div>
      <div className='w-[30%] h-12 bg-[#1F1F1F] flex items-center'>
        <img src={assets.search_icon} alt="" className='w-7 h-7' />
        <input className='border-none ' type="text" placeholder='What do you want to play?' />
      </div>
    </div>
  )
}

export default Headerbar
