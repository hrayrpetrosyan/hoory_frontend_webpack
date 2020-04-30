import React from 'react';
import { useSelector } from 'react-redux';

import AppLoading from '../components/AppLoading';
import { ACTION_STATUSES } from '../constants/actions';

const withLoading = (actionStatusSelector) => (Component) => (props) => {
    const actionStatus = useSelector((state) => actionStatusSelector(state));

    if (actionStatus === ACTION_STATUSES.PENDING) {
        return (
            <AppLoading />
        );
    }
    return (<Component {...props} />);
};

export default withLoading;
