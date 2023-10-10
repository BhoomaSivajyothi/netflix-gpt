import React from 'react'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'

const Maintaincontainer = () => {
    const movies=useSelector((store)=>store.movies?.Nowplayingmovies)
    const Mainmovie=movies||[]
    const  mainmovies=Mainmovie[0]
    if(!movies) return
    const {original_title ,overview,id} =mainmovies
    
  return (
    <div>
        <Videotitle title={original_title} overview={overview}/>
       <Videobackground movieid={id}/> 
    </div>
  )
}

export default Maintaincontainer