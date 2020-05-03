import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
    setAssistantName, setAssistantColor, setAssistantIconFileName, setAssistantGender,
    attemptDeleteAssistant,
} from '../../../Assistant/actions';

import lazyLoadIcons from '../../../../utils/lazyLoadIcons';
import AppIconButton from '../../../../components/AppIconButton';

import './index.scss';

function AssistantCard({
    _id, name, fileName, empty, gender, color,
}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const [showAll, setShowAll] = useState(false);

    const getIcon = () => {
        const image = lazyLoadIcons(`./${fileName}.svg`);
        return image.default;
    };

    const handleShowAll = () => setShowAll(true);
    const handleShowDots = () => setShowAll(false);

    const handleClickEdit = useCallback(() => {
        dispatch(setAssistantName(name));
        dispatch(setAssistantGender(gender));
        dispatch(setAssistantColor(color));
        dispatch(setAssistantIconFileName(fileName));
        history.push(`/dashboard/assistant/name?_id=${_id}`);
    }, [name, color, fileName, _id]);

    const handleClickDelete = useCallback(() => dispatch(attemptDeleteAssistant(_id)), [_id]);

    if (empty) return <div className="assistant-card__container__empty">No data</div>;
    return (
        <div className="assistant-card__container">
            <div className="assistant-block">
                <div>
                    <img className="assistant-img" src={getIcon()} alt="Assistant" />
                </div>
                <div>
                    <h4>{ name }</h4>
                </div>
            </div>
            <div
                className="actions-block"
                onMouseEnter={handleShowAll}
                onMouseLeave={handleShowDots}
            >
                {showAll && (
                    <>
                        <div>
                            <AppIconButton icon="pen" onClick={handleClickEdit} />
                        </div>
                        <div>
                            <AppIconButton color="red" icon="trash" onClick={handleClickDelete} />
                        </div>
                    </>
                )}
                <div>
                    <AppIconButton icon="ellipsis-v" />
                </div>
            </div>
        </div>
    );
}

export default AssistantCard;
