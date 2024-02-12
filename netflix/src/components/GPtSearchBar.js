import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_MOVIE_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GPtSearchBar = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const langKey = useSelector((state) => state.language.lang);
  const dispatch = useDispatch()
  // console.log(lang[langKey].search)

  const searchText = useRef(null);

  // It will take movie from gpt and serch in tmdb 

  const searchMovieTmdb = async(movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movie+ "&include_adult=false&language=en-US&page=1", API_MOVIE_OPTIONS)
    const json = await data.json();
    return json.results
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API Call to GPT API and get Movie Results

    const gptQuery =
      "Act as a movie Recommendation syatem and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Don,Gaddar,Sholay,Golmal,Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
    if (!gptResults.choices) {
      setErrorMsg("Results are not availble");
    }
    // list of movies Andaz Apna Apna, Chalti Ka Naam Gaadi, Padosan, Chupke Chupke, Baadshah
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // array of movies
    //  [Andaz Apna Apna,Chalti Ka Naam Gaadi,Padosan,Chupke Chupke,Baadshah]

    // For each movie I will search TMDB API

    const promiseArrayy = gptMovies.map((movie) => searchMovieTmdb(movie))
    // it will return promise it will take some time return data

    const tmdbResults = await Promise.all(promiseArrayy); // 
    console.log(tmdbResults)

    // dispatch an action to store the results in store

    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

  };
  return (
    <div className="w-1/2 mx-auto pt-[10%] mb-[5%]">
      <form className=" bg-black" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 w-3/4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-4 px-4 w-[20%]  bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      <p className="text-3xl font-bold text-red-600 m-4">{errorMsg}</p>
    </div>
  );
};

export default GPtSearchBar;
