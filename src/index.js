import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import App1 from './App';
//import App2 from './Button'
//import {Button, Result} from './Button'
import App3 from './Card'
//import App4 from './Game'
//import { ProgressCircle1, ProgressCircle2} from './ProgressCircles'
import registerServiceWorker from './registerServiceWorker';
import DemoComponents from './DemoComponents'


//ReactDOM.render(<App1 />, document.getElementById('root'));
//ReactDOM.render(<App2 counter="2"/>, document.getElementById('a'));
//ReactDOM.render(<Button incrementValue="2" onClickFunction={this.handleClick}/>, document.getElementById('b'));
//ReactDOM.render(<Result counter="2"/>, document.getElementById('c'));

ReactDOM.render(<App3 />, document.getElementById('d'));
//ReactDOM.render(<App4 />, document.getElementById('e'));


ReactDOM.render(<DemoComponents />, document.getElementById('h'));
registerServiceWorker();

