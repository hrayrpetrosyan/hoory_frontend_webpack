import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import assistant from './modules/Assistant/reducer';


export default combineReducers({
    assistant,
    toastr: toastrReducer,
});
