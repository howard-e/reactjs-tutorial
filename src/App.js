import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Howard's React App</h2>
                </div>
                <Clock/>

                {/*<p className="App-intro">*/}
                {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
            </div>
        );
    }
}

export default App;
