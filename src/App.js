import React from 'react';
import {
	Route, Switch, Router, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SignUp from './modules/SignUp';

import './App.scss';

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/signup/:signup_route" component={SignUp} />
				<Redirect to="/signup/style" />
			</Switch>
		</Router>
	);
}

export default App;
