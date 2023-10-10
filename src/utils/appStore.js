
import { configureStore } from '@reduxjs/toolkit'
import userReducer  from "./Userslice"
import moviesReducers from "./movieslice"
import TrailervideoReducer from "./movieslice"

export const appStore =configureStore({
reducer:{
    User:userReducer,
    movies:moviesReducers,
    trailervideo:TrailervideoReducer
}
})