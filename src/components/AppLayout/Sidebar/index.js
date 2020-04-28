import React from 'react';
import { useParams } from 'react-router-dom';
import { steps } from '../helpers';
import hooryLogoWhiteImg from '../../../assets/hoory_logo_white.png';
import SideBarBodyStep from './SideBarBodyStep';

import './index.scss';

function AppSidebar() {
    const params = useParams();
    console.log(params);
    return (
        <div className="app-sidebar__container">
            <div className="sidebar-image">
                <img src={hooryLogoWhiteImg} alt="Hoory" />
            </div>
            <div className="sidebar-body">
                { steps.map((step) => <SideBarBodyStep key={step.id} title={step.title} />) }
            </div>
        </div>
    );
}

export default AppSidebar;
