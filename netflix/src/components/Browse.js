import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCotainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularPlayingMovies from "../hooks/usePopularPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((state) => state.gptSearch.showGptSearch);
  const moviesLIst = useNowPlayingMovies();
  usePopularPlayingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainCotainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
