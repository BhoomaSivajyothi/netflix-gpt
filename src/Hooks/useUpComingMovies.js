import React, { useEffect } from "react";
import { addUpComingMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    )
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
