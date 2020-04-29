import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';

// import { setAccountFirstName, setAccountLastName, setAccountEmail, setAccountPassword } from '../actions';
import { errorMessages, emailRegEx, passwordRegEx } from './helpers';

import AppInput from '../../../components/AppInput';
import AppButton from '../../../components/AppButton';


function CreateAccountForm() {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeFirstName = ({ target }) => setFirstName(target.value);
    const handleChangeLastName = ({ target }) => setLastName(target.value);
    const handleChangeEmail = ({ target }) => setEmail(target.value);
    const handleChangePassword = ({ target }) => setPassword(target.value);

    const validateInputs = () => {
        let errorField;
        if (firstName.length < 3) errorField = 'firstName';
        else if (lastName.length < 3) errorField = 'lastName';
        else if (!email || !emailRegEx.test(email)) errorField = 'email';
        else if (!passwordRegEx.test(password)) errorField = 'password';

        if (errorField) toastr.error('Error', errorMessages[errorField]);
        return !errorField;
    };

    const handleSubmitCreateAccount = (e) => {
        e.preventDefault();
        const isValid = validateInputs();
        if (isValid) {
            // API CALL
            history.push('/signup/success');
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
