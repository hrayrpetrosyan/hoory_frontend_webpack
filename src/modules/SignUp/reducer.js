import { SIGN_UP } from '../../constants/actions';

const initState = () => ({
    assistant: {
        name: '',
        gender: '',
        color: '',
    },
});

const SET_ASSISTANT_NAME = (state, { payload }) => ({
    ...state,
    assistant: {
        ...state.assistant,
        name: payload,
    },
});

const SET_ASSISTANT_GENDER = (state, { payload }) => ({
    ...state,
    assistant: {
        ...state.assistant,
        gender: payload,
    },
});

const SET_ASSISTANT_COLOR = (state, { payload }) => ({
    ...state,
    assistant: {
        ...state.assistant,
        color: payload,
    },
});

const actionTypes = {
    [SIGN_UP.SET_ASSISTANT_NAME]: (state, action) => SET_ASSISTANT_NAME(state, action),
    [SIGN_UP.SET_ASSISTANT_GENDER]: (state, action) => SET_ASSISTANT_GENDER(state, action),
    [SIGN_UP.SET_ASSISTANT_COLOR]: (state, action) => SET_ASSISTANT_COLOR(state, action),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
