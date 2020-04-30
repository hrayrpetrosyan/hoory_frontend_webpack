import { createSelector } from 'reselect';

const getAuth = (state) => state.assistant;

export const assistantNameSelector = createSelector(
    getAuth,
    (auth) => auth.name,
);

export const assistantIconFileNameSelector = createSelector(
    getAuth,
    (auth) => auth.fileName,
);
