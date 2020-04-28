import { SIGN_UP } from '../../constants/actions';

export const setAssistantName = (payload) => ({
    type: SIGN_UP.SET_ASSISTANT_NAME,
    payload,
});

export const setAssistantGender = (payload) => ({
    type: SIGN_UP.SET_ASSISTANT_GENDER,
    payload,
});

export const setAssistantColor = (payload) => ({
    type: SIGN_UP.SET_ASSISTANT_COLOR,
    payload,
});
