import { createSelector } from 'reselect';

const getAuth = (state) => state.signUp;

export const signUpActionStatusSelector = createSelector(
    getAuth,
    (auth) => auth.signUpActionStatus,
);
