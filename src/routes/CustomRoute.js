import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function CustomRoute({
    redirect, to, ...restProps
}) {
    if (redirect) return <Redirect to={to} />;
    return (
        <Route {...restProps} />
    );
}

export default CustomRoute;
