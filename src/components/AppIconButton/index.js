import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

function AppIconButton({ icon }) {
    return (
        <button className="app-icon-button" type="button">
            <FontAwesomeIcon icon={icon || 'ellipsis-v'} />
        </button>
    );
}

export default AppIconButton;
