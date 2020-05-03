import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import { attemptSignUp } from '../actions';
import { auth } from '../../../constants/errorMessages';
import { emailRegEx, passwordRegEx } from '../../../constants/regex';

import AppInput from '../../../components/AppInput';
import AppButton from '../../../components/AppButton';


function CreateAccountForm() {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeFirstName = ({ target }) => setFirstName(target.value);
    const handleChangeLastName = ({ target }) => setLastName(target.value);
    const handleChangeEmail = useCallback(({ target }) => setEmail(target.value), []);
    const handleChangePassword = useCallback(({ target }) => setPassword(target.value), []);

    const validateInputs = () => {
        let errorField;
        if (firstName.length < 3) errorField = 'firstName';
        else if (lastName.length < 3) errorField = 'lastName';
        else if (!email || !emailRegEx.test(email)) errorField = 'email';
        else if (!passwordRegEx.test(password)) errorField = 'password';

        if (errorField) toastr.error('Error', auth[errorField]);
        return !errorField;
    };

    const handleSubmitCreateAccount = (e) => {
        e.preventDefault();
        const isValid = validateInputs();
        if (isValid) {
            dispatch(attemptSignUp({
                firstName,
                lastName,
                email,
                password,
            }));
        }
    };

    return (
        <form onSubmit={handleSubmitCreateAccount}>
            <div className="name-surname-inputs">
                <div>
                    <input
                        className="first-name-input"
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={handleChangeFirstName}
                    />
                </div>
                <div className="divider" />
                <div>
                    <input
                        className="last-name-input"
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={handleChangeLastName}
                    />
                </div>
            </div>
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
            <p className="caption">By registering an account you agree to the PP and T&C</p>
            <div>
                <AppButton fullwidth type="submit">Create account</AppButton>
            </div>
            <p className="caption">Have an account? <Link to="/signin">Sign In</Link> </p>
        </form>
    );
}

export default CreateAccountForm;
