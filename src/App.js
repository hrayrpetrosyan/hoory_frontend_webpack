import React, { useEffect } from 'react';
import {
    Switch, Router, Redirect, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSearch, faEllipsisV, faTrash, faPen,
} from '@fortawesome/free-solid-svg-icons';

import { attemptGetProfile } from './modules/Profile/actions';
import { getProfileActionStatusSelector, profileIdSelector } from './modules/Profile/selector';

import AuthenticedRoute from './routes/AuthenticatedRoute';
import UnAuthenticatedRoute from './routes/UnAuthenticatedRoute';
import withLoading from './hocs/withLoading';
import SignUpRoute from './modules/SignUp';
import SignInRoute from './modules/SignIn';
import DashboardRoute from './modules/Dashboard';

import './App.scss';


library.add(faSearch, faEllipsisV, faTrash, faPen);
const history = createBrowserHistory();

function App() {
    const dispatch = useDispatch();
    const profileId = useSelector((state) => profileIdSelector(state));

    useEffect(() => {
        const _id = localStorage.getItem('_id');
        if (_id && !profileId) dispatch(attemptGetProfile(_id));
    }, []);

    return (
        <Router history={history}>
            <Switch>
                <Route path="/signup/:signup_route" component={SignUpRoute} exact />
                <UnAuthenticatedRoute path="/signin" component={SignInRoute} exact />
                <AuthenticedRoute path="/dashboard" component={DashboardRoute} />
                <Redirect to="/signin" />
            </Switch>
        </Router>
    );
}

export default withLoading(getProfileActionStatusSelector)(App);
