import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center gap-2'>
        <button className='flex items-center justify-center bg-white text-black font-semibold rounded-2xl w-[4%] h-8 pb-1 '>
            All
        </button>
        <button className='flex items-center justify-center bg-[#373737] text-white font-semibold rounded-2xl w-[6%] h-8 pb-1 '>
            Music
        </button>
        <button className='flex items-center justify-center bg-[#373737] text-white font-semibold rounded-2xl w-[8%] h-8 pb-1 '>
            Podcast
        </button>
    </div>
  )
}

export default Navbar
