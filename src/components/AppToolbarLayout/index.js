import React from 'react';

import Toolbar from './Toolbar';
import './index.scss';

function AppToolbarLayout({ children }) {
    return (
        <div className="app-toolbar-layout__container">
            <Toolbar />
            <div className="body">
                { children }
            </div>
        </div>
    );
}

export default React.memo(AppToolbarLayout);
