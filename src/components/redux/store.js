import { configureStore,combineReducers } from "@reduxjs/toolkit";
import redecerToolkitSlice from "./redecerToolkitSlice";



const rootReducer = combineReducers({
    toolkit : redecerToolkitSlice
})


export const store = configureStore({
reducer : rootReducer
})