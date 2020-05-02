import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { assistantIconFileNameSelector, assistantNameSelector } from '../Assistant/selector';
import { profileIdSelector } from '../Profile/selector';

import CustomRoute from '../../routes/CustomRoute';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';
import UnAuthenticatedRoute from '../../routes/UnAuthenticatedRoute';

import AppLayout from '../../components/AppLayout';
import AssistantName from '../Assistant/AssistantName';
import AssistantStyle from '../Assistant/AssistantStyle';
import CreateAccount from './CreateAccount';
import SuccessView from './SuccessView';


function SignUp({ match }) {
    const assistantName = useSelector((state) => assistantNameSelector(state));
    const assistantFileName = useSelector((state) => assistantIconFileNameSelector(state));
    const profileId = useSelector((state) => profileIdSelector(state));

    return (
        <AppLayout>
            <Switch>
                <UnAuthenticatedRoute
                    path="/signup/name"
                    render={(routeProps) => <AssistantName {...routeProps} match={match} />}
                    exact
                />
                <CustomRoute
                    path="/signup/style"
                    render={(routeProps) => <AssistantStyle {...routeProps} match={match} />}
                    exact
                    redirect={!assistantName || profileId}
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
