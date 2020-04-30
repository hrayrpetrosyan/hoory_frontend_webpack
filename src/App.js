import React from 'react';
import {
    Switch, Router, Redirect, Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSearch, faEllipsisV, faTrash, faPen,
} from '@fortawesome/free-solid-svg-icons';

import AuthenticedRoute from './routes/AuthenticatedRoute';
import UnAuthenticatedRoute from './routes/UnAuthenticatedRoute';

import SignUpRoute from './modules/SignUp';
import SignInRoute from './modules/SignIn';
import DashboardRoute from './modules/Dashboard';

import './App.scss';


library.add(faSearch, faEllipsisV, faTrash, faPen);
const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/signup/:signup_route" component={SignUpRoute} />
                <UnAuthenticatedRoute path="/signin" component={SignInRoute} exact />
                <AuthenticedRoute path="/dashboard" component={DashboardRoute} exact />
                <Redirect to="/signup/name" />
            </Switch>
        </Router>
    );
}

export default App;
