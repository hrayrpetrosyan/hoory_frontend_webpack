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
