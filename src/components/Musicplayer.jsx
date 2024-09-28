import React from 'react'
import { assets } from '../assets/assets'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'

const Musicplayer = () => {
  return (
    <div className='h-[12%] bg-black flex justify-between items-center px-4 text-white'>
      <div className='hidden lg:flex items-center gap-4'>
        <img src={songsData[0].image} alt="" className='w-14 rounded-md' />
        <div>
          <p className='font-semibold text-white text-sm'>{songsData[0].name}</p>
          <p className='text-gray-400 text-xs font-semibold'>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 pt-2 ml-[8.5%]'>
        <div className='flex gap-8'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          <div className='relative w-4 h-4 flex items-center justify-center'>
            <div className='bg-white w-8 h-8 flex items-center justify-center rounded-full absolute'>
              <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
            </div>
          </div>
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        
        <div className='flex items-center gap-5 mt-2'>
          <p>1:06</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded full cursor-pointer'>
            <hr className='h-1 border-none w-0 bg-green-600 rounded-full' />
          </div>
          <p>3:20</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center opacity-75'>
        <img className='w-4 cursor-pointer m-2' src= {assets.plays_icon} alt="" />
        <img className='w-4 cursor-pointer m-2' src= {assets.mic_icon} alt="" />
        <img className='w-4 cursor-pointer m-2' src= {assets.queue_icon} alt="" />
        <img className='w-4 cursor-pointer m-2' src= {assets.speaker_icon} alt="" />
        <img className='w-4 cursor-pointer m-2' src= {assets.volume_icon} alt="" />
        <div className='w-20 h-1 bg-white rounded full cursor-pointer'>
            <hr className='h-1 border-none w-0   bg-white rounded-full' />
          </div>
        <img className='w-4 cursor-pointer m-2' src= {assets.mini_player_icon} alt="" />
        <img className='w-4 cursor-pointer m-2' src= {assets.zoom_icon} alt="" />
      </div>
      
    </div>
  )
}

export default Musicplayer
