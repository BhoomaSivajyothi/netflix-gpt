import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const Moviecards = (posterpath) => {
    
  return (
    <div>
    <img src={IMG_CDN_URL+posterpath} alt='moviecard'></img>
    </div>
  )
}

export default Moviecards