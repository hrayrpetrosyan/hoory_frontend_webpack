import React, { useEffect } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faEllipsisV, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

import SignUpRoute from './modules/SignUp';
import SignInRoute from './modules/SignIn';
import DashboardRoute from './modules/Dashboard';

import './App.scss';

library.add(faSearch, faEllipsisV, faTrash, faPen);
const history = createBrowserHistory();

function App() {
    // useEffect(() => history.push('/signup/name'), []);

    return (
        <Router history={history}>
            <Switch>
                <Route path="/signup/:signup_route" component={SignUpRoute} />
                <Route path="/signin" component={SignInRoute} exact />
                <Route path="/dashboard" component={DashboardRoute} exact />
            </Switch>
        </Router>
    );
}

export default App;
