import { createSelector } from 'reselect';

const getAuth = (state) => state.assistant;

export const assistantNameSelector = createSelector(
    getAuth,
    (auth) => auth.name,
);

export const assistantColorSelector = createSelector(
    getAuth,
    (auth) => auth.color,
);

export const assistantGenderSelector = createSelector(
    getAuth,
    (auth) => auth.gender,
);

export const assistantIconFileNameSelector = createSelector(
    getAuth,
    (auth) => auth.fileName,
);

export const assistantsDataSelector = createSelector(
    getAuth,
    (auth) => auth.assistantsData,
);

export const getAssistantsActionStatusSelector = createSelector(
    getAuth,
    (auth) => auth.getAssistantsActionStatus,
);

export const createAssistantActionStatusSelector = createSelector(
    getAuth,
    (auth) => auth.createAssistantActionStatus,
);

export const editAssistantActionStatusSelector = createSelector(
    getAuth,
    (auth) => auth.editAssistantActionStatus,
);

export const deleteAssistantActionStatusSelector = createSelector(
    getAuth,
    (auth) => auth.deleteAssistantActionStatus,
);
