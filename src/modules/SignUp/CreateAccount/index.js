import React from 'react';
import { Link } from 'react-router-dom';

import AppGoogleButton from '../../../components/AppGoogleButton';
import AppInput from '../../../components/AppInput';
import AppButton from '../../../components/AppButton';

import './index.scss';

function CreateAccount() {
    return (
        <div className="create-account__container">
            <div className="body">
                <h3>Create your account</h3>
                <div className="google-section">
                    <AppGoogleButton />
                </div>
                <div className="divider-section">
                    <div className="line" />
                    <div>or</div>
                    <div className="line" />
                </div>
                <div className="form-section">
                    <form>
                        <div className="name-surname-inputs">
                            <div>
                                <input className="first-name-input" type="text" placeholder="First name" />
                            </div>
                            <div className="divider" />
                            <div>
                                <input className="last-name-input" type="text" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="email-input">
                            <AppInput placeholder="Email" />
                        </div>
                        <div className="password-input">
                            <AppInput placeholder="Password" />
                        </div>
                        <p className="caption">By registering an account you agree to the PP and T&C</p>
                        <div>
                            <AppButton fullwidth>Create account</AppButton>
                        </div>
                        <p className="caption">Have an account? <Link to="/">Sign In</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
