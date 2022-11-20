import { configureStore } from "@reduxjs/toolkit";
import counterReducer from  '../reducers/cartSlice'
import nameReducer from '../reducers/nameSlice'
import credReducer from '../reducers/credSlice'
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        name:nameReducer,
        cred:credReducer
    }
});
