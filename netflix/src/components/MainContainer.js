import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'


const MainContainer = () => {
  const movies = useSelector(state => state.movies?.nowPlayingMovies)
  if(movies === null) return;
//  console.log(movies[0])
 const mainMovie = movies[10]
 const {original_title,overview,id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer