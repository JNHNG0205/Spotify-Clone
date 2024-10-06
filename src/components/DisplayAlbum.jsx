import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext)

  return (
    <>
      <div className='mt-5 flex gap-8 flex-col md:flex-row md:items-end'> 
        <img className='w-40 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-extrabold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1 '>
                <img className='inline-block w-6 mr-1' src={assets.spotify_logo} alt="" />
                <b className='text-sm'>Spotify</b>
                • 1,323,154 likes
                •<b>50 songs, </b>
                about 2 hr 30 min
            </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-2 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p className='ml-[80%]'>Plays</p>
        <p className='ml-[58%]'>Album</p>
        <img className='ml-[80%] w-4' src={assets.clock_icon} alt="" />

      </div>
      <hr />
      {
        songsData.map((item,index)=> (
            <div onClick={()=> playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 mt-4 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className=' rounded inline w-10 mr-5' src={item.image} alt="" />
                    {item.name}         
                </p>
                <p className=' text-[15px] ml-[75%]'>500,000</p>
                <p className='text-[15px] hidden sm:block ml-[60%]'>{albumData.name}</p>
                <p className='text-[15px] ml-[80%]'>{item.duration}</p>
            </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
