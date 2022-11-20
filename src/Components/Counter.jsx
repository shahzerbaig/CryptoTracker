import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, decrementByValue } from '../reducers/cartSlice';
export const Counter = () => {
    //use State
    const [tempValue,setTempValue] = useState(0)
    const counter = useSelector((state) => state.counter.value);
    const name = useSelector((state) => state.name.name);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={e => dispatch(increment())}>Increment</button>
            <button onClick={e => dispatch(decrement())}>Decrement</button>
            <input value={tempValue} onChange={e => setTempValue(e.target.value)} placeholder='Enter the incremnetal Value'/>
            <button onClick={e => dispatch(decrementByValue(tempValue))}>Increment By</button>
            <h1>{name}</h1>
        </div>
    )
}
