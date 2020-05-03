import React, { useState } from 'react';

import passIconImg from '../../assets/password_visibility.svg';
import './index.scss';

function AppInput({ password, ...restProps }) {
    const [type, setType] = useState(password ? 'password' : 'text');

    const handleClickPass = () => setType((prev) => (prev === 'text' ? 'password' : 'text'));

    return (
        <div className="app-input__container">
            <input
                className="app-input"
                type={type}
                {...restProps}
            />
            {password && (
                <button type="button" onClick={handleClickPass}>
                    <img src={passIconImg} alt="pass" />
                </button>
            )}
        </div>
    );
}

export default React.memo(AppInput);
