import { API_MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMoviesMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispath = useDispatch();
  const getPopularPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_MOVIE_OPTIONS
    );
    const json = await data.json();
   //   console.log(json.results)
    dispath(addUpComingMoviesMovies(json.results));
  };

  useEffect(() => {
    getPopularPlayingMovies();
  }, []);
};
export default useUpComingMovies;
