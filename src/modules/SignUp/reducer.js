import { SIGN_UP } from '../../constants/actions';

const initState = () => ({
    name: '',
});

const SET_NAME = (state, { payload }) => ({
    ...state,
    name: payload,
});

const actionTypes = {
    [SIGN_UP.SET_NAME]: (state, action) => SET_NAME(state, action),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
