import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
 const movies=useSelector((store)=>store.movies)
 console.log(movies)
 
  return (
    <div>
     <MovieList title={'Now playing movie'} movie={movies?.Nowplayingmovies}/>
    </div>
  )
}

export default Secondarycontainer