import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = ({ target }) => setEmail(target.value);
    const handleChangePassword = ({ target }) => setPassword(target.value);

    return (
        <form>
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
                <AppButton fullwidth>Sign in</AppButton>
            </div>
            <p className="caption">Don&apos;t have an account? <Link to="/signup/name">Sign up</Link></p>
            <Link className="caption" to="/signin">Forgot password?</Link>
        </form>
    );
}

export default SignInForm;
