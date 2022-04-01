import React from 'react';
import './LoginButton.css';

const STYLES=[
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
]

const SIZES =[
    "btn--medium",
    "btn--small"
]

export const LoginButton=({
    children,
    type,
    onClick, 
    buttonStyle, 
    buttonSize
}) =>{

    const checkBtnStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES [0];

    const checkBtnSize = STYLES.includes(buttonSize)
    ? buttonSize
    : SIZES [0];


    return (
        <button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>
            {children}
        </button>

    )
}
    