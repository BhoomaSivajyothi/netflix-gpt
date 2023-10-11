const GptSearchBar=()=>{
    return(
        <div className="pt-[10%] flex justify-center">
           <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" placeholder="what would you like today" className="p-4 m-4 col-span-9"></input>
           </form>
           <button className="bg-red-900 text-white col-span-3 px-4 rounded-lg ">search</button>
        </div>
    )
}
export default GptSearchBar