import { API_MOVIE_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const dispath = useDispatch();
    const getNowPLayingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_MOVIE_OPTIONS)
      const json = await data.json()
    //  console.log(json.results)
      dispath(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPLayingMovies()
    },[])
}
export default useNowPlayingMovies