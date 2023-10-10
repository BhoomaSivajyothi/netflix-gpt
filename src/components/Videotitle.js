import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute bg-gradient-to-tr from-green-black '>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <h1 className='py-6 text-lg w-1/4 text-white'>{overview}</h1>
        <div>
        <button className='bg-white  hover:bg-gray-600  mx-2 text-black p-2 px-12  rounded'> play</button>
        <button className='bg-white  hover:bg-gray-600 mx-2 text-black p-2 px-12  rounded'>more info</button>
        </div>
    </div>
  )
}

export default Videotitle