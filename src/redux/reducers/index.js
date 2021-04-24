//Import libraries
import { combineReducers } from 'redux';

//Import reducers
import surveyReducer from './surveyReducer';

//Add reducers to root
const rootReducer = combineReducers({
	surveyReducer
});

export default rootReducer;