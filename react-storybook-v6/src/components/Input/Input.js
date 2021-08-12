import React from 'react';
import './Input.css';

function Input(props) {
    const {variant='medium'} = props;
    return (
        <input type="text" className={`input ${variant}`}/>
    );
}

export default Input;