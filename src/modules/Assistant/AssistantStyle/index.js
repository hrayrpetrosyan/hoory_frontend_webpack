/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { parse } from 'query-string';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ACTION_STATUSES } from '../../../constants/actions';
import {
    assistantNameSelector, assistantColorSelector, assistantGenderSelector,
    createAssistantActionStatusSelector, editAssistantActionStatusSelector,
} from '../selector';
import {
    setAssistantGender, setAssistantColor, setAssistantIconFileName,
    attemptCreateAssistant, attemptEditAssistant, resetAssistant,
} from '../actions';
import { colors, defaultColor } from './helpers';
import lazyLoadIcons from '../../../utils/lazyLoadIcons';

import withLoading from '../../../hocs/withLoading';
import AppColorCircle from '../../../components/AppColorCircle';
import AppButton from '../../../components/AppButton';

import './index.scss';

let initRender = true;

function AssistantStyle({ history, location }) {
    const dispatch = useDispatch();
    const { signup_route } = useParams();
    const { _id } = parse(location.search);

    const assistantName = useSelector((state) => assistantNameSelector(state));
    const assistantColor = useSelector((state) => assistantColorSelector(state));
    const assistantGender = useSelector((state) => assistantGenderSelector(state));
    const createAssistantActionStatus = useSelector((state) => createAssistantActionStatusSelector(state));
    const editAssistantActionStatus = useSelector((state) => editAssistantActionStatusSelector(state));

    const [gender, setGender] = useState(assistantGender || 'female');
    const [color, setColor] = useState(defaultColor(assistantColor));

    useEffect(() => {
        if (initRender) initRender = false;
        else if (createAssistantActionStatus === ACTION_STATUSES.SUCCESS
            || editAssistantActionStatus === ACTION_STATUSES.SUCCESS) {
            dispatch(resetAssistant());
            history.push('/dashboard');
        }
    }, [createAssistantActionStatus, editAssistantActionStatus]);


    const handleSelectColor = (item) => setColor(item);
    const handleClickFemale = () => setGender('female');
    const handleClickMale = () => setGender('male');

    const generateFileName = (iconGender) => {
        let fileName = iconGender;
        if (gender === iconGender) fileName += '-selected';
        fileName += `-${color.id}`;
        return fileName;
    };

    const getIconImage = (iconGender) => {
        const fileName = generateFileName(iconGender);
        const iconImg = lazyLoadIcons(`./${fileName}.svg`);
        return iconImg.default;
    };

    const handleClickNext = () => {
        const fileName = generateFileName(gender);
        const body = { gender, color: color.color, fileName };
        if (signup_route) {
            dispatch(setAssistantGender(gender));
            dispatch(setAssistantColor(color.color));
            dispatch(setAssistantIconFileName(fileName));
            history.push('/signup/account');
        } else if (_id) {
            dispatch(attemptEditAssistant({ _id, ...body }));
        } else {
            dispatch(attemptCreateAssistant(body));
        }
    };

    return (
        <div className="assistant-style__container">
            <div className="body">
                <div className="icon-section">
                    <h3>Select { assistantName }&apos;s icon</h3>
                    <div className="icons">
                        <div role="button" onClick={handleClickFemale} tabIndex={0}>
                            <img src={getIconImage('female')} alt="Female" />
                        </div>
                        <div role="button" onClick={handleClickMale} tabIndex={0}>
                            <img src={getIconImage('male')} alt="Male" />
                        </div>
                    </div>
                </div>
                <div className="color-section">
                    <h3>Select color scheme</h3>
                    <div className="colors">
                        { colors.map((item) => (
                            <AppColorCircle
                                key={item.id}
                                handleSelectColor={handleSelectColor}
                                selected={color.color === item.color}
                                item={item}
                            />
                        )) }
                    </div>
                </div>
                <div>
                    <AppButton onClick={handleClickNext}>
                        { signup_route ? 'Next' : 'Submit' }
                    </AppButton>
                </div>
            </div>
        </div>
    );
}

export default withLoading(createAssistantActionStatusSelector)(AssistantStyle);
