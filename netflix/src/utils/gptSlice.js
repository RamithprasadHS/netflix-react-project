import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState : {
       showGptSearch:false,
       movieResults:null,
       movieNames:null,
    },
    reducers:{
        toggleGptSearch:(state,action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action) => {
            const{movieNames,movieResults} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
})

export const {toggleGptSearch,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer