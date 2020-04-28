import React, { useEffect } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SignUp from './modules/SignUp';

import './App.scss';

const history = createBrowserHistory();

function App() {
    useEffect(() => history.push('/signup/name'), []);

    return (
        <Router history={history}>
            <Switch>
                <Route path="/signup/:signup_route" component={SignUp} />
            </Switch>
        </Router>
    );
}

export default App;
