import { SIGN_UP, ACTION_STATUSES } from '../../constants/actions';

const initState = () => ({
    signUpActionStatus: ACTION_STATUSES.UNDEFINED,
});

const SET_SIGN_UP_ACTION_STATUS = (state, { payload }) => ({
    signUpActionStatus: payload,
});

const actionTypes = {
    [SIGN_UP.SET_SIGN_UP_ACTION_STATUS]: (state, action) => SET_SIGN_UP_ACTION_STATUS(state, action),
    [SIGN_UP.RESET_SIGN_UP]: () => initState(),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
