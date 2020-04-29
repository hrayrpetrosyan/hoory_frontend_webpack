import React from 'react';

import AppSearchInput from '../../../components/AppSearchInput';
import AssistantCard from './AssistantCard';

import './index.scss';

function Workspace() {
    return (
        <div className="workspace__container">
            <div className="body">
                <AppSearchInput />
                <AssistantCard />
                <button className="add-workspace-button" type="button">+ Add Workspace</button>
            </div>
        </div>
    );
}

export default Workspace;
