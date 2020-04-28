import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppLayout from '../../components/AppLayout';
import AssistantName from './AssistantName';
import AssistantStyle from './AssistantStyle';


function SignUp() {
    return (
        <AppLayout>
            <Switch>
                <Route path="/signup/name" component={AssistantName} exact />
                <Route path="/signup/style" component={AssistantStyle} exact />
            </Switch>
        </AppLayout>
    );
}

export default SignUp;
