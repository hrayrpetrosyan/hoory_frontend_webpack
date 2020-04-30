import { all } from 'redux-saga/effects';

import signUpSaga from './modules/SignUp/saga';

function* rootSaga() {
    yield all(
        [
            signUpSaga(),
        ],
    );
}

export default rootSaga;
