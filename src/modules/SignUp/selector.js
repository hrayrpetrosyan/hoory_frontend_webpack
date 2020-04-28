/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getAuth = (state) => state.signUp;

export const getAssistantName = createSelector(
    getAuth,
    (auth) => auth.assistant.name,
);
