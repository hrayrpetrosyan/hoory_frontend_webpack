import React, { useState, useCallback } from 'react';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { attemptSignIn } from './actions';
import { auth } from '../../constants/errorMessages';
import { emailRegEx, passwordRegEx } from '../../constants/regex';

import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

function SignInForm() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = useCallback(({ target }) => setEmail(target.value), []);
    const handleChangePassword = useCallback(({ target }) => setPassword(target.value), []);

    const validateInputs = () => {
        let errorField;
        if (!email || !emailRegEx.test(email)) errorField = 'email';
        else if (!passwordRegEx.test(password)) errorField = 'password';

        if (errorField) toastr.error('Error', auth[errorField]);
        return !errorField;
    };

    const handleSubmitSignIn = (e) => {
        e.preventDefault();
        const isValid = validateInputs();
        if (isValid) dispatch(attemptSignIn({ email, password }));
    };

    return (
        <form onSubmit={handleSubmitSignIn}>
            <div className="email-input">
                <AppInput
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </div>
            <div className="password-input">
                <AppInput
                    placeholder="Password"
                    password
                    value={password}
                    onChange={handleChangePassword}
                />
            </div>
            <div>
                <AppButton fullwidth type="submit">Sign in</AppButton>
            </div>
            <p className="caption">Don&apos;t have an account? <Link to="/signup/name">Sign up</Link></p>
            <Link className="caption" to="/signin">Forgot password?</Link>
        </form>
    );
}

export default SignInForm;
