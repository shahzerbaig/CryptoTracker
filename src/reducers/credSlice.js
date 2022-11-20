import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:'',
    password:''
}

const credSlice = createSlice({
    name:'cred',
    initialState,
    reducers:{
        addCred(state,action){
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
});

export const {addCred} = credSlice.actions;
export default credSlice.reducer; 