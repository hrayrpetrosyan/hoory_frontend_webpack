import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { resetAssistant } from '../../Assistant/actions';
import { assistantNameSelector, assistantIconFileNameSelector } from '../../Assistant/selector';
import lazyLoadIcons from '../../../utils/lazyLoadIcons';

import AppButton from '../../../components/AppButton';

import './index.scss';

function SuccessView({ history }) {
    const dispatch = useDispatch();
    const assistantName = useSelector((state) => assistantNameSelector(state));
    const assistantFileName = useSelector((state) => assistantIconFileNameSelector(state));

    const getIcon = () => {
        const image = lazyLoadIcons(`./${assistantFileName || 'male-1'}.svg`);
        return image.default;
    };

    const goToDashboard = () => {
        history.push('/dashboard');
        dispatch(resetAssistant());
    };

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
