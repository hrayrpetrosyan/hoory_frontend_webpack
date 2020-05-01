import { PROFILE } from '../constants/actions';
import httpClient from '../utils/httpClient';

const authMiddleware = () => (next) => (action) => {
    if (action.type === PROFILE.SET_PROFILE_INFO) {
        const { _id } = action.payload;
        httpClient.defaults.headers.common.Authorization = _id;
        localStorage.setItem('_id', _id);
    }

    if (action.type === PROFILE.RESET_PROFILE_INFO) {
        delete httpClient.defaults.headers.common.Authorization;
        localStorage.removeItem('_id');
    }
    next(action);
};
export default authMiddleware;
