import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import langReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gptSearch:gptReducer,
        language:langReducer
    },
})

export default appStore