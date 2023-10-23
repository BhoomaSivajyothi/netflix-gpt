import { useSelector } from "react-redux"
import MovieList from "./Movielist"

const GptMovieSugesstion=()=>{

    const gpt =useSelector((store)=>store.gpt)
    const {movieNames,movieResults}=gpt
    if(!movieNames) return null
    return(
        <div className="bg-black text-white opacity-90">
          <div>
            {movieNames?.map((moviename,index)=><MovieList key={moviename}
             title={moviename} movies={movieResults[index]}></MovieList>)}
          </div>
        </div>
    )
}
export default GptMovieSugesstion