import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({movies}) => {
  if(!movies) return null;
  return (
    <div className='w-48 cursor-pointer'>
    <img src={IMG_CDN + movies} alt='image cdn' />
    </div>
  )
}

export default MovieCard