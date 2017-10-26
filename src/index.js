import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Result from './Button'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Result counter="1" />, document.getElementById('button'));
registerServiceWorker();
