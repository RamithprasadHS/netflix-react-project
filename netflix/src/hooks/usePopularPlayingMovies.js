import { API_MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularPlayingMovies = () => {
  const dispath = useDispatch();
  const getPopularPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_MOVIE_OPTIONS
    );
    const json = await data.json();
    //  console.log(json.results)
    dispath(addPopularPlayingMovies(json.results));
  };

  useEffect(() => {
    getPopularPlayingMovies();
  }, []);
};
export default usePopularPlayingMovies;
