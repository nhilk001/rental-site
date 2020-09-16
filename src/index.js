import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './latest/Login';
import Registration from './latest/Registration';
import Search from './latest/Search';
import SecurityQuestions from './latest/SecurityQuestions';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SecurityQuestions/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
