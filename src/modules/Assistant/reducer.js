import { ASSISTANT } from '../../constants/actions';

const initState = () => ({
    name: '',
    gender: '',
    color: '',
    fileName: '',
});

const SET_ASSISTANT_NAME = (state, { payload }) => ({
    ...state,
    name: payload,
});

const SET_ASSISTANT_GENDER = (state, { payload }) => ({
    ...state,
    gender: payload,
});

const SET_ASSISTANT_COLOR = (state, { payload }) => ({
    ...state,
    color: payload,
});

const SET_ASSISTANT_ICON_FILE_NAME = (state, { payload }) => ({
    ...state,
    fileName: payload,
});

const actionTypes = {
    [ASSISTANT.SET_ASSISTANT_NAME]: (state, action) => SET_ASSISTANT_NAME(state, action),
    [ASSISTANT.SET_ASSISTANT_GENDER]: (state, action) => SET_ASSISTANT_GENDER(state, action),
    [ASSISTANT.SET_ASSISTANT_COLOR]: (state, action) => SET_ASSISTANT_COLOR(state, action),
    [ASSISTANT.SET_ASSISTANT_ICON_FILE_NAME]: (state, action) => SET_ASSISTANT_ICON_FILE_NAME(state, action),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
