import { SIGN_IN, ACTION_STATUSES } from '../../constants/actions';

const initState = () => ({
    signUpActionStatus: ACTION_STATUSES.UNDEFINED,
});

const SET_SIGN_IN_ACTION_STATUS = (state, { payload }) => ({
    signInActionStatus: payload,
});

const actionTypes = {
    [SIGN_IN.SET_SIGN_IN_ACTION_STATUS]: (state, action) => SET_SIGN_IN_ACTION_STATUS(state, action),
    [SIGN_IN.RESET_SIGN_IN]: () => initState(),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
