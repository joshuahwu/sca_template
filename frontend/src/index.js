import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './figures/Dashboard.js';
import App from './App.js'
import PopUp from './components/PopUp.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
