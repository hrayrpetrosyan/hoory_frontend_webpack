import { SIGN_IN } from '../../constants/actions';

export const attemptSignIn = (payload) => ({
    type: SIGN_IN.ATTEMPT_SIGN_IN,
    payload,
});

export const setSignInActionStatus = (payload) => ({
    type: SIGN_IN.SET_SIGN_IN_ACTION_STATUS,
    payload,
});

export const resetSignIn = () => ({
    type: SIGN_IN.RESET_SIGN_IN,
});
