import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ACTION_STATUSES } from '../../../constants/actions';
import { signUpActionStatusSelector } from '../selector';

import AppGoogleButton from '../../../components/AppGoogleButton';
import AppAuthFormDivider from '../../../components/AppAuthFormDivider';
import CreateAccountForm from './CreateAccountForm';
import withLoading from '../../../hocs/withLoading';

import './index.scss';

function CreateAccount({ history }) {
    const signUpActionStatus = useSelector((state) => signUpActionStatusSelector(state));

    useEffect(() => {
        if (signUpActionStatus === ACTION_STATUSES.SUCCESS) history.push('/signup/success');
    }, [signUpActionStatus]);

    return (
        <div className="create-account__container">
            <div className="body">
                <h3>Create your account</h3>
                <div className="google-section">
                    <AppGoogleButton />
                </div>
                <AppAuthFormDivider />
                <div className="form-section">
                    <CreateAccountForm />
                </div>
            </div>
        </div>
    );
}

export default withLoading(signUpActionStatusSelector)(CreateAccount);
