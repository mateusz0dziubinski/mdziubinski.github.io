import React, { Component } from "react";

class Step extends Component {
    updateStep = event => {
        this.props.zmienKrok(event.target.value);
    }

    render() {
        return (
            <div className="step">
                Krok: <input onChange={this.updateStep} type="number" id="krok" name="tentacles" min="1" max="100" value={this.props.krok} />
            </div>
        )
    }
}
export default Step;