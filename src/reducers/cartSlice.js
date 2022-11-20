import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1
}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.value++;
        },
        decrement(state){
            state.value--;
        },
        decrementByValue(state,action){
            state.value += parseInt(action.payload);
            console.log(action);
        }
    }
});

export const {increment,decrement, decrementByValue} = counterSlice.actions;
export default counterSlice.reducer