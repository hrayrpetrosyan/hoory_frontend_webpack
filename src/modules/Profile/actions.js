import { PROFILE } from '../../constants/actions';

export const setProfileInfo = (payload) => ({
    type: PROFILE.SET_PROFILE_INFO,
    payload,
});
