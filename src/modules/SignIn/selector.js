import { createSelector } from 'reselect';

const getAuth = (state) => state.signIn;

export const signInActionStatusSelector = createSelector(
    getAuth,
    (auth) => auth.signInActionStatus,
);
