import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6'>
     <h1 className='py-4 font-bold text-3xl text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
        <div className='flex gap-4'>
        {
            movies && movies.map((movie) => <MovieCard  key={movie.id} movies={movie.poster_path}/> )
        }
            
        </div>
    </div>
    </div>
  )
}

export default MovieList