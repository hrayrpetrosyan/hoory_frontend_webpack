/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { assistantNameSelector } from '../selector';
import { setAssistantGender, setAssistantColor, setAssistantIconFileName } from '../actions';
import { colors, defaultColor } from './helpers';
import lazyLoadIcons from '../../../utils/lazyLoadIcons';

import AppColorCircle from '../../../components/AppColorCircle';
import AppButton from '../../../components/AppButton';

import './index.scss';


function AssistantStyle({ history }) {
    const dispatch = useDispatch();
    const [gender, setGender] = useState('female');
    const [color, setColor] = useState(defaultColor);

    const assistantName = useSelector((state) => assistantNameSelector(state));

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
        const fileName = `${generateFileName(iconGender)}`;
        const iconImg = lazyLoadIcons(`./${fileName}.svg`);
        return iconImg.default;
    };

    const handleClickNext = () => {
        dispatch(setAssistantGender(gender));
        dispatch(setAssistantColor(color.color));
        dispatch(setAssistantIconFileName(generateFileName(gender)));
        history.push('/signup/account');
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
                    <AppButton onClick={handleClickNext}>Next</AppButton>
                </div>
            </div>
        </div>
    );
}

export default AssistantStyle;
