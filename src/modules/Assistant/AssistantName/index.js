import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import { setAssistantName } from '../actions';

import hooryIconGreyImg from '../../../assets/hoory_icon_grey.svg';
import AppButton from '../../../components/AppButton';

import './index.scss';

function AssistantName({ history }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('Hoory');

    const handleNameChange = ({ target }) => setName(target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) toastr.error('Error', 'Name field must not be empty!');
        else {
            dispatch(setAssistantName(name));
            history.push('/signup/style');
        }
    };

    return (
        <div className="assistant-name__container">
            <div className="body">
                <div className="image-section">
                    <img src={hooryIconGreyImg} alt="Hoory" />
                    <h1>hoory</h1>
                </div>
                <div className="body-section">
                    <form onSubmit={handleSubmit}>
                        <h3>Name your assistant</h3>
                        <input
                            className="name-input"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <div>
                            <AppButton type="submit">Start</AppButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AssistantName;
