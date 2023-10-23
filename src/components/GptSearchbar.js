
import { useDispatch, useSelector } from "react-redux"
import Lang from "../utils/languageConstants"
import { useRef } from "react"
import openai from "../utils/openai"
import { useNavigate } from "react-router-dom"
import { API_OPTIONS } from "../utils/constants"
import { addGptmovieResult } from "../utils/store/gptSlice"


const GptSearchBar=()=>{
    const  LangKey=useSelector((store)=>store.config.lang)
    const searchText=useRef(null)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const serachMovieTMDB=async(movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='
        +movie+'&include_adult=false&language=en-US&page=1',
        API_OPTIONS)
        const json= await data.json() 
        return json.results
    }
    const handleGptSearclick =async ()=>{
        const gptQuery='Act as a movie Recommendation system and suggest movies for the query '
        +searchText.current.value+
        'only give  me names of 5 movies with  comma seperated like the Example  result  give a head.Example Results: Don,Gadar,Sholay,Glomaal, Koi Mil Gaya '
         
            const gptResult= await openai.chat.completions.create({
              messages: [{ role: 'user', content:gptQuery }],
              model: 'gpt-3.5-turbo',
            });

            if(!gptResult.choices){
               navigate('/') 
            }
            else{
                navigate("/browse")
            }
            console.log(gptResult.choices?.[0]?.message?.content);
           const gptMovies= gptResult.choices?.[0]?.message?.content.split(',')  
           const  promiseArray=gptMovies.map((movie)=>serachMovieTMDB(movie))
           const tmdResult= await Promise.all(promiseArray)
           console.log(tmdResult)
           dispatch(addGptmovieResult({movieNames:gptMovies, movieResults:tmdResult}))
    }
   
    return(
        <div className="pt-[40%] md:pt-[10%] flex justify-center">
           <form className="w-full md:w-1/2 bg-black grid grid-cols-12" ref={searchText}>
            <input type="text" placeholder={Lang[LangKey]?.gptSearchPlaceholder} className="p-4 m-4 col-span-9"></input>
           </form>
           <button className="bg-red-900 text-white col-span-3 px-4 rounded-lg" 
           onSubmit={(e)=>e.preventDefault()}
           onClick={handleGptSearclick}>{Lang[LangKey].search}</button>
        </div>
    )
}
export default GptSearchBar

