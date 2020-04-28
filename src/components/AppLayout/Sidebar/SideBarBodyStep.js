import React from 'react';

import stepImg from '../../../assets/step.svg';


function SideBarBodyStep({ title }) {
    return (
        <div className="step">
            <div>
                <img src={stepImg} alt="Step" />
            </div>
            <div>
                <p>{ title }</p>
            </div>
        </div>
    );
}

export default SideBarBodyStep;
