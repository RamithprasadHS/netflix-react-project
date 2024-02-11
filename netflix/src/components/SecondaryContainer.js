import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
  return (
    <div>
    {/*
    - MovieList - Popular
      -- MovieCrads
    - MovieList - NowPlayingMovies
    - MovieList - Trending
    - MovieList - Horror
    
    
    */ }
    <div className='bg-black'>
    <div className='-mt-60 pl-12 relative z-20'>
    <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
    <MovieList title={"Popular"} movies={movies.popularPlayingMovies}/>
    <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
    <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
    </div>
  )
}

export default SecondaryContainer