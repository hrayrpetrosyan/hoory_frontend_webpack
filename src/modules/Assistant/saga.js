import { takeEvery, put, select } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { ASSISTANT, ACTION_STATUSES } from '../../constants/actions';
import {
    setGetAssistantsActionStatus, setAssistantsData, setCreateAssistantActionStatus,
    setEditAssistantActionStatus, setDeleteAssistantActionStatus,
} from './actions';
import httpClient from '../../utils/httpClient';

function* attemptGetAssistants({ payload }) {
    yield put(setGetAssistantsActionStatus(ACTION_STATUSES.PENDING));
    try {
        const res = yield httpClient.get('/assistant', {
            params: {
                keyword: payload,
            },
        });
        yield put(setAssistantsData(res.assistants));
        yield put(setGetAssistantsActionStatus(ACTION_STATUSES.SUCCESS));
    } catch (error) {
        yield put(setGetAssistantsActionStatus(ACTION_STATUSES.FAIL));
        toastr.error('Error', error.message);
    }
}

function* attemptCreateAssistant({ payload }) {
    yield put(setCreateAssistantActionStatus(ACTION_STATUSES.PENDING));
    const { assistant } = yield select();
    try {
        yield httpClient.post('/assistant', {
            name: assistant.name,
            ...payload,
        });
        yield put(setCreateAssistantActionStatus(ACTION_STATUSES.SUCCESS));
        toastr.success('Success', 'Assistant created successfully');
    } catch (error) {
        yield put(setCreateAssistantActionStatus(ACTION_STATUSES.FAIL));
        toastr.error('Error', error.message);
    }
}

function* attemptEditAssistant({ payload }) {
    yield put(setEditAssistantActionStatus(ACTION_STATUSES.PENDING));
    const { assistant } = yield select();
    try {
        yield httpClient.patch(`/assistant/${payload._id}`, {
            name: assistant.name,
            gender: payload.gender,
            color: payload.color,
            fileName: payload.fileName,
        });
        yield put(setEditAssistantActionStatus(ACTION_STATUSES.SUCCESS));
        toastr.success('Success', 'Assistant edited successfully');
    } catch (error) {
        yield put(setEditAssistantActionStatus(ACTION_STATUSES.SUCCESS));
        toastr.error('Error', error.message);
    }
}

function* attemptDeleteAssistant({ payload }) {
    yield put(setDeleteAssistantActionStatus(ACTION_STATUSES.PENDING));
    try {
        yield httpClient.delete(`/assistant/${payload}`);
        yield put(setDeleteAssistantActionStatus(ACTION_STATUSES.SUCCESS));
        toastr.success('Success', 'Assistant deleted successfully');
    } catch (error) {
        yield put(setDeleteAssistantActionStatus(ACTION_STATUSES.FAIL));
        toastr.error('Error', error.message);
    }
}

function* AssistantSaga() {
    yield takeEvery(ASSISTANT.ATTEMPT_GET_ASSISTANTS, attemptGetAssistants);
    yield takeEvery(ASSISTANT.ATTEMPT_CREATE_ASSISTANT, attemptCreateAssistant);
    yield takeEvery(ASSISTANT.ATTEMPT_EDIT_ASSISTANT, attemptEditAssistant);
    yield takeEvery(ASSISTANT.ATTEMPT_DELETE_ASSISTANT, attemptDeleteAssistant);
}

export default AssistantSaga;
