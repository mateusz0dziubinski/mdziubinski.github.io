import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Licznik w ReactJS</h1>
                </header>
                <Counter initValue="0" />
            </div>
        );
    }
}
export default App;
