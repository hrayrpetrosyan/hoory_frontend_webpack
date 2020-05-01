import React from 'react';

import { signInActionStatusSelector } from './selector';

import withLoading from '../../hocs/withLoading';
import hooryLogoImg from '../../assets/hoory_logo.svg';
import AppGoogleButton from '../../components/AppGoogleButton';
import AppAuthFormDivider from '../../components/AppAuthFormDivider';
import SignInForm from './SignInForm';

import './index.scss';

function SignIn() {
    return (
        <div className="sign-in__container">
            <div className="body">
                <img src={hooryLogoImg} alt="Logo" />
                <div className="form-container">
                    <h3>Sign in to your account</h3>
                    <div className="google-section">
                        <AppGoogleButton />
                    </div>
                    <AppAuthFormDivider />
                    <SignInForm />
                </div>
            </div>
        </div>
    );
}

export default withLoading(signInActionStatusSelector)(SignIn);
