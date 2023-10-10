import React from 'react'
import Moviecards from './Moviecards'

const MovieList = ({title,movie}) => {
    console.log(movie.poster_path)

     return (
    <div>
        <h1>{title}</h1>
        {movie?.map((movies)=> <Moviecards key={movies?.id } posterpath={movies?.poster_path} />)}
        
    </div>
    
  )
}

export default MovieList
