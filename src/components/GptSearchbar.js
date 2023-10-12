
import { useSelector } from "react-redux"
import Lang from "../utils/languageConstants"


const GptSearchBar=()=>{
    const  LangKey=useSelector((store)=>store.config.lang)
    console.log(LangKey)
   
    return(
        <div className="pt-[10%] flex justify-center">
           <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" placeholder={Lang[LangKey].gptSearchPlaceholder} className="p-4 m-4 col-span-9"></input>
           </form>
           <button className="bg-red-900 text-white col-span-3 px-4 rounded-lg ">{Lang[LangKey].search}</button>
        </div>
    )
}
export default GptSearchBar