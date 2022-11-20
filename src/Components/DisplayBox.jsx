import React from 'react'
import { useSelector } from 'react-redux'
export const DisplayBox = () => {
    const cred = useSelector((state)=> state.cred)
    return (
        <div>
            <h1>Username:{cred.username}</h1>
            <h1>Password:{cred.password}</h1>
        </div>
    )
}
