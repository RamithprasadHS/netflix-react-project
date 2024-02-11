import { API_MOVIE_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMoviesMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispath = useDispatch();
  const getPopularPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_MOVIE_OPTIONS
    );
    const json = await data.json();
    //  console.log(json.results)
    dispath(addTopRatedMoviesMovies(json.results));
  };

  useEffect(() => {
    getPopularPlayingMovies();
  }, []);
};
export default useTopRatedMovies;
