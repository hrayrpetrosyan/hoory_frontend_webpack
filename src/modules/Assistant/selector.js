/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getAuth = (state) => state.assistant;

export const getAssistantName = createSelector(
    getAuth,
    (auth) => auth.name,
);

export const getAssistantIconFileName = createSelector(
    getAuth,
    (auth) => auth.fileName,
);
