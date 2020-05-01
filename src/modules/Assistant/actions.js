import { ASSISTANT } from '../../constants/actions';

export const setAssistantName = (payload) => ({
    type: ASSISTANT.SET_ASSISTANT_NAME,
    payload,
});

export const setAssistantGender = (payload) => ({
    type: ASSISTANT.SET_ASSISTANT_GENDER,
    payload,
});

export const setAssistantIconFileName = (payload) => ({
    type: ASSISTANT.SET_ASSISTANT_ICON_FILE_NAME,
    payload,
});

export const setAssistantColor = (payload) => ({
    type: ASSISTANT.SET_ASSISTANT_COLOR,
    payload,
});

export const attemptGetAssistants = (payload) => ({
    type: ASSISTANT.ATTEMPT_GET_ASSISTANTS,
    payload,
});

export const setGetAssistantsActionStatus = (payload) => ({
    type: ASSISTANT.SET_GET_ASSISTANTS_ACTION_STATUS,
    payload,
});

export const setAssistantsData = (payload) => ({
    type: ASSISTANT.SET_ASSISTANTS_DATA,
    payload,
});

export const attemptCreateAssistant = (payload) => ({
    type: ASSISTANT.ATTEMPT_CREATE_ASSISTANT,
    payload,
});

export const setCreateAssistantActionStatus = (payload) => ({
    type: ASSISTANT.SET_CREATE_ASSISTANT_ACTION_STATUS,
    payload,
});

export const attemptEditAssistant = (payload) => ({
    type: ASSISTANT.ATTEMPT_EDIT_ASSISTANT,
    payload,
});

export const setEditAssistantActionStatus = (payload) => ({
    type: ASSISTANT.SET_EDIT_ASSISTANT_ACTION_STATUS,
    payload,
});

export const attemptDeleteAssistant = (payload) => ({
    type: ASSISTANT.ATTEMPT_DELETE_ASSISTANT,
    payload,
});

export const setDeleteAssistantActionStatus = (payload) => ({
    type: ASSISTANT.SET_DELETE_ASSISTANT_ACTION_STATUS,
    payload,
});

export const resetAssistant = () => ({
    type: ASSISTANT.RESET_ASSISTANT,
});
