import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieslice"
import { useEffect } from "react"
import { API_OPTION } from "../utils/constants"

const useMovieTrailer=(movieid)=>{
    const dispatch=useDispatch()
  const getMovieVideos= async ()=>{
  const data= await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US',API_OPTION )
   const json= await data.json()
  // console.log(json.results)
  const filterdata = json.results?.filter((videos) => videos?.type === "Trailer")
  const trailerdata=filterdata||[]
  const jsonresults=json.results||[]
  const Trailer= (filterdata?.length)?(trailerdata[0]):(jsonresults[0])
  
  // console.log(Trailer)
  dispatch(addTrailerVideo(Trailer))
 }
useEffect(()=>{
 getMovieVideos()
},[])
}
export default useMovieTrailer