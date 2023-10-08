import { createSlice } from "@reduxjs/toolkit"
export const  Userslice =createSlice({
    name:'User',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },
        removeUser:(state,action)=>{
               return null
        }
    }
})

export const {addUser,removeUser}=Userslice.actions
export default Userslice.reducer;
