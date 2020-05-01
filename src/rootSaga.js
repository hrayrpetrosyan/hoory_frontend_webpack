import { all } from 'redux-saga/effects';

import signUpSaga from './modules/SignUp/saga';
import signInSaga from './modules/SignIn/saga';
import assistantSaga from './modules/Assistant/saga';
import profileSaga from './modules/Profile/saga';

function* rootSaga() {
    yield all(
        [
            signUpSaga(),
            signInSaga(),
            assistantSaga(),
            profileSaga(),
        ],
    );
}

export default rootSaga;
