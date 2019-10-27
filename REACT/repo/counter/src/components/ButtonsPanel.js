import React, { Component } from 'react';
import './ButtonsPanel.css';


class ButtonsPanel extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.actionCallback()
       // console.log('ABC click button');
    }

    handleClickResetCounter = () => {
        this.props.handleClickResetCounter();
    }

    render() {
        return (
            <div className="btns">
                <button onClick={this.handleClick}>{this.props.label}</button>
            </div>
        );
    }

}

export default ButtonsPanel;