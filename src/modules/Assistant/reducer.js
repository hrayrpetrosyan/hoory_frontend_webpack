import { ASSISTANT, ACTION_STATUSES } from '../../constants/actions';

const initState = () => ({
    name: '',
    gender: '',
    color: '',
    fileName: '',
    assistantsData: [],
    getAssistantsActionStatus: ACTION_STATUSES.UNDEFINED,
    createAssistantActionStatus: ACTION_STATUSES.UNDEFINED,
    editAssistantActionStatus: ACTION_STATUSES.UNDEFINED,
    deleteAssistantActionStatus: ACTION_STATUSES.UNDEFINED,
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

const SET_ASSISTANTS_DATA = (state, { payload }) => ({
    ...state,
    assistantsData: payload,
});

const SET_GET_ASSISTANTS_ACTION_STATUS = (state, { payload }) => ({
    ...state,
    getAssistantsActionStatus: payload,
});

const SET_CREATE_ASSISTANT_ACTION_STATUS = (state, { payload }) => ({
    ...state,
    createAssistantActionStatus: payload,
});

const SET_EDIT_ASSISTANT_ACTION_STATUS = (state, { payload }) => ({
    ...state,
    editAssistantActionStatus: payload,
});

const SET_DELETE_ASSISTANT_ACTION_STATUS = (state, { payload }) => ({
    ...state,
    deleteAssistantActionStatus: payload,
});

const actionTypes = {
    [ASSISTANT.SET_ASSISTANT_NAME]: (state, action) => SET_ASSISTANT_NAME(state, action),
    [ASSISTANT.SET_ASSISTANT_GENDER]: (state, action) => SET_ASSISTANT_GENDER(state, action),
    [ASSISTANT.SET_ASSISTANT_COLOR]: (state, action) => SET_ASSISTANT_COLOR(state, action),
    [ASSISTANT.SET_ASSISTANT_ICON_FILE_NAME]: (state, action) => SET_ASSISTANT_ICON_FILE_NAME(state, action),
    [ASSISTANT.SET_ASSISTANTS_DATA]: (state, action) => SET_ASSISTANTS_DATA(state, action),
    [ASSISTANT.RESET_ASSISTANT]: () => initState(),

    [ASSISTANT.SET_GET_ASSISTANTS_ACTION_STATUS]: (state, action) => SET_GET_ASSISTANTS_ACTION_STATUS(state, action),
    [ASSISTANT.SET_CREATE_ASSISTANT_ACTION_STATUS]: (state, action) => SET_CREATE_ASSISTANT_ACTION_STATUS(state, action),
    [ASSISTANT.SET_EDIT_ASSISTANT_ACTION_STATUS]: (state, action) => SET_EDIT_ASSISTANT_ACTION_STATUS(state, action),
    [ASSISTANT.SET_DELETE_ASSISTANT_ACTION_STATUS]: (state, action) => SET_DELETE_ASSISTANT_ACTION_STATUS(state, action),
};

export default (state = initState(), action) => (
    actionTypes[action.type] ? actionTypes[action.type](state, action) : { ...state }
);
