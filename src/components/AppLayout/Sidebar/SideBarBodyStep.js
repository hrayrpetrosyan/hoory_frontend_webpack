import React from 'react';
import { useParams } from 'react-router-dom';

import { pathStep } from './helpers';
import stepImg from '../../../assets/step.svg';
import doneImg from '../../../assets/done.svg';


function SideBarBodyStep({ title, path }) {
    const params = useParams();

    const isStepAlreadyDone = pathStep[path] < pathStep[params.signup_route];

    const imgSrc = isStepAlreadyDone ? doneImg : stepImg;
    const pClassName = isStepAlreadyDone || path === params.signup_route ? 'bold-text' : '';

    return (
        <div className="step">
            <div>
                <img src={imgSrc} alt="Step" />
            </div>
            <div>
                <p className={pClassName}>{ title }</p>
            </div>
        </div>
    );
}

export default SideBarBodyStep;
