import { createSlice } from "@reduxjs/toolkit";

export const moviesllice =createSlice({
    name:"movies",
    initialState:{
        Nowplayingmovies:['null'],
        trailerVideo:'null'
    },
    reducers:{
        addNowplayingmovies:(state,action)=>{
            state.Nowplayingmovies=action.payload
        },  
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }                      
    }
}  
)
export const {addNowplayingmovies,addTrailerVideo} =moviesllice.actions
export default moviesllice.reducer
