import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

function AppIconButton({ icon, color, ...restProps }) {
    return (
        <button className="app-icon-button" type="button" {...restProps}>
            <FontAwesomeIcon className={color && 'red'} icon={icon || 'ellipsis-v'} />
        </button>
    );
}

export default AppIconButton;
