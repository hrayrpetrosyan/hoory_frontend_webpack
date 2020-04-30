import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { profileIdSelector } from '../modules/Profile/selector';

function AuthenticedRoute({ path, component }) {
    const profileId = useSelector((state) => profileIdSelector(state));

    if (!profileId) return <Redirect to="/signup/name" />;
    return (
        <Route path={path} component={component} />
    );
}

export default AuthenticedRoute;
