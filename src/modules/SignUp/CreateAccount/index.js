import React from 'react';

import AppGoogleButton from '../../../components/AppGoogleButton';
import AppAuthFormDivider from '../../../components/AppAuthFormDivider';
import CreateAccountForm from './CreateAccountForm';

import './index.scss';

function CreateAccount() {
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

export default CreateAccount;
