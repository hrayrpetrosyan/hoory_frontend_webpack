import { takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { SIGN_IN, ACTION_STATUSES } from '../../constants/actions';
import { setSignInActionStatus, resetSignIn } from './actions';
import { setProfileInfo } from '../Profile/actions';
import httpClient from '../../utils/httpClient';

function* attemptSignIn({ payload }) {
    yield put(setSignInActionStatus(ACTION_STATUSES.PENDING));
    try {
        const res = yield httpClient.post('profile/signin', payload);
        yield put(setProfileInfo(res.profile));
        yield put(setSignInActionStatus(ACTION_STATUSES.SUCCESS));
        yield put(resetSignIn());
    } catch (error) {
        yield put(setSignInActionStatus(ACTION_STATUSES.FAIL));
        toastr.error('Error', error.message);
    }
}

function* SignInSaga() {
    yield takeEvery(SIGN_IN.ATTEMPT_SIGN_IN, attemptSignIn);
}

export default SignInSaga;
