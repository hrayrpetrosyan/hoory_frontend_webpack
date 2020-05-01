import { PROFILE, ACTION_STATUSES } from '../../constants/actions';

const initState = () => ({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    getProfileActionStatus: ACTION_STATUSES.UNDEFINED,
});

const SET_PROFILE_INFO = (state, { payload }) => ({
    ...state,
    _id: payload._id,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
});

const SET_GET_PROFILE_ACTION_STATUS = (state, { payload }) => ({
    ...state,
    getProfileActionStatus: payload,
});


const actionTypes = {
    [PROFILE.SET_PROFILE_INFO]: (state, action) => SET_PROFILE_INFO(state, action),
    [PROFILE.SET_GET_PROFILE_ACTION_STATUS]: (state, action) => SET_GET_PROFILE_ACTION_STATUS(state, action),
    [PROFILE.RESET_PROFILE_INFO]: () => initState(),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
