import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function CustomRoute({
    path, component, exact = false, redirect, to,
}) {
    if (redirect) return <Redirect to={to} />;
    return (
        <Route path={path} component={component} exact={exact} />
    );
}

export default CustomRoute;
