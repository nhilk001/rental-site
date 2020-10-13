import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './latest/Login';
import Registration from './latest/Registration';
import Search from './latest/Search.js';
import SecurityQuestions from './latest/SecurityQuestions';
import Pay from './latest/Pay.js';
import NavBar from './latest/NavBar';
import UserTable from './latest/UserTable';
import CarTable from './latest/CarTable';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
//this is the main page I believe

function App(){

    return (

        <Router>
            <div className="App">

                <Switch>
                <Route path="/" exact component={NavBar} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Registration} />
                    <Route path="/search" component={Search} />
                    <Route path="/questions" component={SecurityQuestions} />
                    <Route path="/pay" component={Pay} />
                    <Route path="/usertable" component={UserTable} />
                    <Route path="/cartable" component={CarTable} />
                </Switch>
            </div>
        </Router>

    );
}

export default App;
