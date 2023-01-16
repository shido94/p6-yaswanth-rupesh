import { combineReducers } from 'redux';

import stepReducer from './counterReducer';

// combined reducer
export default combineReducers({
	stepper: stepReducer,
});
