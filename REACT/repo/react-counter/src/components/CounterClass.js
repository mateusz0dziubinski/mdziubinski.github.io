import React from 'react';
import './Counter.css';
import Counter from './Counter';

class CounterClass extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const text = "Komponent klasowy Counter";
        const color = {
            'backgroundColor': this.props.color
        }
        return (
            <div className="counter--dark" style={color}>
            <h1>{text}r</h1>
        </div>
        )
    }
}


export default CounterClass;