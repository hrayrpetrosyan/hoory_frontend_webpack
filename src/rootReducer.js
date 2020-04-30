import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import profile from './modules/Profile/reducer';
import assistant from './modules/Assistant/reducer';
import signUp from './modules/SignUp/reducer';


export default combineReducers({
    profile,
    assistant,
    signUp,
    toastr: toastrReducer,
});
