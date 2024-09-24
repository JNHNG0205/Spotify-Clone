import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='bg-[#121212] w-[23%] h-[98%] py-1.5 px-2 flex-col gap-2 text-white hidden lg:flex m-2 rounded-lg'>
        <div className='h-[10%] rounded flex items-center justify-between px-4 mb-4'>
           <button className='flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-200'>
            <img src= {assets.stack_icon} alt="" className='w-6 h-6'/>
            <p className='font-bold'>Your Library</p>
           </button>
            <button className='flex items-center opacity-50 hover:opacity-100 ml-[35%] transition-opacity duration-200'>
            <img src= {assets.plus_icon} alt="" className='w-4 h-4' />
           </button>
           <button className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-200 '>
            <img src={assets.arrow_right} alt="" className='w-4 h-4' />
           </button>
        </div>
        <div className='bg-[#1F1F1F] flex flex-col w-[100%] h-[25%] rounded-lg px-5 py-3 mb-4 '>
          <h2 className='font-bold'>Create your first playlist</h2>
          <p className='text-sm font-medium pt-2'>It's easy, we'll help you</p>
          <button className='bg-white w-[45%] pb-2 pt-1 mt-4 rounded-full'>
            <p className='text-black font-bold text-sm'>Create playlist</p>
          </button>
        </div>
        <div className='bg-[#1F1F1F] flex flex-col w-[100%] h-[25%] rounded-lg px-5 py-4 '>
          <h2 className='font-bold'>Let's find some podcasts to follow</h2>
          <p className='text-sm font-medium pt-2'>We'll keep you updated on new episodes</p>
          <button className='bg-white w-[45%] pb-2 pt-1 mt-4 rounded-full'>
            <p className='text-black font-bold text-sm'>Browse Podcasts</p>
          </button>
        </div>
        
    </div>
  )
}

export default Sidebar
