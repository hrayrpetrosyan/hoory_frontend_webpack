import React from 'react';

import './index.scss';

function AppButton({ children, fullwidth, ...restProps }) {
    const className = fullwidth ? 'app-button-fullwidth' : '';
    return (
        <button
            className={`app-button ${className}`}
            type="button"
            {...restProps}
        >
            { children }
        </button>
    );
}

export default AppButton;
