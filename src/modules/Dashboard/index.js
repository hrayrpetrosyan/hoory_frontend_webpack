import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppToolbarLayout from '../../components/AppToolbarLayout';
import Workspace from './Workspace';
import AssistantName from '../Assistant/AssistantName';
import AssistantStyle from '../Assistant/AssistantStyle';

function Dashboard() {
    return (
        <AppToolbarLayout>
            <Switch>
                <Route path="/dashboard" component={Workspace} exact />
                <Route path="/dashboard/assistant/name" component={AssistantName} exact />
                <Route path="/dashboard/assistant/style" component={AssistantStyle} exact />
                <Redirect to="/dashboard" />
            </Switch>
        </AppToolbarLayout>
    );
}

export default Dashboard;
