import React from 'react'

const VideoTitle = ({original_title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-2xl md:text-6xl font-bold'>{original_title}</h1>
        <p className='hidden md:inline-block py-1 md:py-6 px-3 md:px-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4 md:my-0'>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-70'>Play</button>
            <button className='bg-gray-500 hidden md:inline-block text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle