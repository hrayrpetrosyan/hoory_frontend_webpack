import { SIGN_UP } from '../../constants/actions';

export const attemptSignUp = (payload) => ({
    type: SIGN_UP.ATTEMPT_SIGN_UP,
    payload,
});

export const setSignUpActionStatus = (payload) => ({
    type: SIGN_UP.SET_SIGN_UP_ACTION_STATUS,
    payload,
});
