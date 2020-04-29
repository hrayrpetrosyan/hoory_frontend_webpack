import React from 'react';
import { useSelector } from 'react-redux';

import { getAssistantName, getAssistantIconFileName } from '../../Assistant/selector';
import { images } from '../helpers';

import AppButton from '../../../components/AppButton';

import './index.scss';

function SuccessView({ history }) {
    const assistantName = useSelector((state) => getAssistantName(state));
    const assistantFileName = useSelector((state) => getAssistantIconFileName(state));

    const getIcon = () => {
        const image = images(`./${assistantFileName || 'male-1'}.svg`);
        return image.default;
    };

    const goToDashboard = () => history.push('/dashboard');

    return (
        <div className="success-view__container">
            <div className="body">
                <img src={getIcon()} alt="Icon" />
                <h3>Fantastico <span aria-label="tada" role="img">🎉</span></h3>
                <div className="content">
                    <p>You have successfully setup the Hoory widget on your website!</p>
                    <p>Proceed to Admin Dashboard to start training { assistantName || '<name>' }</p>
                </div>
                <div>
                    <AppButton onClick={goToDashboard}>Go to Admin Dashboard</AppButton>
                </div>
            </div>
        </div>
    );
}

export default SuccessView;
