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

<<<<<<< HEAD

ReactDOM.render(<Registration/>,
=======
ReactDOM.render(<SecurityQuestions/>,
>>>>>>> 387d85bd4801396c7dd7df34aa8155e4a2b5f406
  document.getElementById('root')
);

serviceWorker.unregister();
