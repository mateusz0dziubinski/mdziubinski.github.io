import './Counter.css';
import React from 'react';
import CounterClass from './CounterClass'

const Counter = (props) => {
    let text = (props.myText == undefined) ? 'Domyślny text' : props.myText;
    return (
        <div className="counter">
            <h1>{text}</h1>
            <CounterClass/>
            <CounterClass color="red" />
        </div>
    )
}

export default Counter; 