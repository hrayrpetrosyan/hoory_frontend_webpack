import { takeEvery, put, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { SIGN_UP, ACTION_STATUSES } from '../../constants/actions';
import { setSignUpActionStatus } from './actions';
import { setProfileInfo } from '../Profile/actions';
import httpClient from '../../utils/httpClient';

function* attemptSignUp({ payload }) {
    yield put(setSignUpActionStatus(ACTION_STATUSES.PENDING));
    const { assistant } = yield select();
    try {
        const body = { ...payload, assistant };
        const res = yield httpClient.post('profile/signup', body);
        yield put(setProfileInfo(res.profile));
        yield put(setSignUpActionStatus(ACTION_STATUSES.SUCCESS));
    } catch (error) {
        yield put(setSignUpActionStatus(ACTION_STATUSES.FAIL));
        toastr.error('Error', error.message);
    }
}

function* SignUpSaga() {
    yield takeEvery(SIGN_UP.ATTEMPT_SIGN_UP, attemptSignUp);
}

export default SignUpSaga;
