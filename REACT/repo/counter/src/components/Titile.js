import React, {Component} from 'react';
import './Titile.css';

class Titile extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <h3>Stan licznika {this.props.valueCounter}</h3>
        )
    }
}

export default Titile;