
import { configureStore } from '@reduxjs/toolkit'
import userReducer  from "./Userslice"
export const appStore =configureStore({
reducer:{
    User:userReducer
}
})