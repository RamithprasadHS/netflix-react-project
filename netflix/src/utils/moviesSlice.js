import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularPlayingMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularPlayingMovies:(state,action) => {
            state.popularPlayingMovies = action.payload;
        },
        addTopRatedMoviesMovies:(state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMoviesMovies:(state,action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerVideo:(state,action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularPlayingMovies,addTopRatedMoviesMovies,addUpComingMoviesMovies} = moviesSlice.actions
export default moviesSlice.reducer