import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import profile from './modules/Profile/reducer';
import assistant from './modules/Assistant/reducer';
import signUp from './modules/SignUp/reducer';
import signIn from './modules/SignIn/reducer';


export default combineReducers({
    profile,
    assistant,
    signUp,
    signIn,
    toastr: toastrReducer,
});
