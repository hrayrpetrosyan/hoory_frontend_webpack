import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import signUp from './modules/SignUp/reducer';


export default combineReducers({
    signUp,
    toastr: toastrReducer,
});
