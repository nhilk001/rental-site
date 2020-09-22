import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './latest/Login';
import Registration from './latest/Registration';
//import Search from './latest/Search';
import SecurityQuestions from './latest/SecurityQuestions';

import * as serviceWorker from './serviceWorker';
//this is the main page I believe

ReactDOM.render(<SecurityQuestions/>,
  document.getElementById('root')
);

serviceWorker.unregister();
