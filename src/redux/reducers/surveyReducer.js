// Import consts
import { CREATE_SURVEY } from '../consts';
// Initialize state
import { initialState } from '../initialState';

// Create reducers
const surveyReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_SURVEY:
			const { surveyData } = action.payload;
			const { surveys } = state;
			surveys.push(surveyData);
			return {
				...state,
				surveys
			}
		default:
			return { ...state };
	}
}

export default surveyReducer;