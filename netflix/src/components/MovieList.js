import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-'>
     <h1 className='py-6 font-bold text-4xl text-white'>{title}</h1>
    <div className='flex overflow-x-auto'>
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