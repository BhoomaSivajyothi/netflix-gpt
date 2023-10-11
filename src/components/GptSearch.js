import React from 'react'
import GptSearchBar from './GptSearchbar'
import GptMovieSugesstion from './GptMovieSugesstion'
import { NETFLIX_BG } from '../utils/constants'

const GPTSearch = () => {
    return(
        <div>
         <div className="absolute -z-10">
          <img
          src ={NETFLIX_BG}
          alt="background"
           />
        </div>
            <GptSearchBar/>
            <GptMovieSugesstion/>
        </div>
    )

}

export default GPTSearch