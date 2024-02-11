import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPtSearchBar = () => {
    const langKey = useSelector(state => state.language.lang)
   // console.log(lang[langKey].search)
  return (
    <div className="w-1/2 mx-auto pt-[10%]">
      <form className=" bg-black">
        <input
          type="text"
          className="p-4 m-4 w-3/4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-4 px-4 w-[20%]  bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPtSearchBar;
