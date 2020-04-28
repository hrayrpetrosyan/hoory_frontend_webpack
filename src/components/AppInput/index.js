import React from 'react';

import './index.scss';

function AppInput({ placeholder }) {
    return (
        <input
            type="text"
            className="app-input"
            placeholder={placeholder}
        />
    );
}

export default AppInput;
