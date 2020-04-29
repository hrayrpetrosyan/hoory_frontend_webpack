import React from 'react';

import male1Img from '../../../../assets/logos/male-1.svg';
import AppIconButton from '../../../../components/AppIconButton';
import './index.scss';

function AssistantCard() {
    return (
        <div className="assistant-card__container">
            <div className="assistant-block">
                <div>
                    <img className="assistant-img" src={male1Img} alt="Assistant" />
                </div>
                <div>
                    <h4>Assistant</h4>
                </div>
            </div>
            <div className="actions-block">
                <div>
                    <AppIconButton icon="pen" />
                </div>
                <div>
                    <AppIconButton icon="trash" />
                </div>
                <div>
                    <AppIconButton icon="ellipsis-v" />
                </div>
            </div>
        </div>
    );
}

export default AssistantCard;
