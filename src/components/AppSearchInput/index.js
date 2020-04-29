import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

function AppSearchInput() {
    return (
        <div className="app-search-input__container">
            <input className="app-search-input" type="text" placeholder="Search" />
            <FontAwesomeIcon icon="search" />
        </div>
    );
}

export default AppSearchInput;
