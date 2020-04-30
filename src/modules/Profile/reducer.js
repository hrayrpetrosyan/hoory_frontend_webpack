import { PROFILE } from '../../constants/actions';

const initState = () => ({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
});

const SET_PROFILE_INFO = (state, { payload }) => ({
    _id: payload._id,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
});

const actionTypes = {
    [PROFILE.SET_PROFILE_INFO]: (state, action) => SET_PROFILE_INFO(state, action),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
