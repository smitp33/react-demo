import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App1 from './App';
import App2 from './Button'
import {Button, Result} from './Button'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App1 />, document.getElementById('root'));
ReactDOM.render(<App2 counter="2"/>, document.getElementById('a'));
ReactDOM.render(<Button incrementValue="2" onClickFunction={this.handleClick}/>, document.getElementById('b'));
ReactDOM.render(<Result counter="2"/>, document.getElementById('c'));
registerServiceWorker();
