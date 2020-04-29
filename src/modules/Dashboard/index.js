import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppToolbarLayout from '../../components/AppToolbarLayout';
import Workspace from './Workspace';

function Dashboard() {
    return (
        <AppToolbarLayout>
            <Switch>
                <Route path="/dashboard" component={Workspace} exact />
            </Switch>
        </AppToolbarLayout>
    );
}

export default Dashboard;
