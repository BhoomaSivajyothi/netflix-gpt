
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'

const Videobackground = ({movieid}) => {
  const trailerVideo =useSelector((store)=>store.movies?.trailerVideo)
  useMovieTrailer(movieid)

  return (
    <div>
<iframe 
className='w-screen aspect-video'
src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&autoplay=0&mute=1"}
title="YouTube video player" 
frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowFullScreen>
</iframe>
    </div>
  )
}

export default Videobackground