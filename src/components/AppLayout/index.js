import React from 'react';

import Sidebar from './Sidebar';
import './index.scss';

function AppLayout({ children }) {
    return (
        <div className="app-layout__container">
            <Sidebar />
            <div className="body">
                { children }
            </div>
        </div>
    );
}

export default React.memo(AppLayout);
