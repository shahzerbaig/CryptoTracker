import React,{useState} from 'react';
import { addCred } from '../reducers/credSlice';
import { useDispatch } from 'react-redux';
export const Form = () => {
    const dispatch = useDispatch()
    const [tempData,setTempdata] = useState({username:'',password:''})
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    function onFormSubmit(event){
        event.preventDefault();
        console.log(username, password);
        dispatch(addCred({username,password}));
        setUsername('');
        setPassword('');
    }
    const onUsernameChange = (event)=>{
        setUsername(event.target.value)
    }
    const onPasswordChange = (event)=>{
        setPassword(event.target.value)
    }
    return (
        <form onSubmit={onFormSubmit}>
            <label><input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={onUsernameChange}    />
            </label>
            <label><input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={onPasswordChange} />
            </label>
            <input type='submit'/>
        </form>
    )
}
