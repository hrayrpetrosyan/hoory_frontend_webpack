import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { assistantIconFileNameSelector, assistantNameSelector } from '../Assistant/selector';

import CustomRoute from '../../routes/CustomRoute';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

import AppLayout from '../../components/AppLayout';
import AssistantName from '../Assistant/AssistantName';
import AssistantStyle from '../Assistant/AssistantStyle';
import CreateAccount from './CreateAccount';
import SuccessView from './SuccessView';


function SignUp() {
    const assistantName = useSelector((state) => assistantNameSelector(state));
    const assistantFileName = useSelector((state) => assistantIconFileNameSelector(state));

    return (
        <AppLayout>
            <Switch>
                <Route path="/signup/name" component={AssistantName} exact />
                <CustomRoute
                    path="/signup/style"
                    component={AssistantStyle}
                    exact
                    redirect={!assistantName}
                    to="/signup/name"
                />
                <CustomRoute
                    path="/signup/account"
                    component={CreateAccount}
                    exact
                    redirect={!assistantFileName}
                    to="/signup/name"
                />
                <AuthenticatedRoute path="/signup/success" component={SuccessView} exact />
            </Switch>
        </AppLayout>
    );
}

export default SignUp;
