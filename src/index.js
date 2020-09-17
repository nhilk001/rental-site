import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './latest/Login';
import Registration from './latest/Registration';
import Search from './latest/Search';
import SecurityQuestions from './latest/SecurityQuestions';

import * as serviceWorker from './serviceWorker';
//this is the main page I believe

<<<<<<< HEAD

const thisIsAnElement = <h1>this is a header</h1>;
ReactDOM.render(
  <App />,document.getElementById('root')
=======
ReactDOM.render(<SecurityQuestions/>,
  document.getElementById('root')
>>>>>>> 17db510ec6ee7755c7c7057b2465d21085e6a0a9
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
