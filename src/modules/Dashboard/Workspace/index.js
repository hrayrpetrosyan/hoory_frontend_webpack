import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { attemptGetAssistants } from '../../Assistant/actions';
import { deleteAssistantActionStatusSelector } from '../../Assistant/selector';

import withLoading from '../../../hocs/withLoading';
import AppSearchInput from '../../../components/AppSearchInput';
import Assistants from './Assistants';

import './index.scss';

let timeout;

function Workspace() {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('');

    useEffect(() => dispatch(attemptGetAssistants(keyword)), [keyword]);

    const handleChangeSearch = ({ target }) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => dispatch(setKeyword(target.value)), 300);
    };

    return (
        <div className="workspace__container">
            <div className="body">
                <AppSearchInput onChange={handleChangeSearch} />
                <Assistants />
                <Link to="/dashboard/assistant/name">
                    <button
                        className="add-workspace-button"
                        type="button"
                    >
                        + Add Workspace
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default withLoading(deleteAssistantActionStatusSelector)(Workspace);
