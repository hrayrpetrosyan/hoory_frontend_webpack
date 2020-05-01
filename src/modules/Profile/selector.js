import { createSelector } from 'reselect';

const getAuth = (state) => state.profile;

export const profileIdSelector = createSelector(
    getAuth,
    (auth) => auth._id,
);

export const profileFirstNameSelector = createSelector(
    getAuth,
    (auth) => auth.firstName,
);

export const profileLastNameSelector = createSelector(
    getAuth,
    (auth) => auth.lastName,
);

export const profileEmailSelector = createSelector(
    getAuth,
    (auth) => auth.email,
);

export const getProfileActionStatusSelector = createSelector(
    getAuth,
    (auth) => auth.getProfileActionStatus,
);
