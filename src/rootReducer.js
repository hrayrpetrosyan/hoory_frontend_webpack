import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import SignUp from './modules/SignUp/reducer';


export default combineReducers({
	SignUp,
	toastr: toastrReducer,
});
