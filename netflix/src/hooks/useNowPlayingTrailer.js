import { useDispatch } from "react-redux";
import { API_MOVIE_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingTrailer = (movieId) => {
    const dispath = useDispatch()
    const getMoviesVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_MOVIE_OPTIONS
        );
        const json = await data.json();
        // console.log(json)
    
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispath(addTrailerVideo(trailer))
      };
      useEffect(() => {
        getMoviesVideos();
      }, []);
}

export default useNowPlayingTrailer