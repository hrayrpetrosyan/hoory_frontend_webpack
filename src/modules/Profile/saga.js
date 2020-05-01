import { takeEvery, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { PROFILE, ACTION_STATUSES } from '../../constants/actions';
import { setGetProfileActionStatus, setProfileInfo } from './actions';

import httpClient from '../../utils/httpClient';

function* attemptGetProfile({ payload }) {
    yield put(setGetProfileActionStatus(ACTION_STATUSES.PENDING));
    try {
        const res = yield httpClient.get(`/profile/${payload}`);
        yield put(setProfileInfo(res.profile));
        yield put(setGetProfileActionStatus(ACTION_STATUSES.SUCCESS));
    } catch (error) {
        yield put(setGetProfileActionStatus(ACTION_STATUSES.FAIL));
        toastr.error('Error', error);
    }
}

function* ProfileSaga() {
    yield takeEvery(PROFILE.ATTEMPT_GET_PROFILE, attemptGetProfile);
}

export default ProfileSaga;
