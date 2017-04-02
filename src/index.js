import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './Tutorial'
import './index.css';

function ShowComponents() {
    return (
        <div>
            <App />
            <Game />
        </div>
    );
}

ReactDOM.render(
    <ShowComponents />,
    document.getElementById('container')
);
