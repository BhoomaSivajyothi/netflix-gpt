import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GPTSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()
   
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {
        showGptSearch?( <GPTSearch />):(<>
        <MainContainer />
       <SecondaryContainer />
        </>)
      }
     
      
    </div>
  );
};

export default Browse;
