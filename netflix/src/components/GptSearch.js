import React from 'react'
import GPtSearchBar from './GPtSearchBar'
import GptMovieSuggessions from './GptMovieSuggessions'
import { BG_IMG } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        {/* - gptSearch Bar/-gpt search suggestions */}
        <div className="absolute -z-10">
        <img
          src={BG_IMG}
          alt="backgound-img"
        />
      </div> 
        <GPtSearchBar />
        <GptMovieSuggessions/>
    </div>
  )
}

export default GptSearch