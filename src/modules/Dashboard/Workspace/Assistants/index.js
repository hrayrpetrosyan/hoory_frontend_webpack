import React from 'react';
import { useSelector } from 'react-redux';

import { assistantsDataSelector, getAssistantsActionStatusSelector } from '../../../Assistant/selector';

import withLoading from '../../../../hocs/withLoading';
import AssistantCard from './AssistantCard';

function Assistants() {
    const assistantsData = useSelector((state) => assistantsDataSelector(state));

    if (!assistantsData.length) return <AssistantCard empty />;

    return (
        <>
            { assistantsData.map(({
                _id, name, gender, color, fileName,
            }) => (
                <AssistantCard
                    key={_id}
                    _id={_id}
                    name={name}
                    gender={gender}
                    color={color}
                    fileName={fileName}
                />
            )) }
        </>
    );
}

export default withLoading(getAssistantsActionStatusSelector)(Assistants);
