import { useDispatch } from "react-redux";
import { addNowplayingmovies } from "../utils/movieslice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useNowplayingmovies=()=>{
const dispatch=useDispatch()
const getNowPlayingMovies= async() =>{
const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
const json = await data.json();
console.log(json.results)
dispatch(addNowplayingmovies(json.results))

}
useEffect(()=>{
  getNowPlayingMovies()
},[])

}
export default useNowplayingmovies