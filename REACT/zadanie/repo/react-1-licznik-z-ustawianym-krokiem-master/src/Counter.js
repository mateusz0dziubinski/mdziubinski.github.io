import React, { Component } from "react";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import "./Counter.css";
import Step from "./Step";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counterValue: 0, krok: 1 };
    }
    incrementOrResetCounter = (increment) => {
        if (increment) {
            this.setState((prevState) => {
                return ({
                    counterValue: prevState.counterValue + 1,
                })
            });
        } else {
            this.setState(() => {
                return ({
                    counterValue: 0,
                })
            });
        }
    }

    zmienKrok = (nowyKrok) => {
        this.setState(() => {
            return ({
                krok: Number(nowyKrok)
            })
        });
    }

    updateCounterByStep = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + this.state.krok,
            })
        });
    }

    render() {
        return (
            <div className="counter">
                <Display currentValue={this.state.counterValue} />
                <ButtonsPanel updateCounter={this.incrementOrResetCounter} updateCounterByStep={this.updateCounterByStep} />
                <Step zmienKrok={this.zmienKrok} krok={this.state.krok}/>
            </div>
        )
    }
}
export default Counter;