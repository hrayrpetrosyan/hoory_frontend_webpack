import { PROFILE } from '../../constants/actions';

export const setProfileInfo = (payload) => ({
    type: PROFILE.SET_PROFILE_INFO,
    payload,
});

export const resetProfileInfo = () => ({
    type: PROFILE.RESET_PROFILE_INFO,
});

export const attemptGetProfile = (payload) => ({
    type: PROFILE.ATTEMPT_GET_PROFILE,
    payload,
});

export const setGetProfileActionStatus = (payload) => ({
    type: PROFILE.SET_GET_PROFILE_ACTION_STATUS,
    payload,
});
