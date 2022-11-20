import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:27
}

const nameSlice = createSlice({
    name:'name',
    initialState,
    reducers:{
        changeName:(state)=> state.name + 13
    }
});

export const {changeName} = nameSlice.actions;
export default nameSlice.reducer;