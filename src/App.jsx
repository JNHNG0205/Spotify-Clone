import React from 'react'
import Sidebar from './components/Sidebar'
import Headerbar from './components/Headerbar'
import Musicplayer from './components/Musicplayer'
import Display from './components/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <Headerbar/>
      <div className = 'h-[80%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Musicplayer/>
    </div>
    
  )
}

export default App
