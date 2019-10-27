import React, {Component} from 'react'
import ButtonsPanel from './ButtonsPanel';
import Title from './Titile';

// !!! Tylko komponenty klasowe posiadające stan - this.state
export default class Counter extends Component {
    
    constructor(props) {
        super(props);

        let iVal = (this.props.initValue === undefined) ? 0 : this.props.initValue;

        //!!! stan komponentu inicjujemy w konstruktorach
        this.state = {
            value: iVal
        }
    }

changeValue = () => {

    this.setState((prevState) => {
        return{ 
            value: prevState.value + 1
        }
        
        
    });
}

changeValueReset = () => {

    this.setState((prevState) => {
        return{ 
            value: prevState.value = 0
        }
        
        
    });
}

changeValueInitValue = () => {

    this.setState((prevState) => {
        return{ 
            value: prevState.value = this.props.initValue
        }
        
        
    });
}



changeCountersState = () => {
    console.log('Wywołuje na click w ButtonsPanel metodę utworzoną w rodzicu ((Counter)');
}

    render() {
        return (
            <div className="counter-component">
                <Title valueCounter={this.state.value}/>
                <ButtonsPanel label="Zwiększ" actionCallback={this.changeValue}/>
                <ButtonsPanel label="Zresetuj" actionCallback={this.changeValueReset}/> 
                <ButtonsPanel label="Zresetuj do Init Value" actionCallback={this.changeValueInitValue}/> 
            </div>
        )
    }

}

