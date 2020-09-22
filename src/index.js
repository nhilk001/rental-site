import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './latest/Login';
import Registration from './latest/Registration';
//import Search from './latest/Search';
import SecurityQuestions from './latest/SecurityQuestions';
import Pay from './latest/Pay.js';

import * as serviceWorker from './serviceWorker';
//this is the main page I believe


ReactDOM.render(<Registration/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
