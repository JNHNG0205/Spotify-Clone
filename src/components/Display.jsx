import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-[100%] mt-2 mb-1 px-5 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg-ml-0'>
        <Routes>
           <Route path='/' element = {<DisplayHome/>} />
        </Routes>
    </div>
  )
}

export default Display
