/* eslint-disable import/prefer-default-export */
import { SIGN_UP } from '../../constants/actions';

export const setName = (payload) => ({
    type: SIGN_UP.SET_NAME,
    payload,
});
