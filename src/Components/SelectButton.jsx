import React from 'react';
import {css} from '@emotion/css'
const SelectButton = ({children, selected, onClick}) => {
    const but = css`
        border:1px solid white;
        border-radius:5;
        padding:10;
        padding-left:20;
        font-family:"Montserrat;
        cursor:pointer;
        background-color:gold;
        width:22%;
        text-align:center;
        color:black;
        height:25px;
    `;
    return (
        <span className={but}
            onClick={onClick}>{children}</span>
    )
}

export default SelectButton
