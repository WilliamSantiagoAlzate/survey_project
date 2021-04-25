// Initialize state
import { initialState } from '../initialState';
// Import consts
import { 
	CREATE_SURVEY,
	UPDATE_SURVEY,
	GET_SURVEY_BY_ID 
} from '../consts';

// Create reducers
const surveyReducer = (state = initialState, action) => {
	const { surveys } = state;
	let surveyIndex = 0;
	
	switch (action.type) {
		case CREATE_SURVEY:
			const { surveyData: createSurveyData } = action.payload;
			surveys.push(createSurveyData);
			return {
				...state,
				surveys
			}
		case UPDATE_SURVEY:
			const { surveyData: updateSurveyData } = action.payload;
			surveyIndex = surveys.findIndex(({ id }) => id === updateSurveyData.id);
			surveys[surveyIndex] = updateSurveyData;
			return {
				...state,
				surveys
			}
		case GET_SURVEY_BY_ID:
			const { surveyId } = action.payload;
			surveyIndex = surveys.findIndex(({ id }) => id === surveyId);
			const survey = surveys[surveyIndex];
			return {
				...state,
				survey
			}
		default:
			return { ...state };
	}
}

export default surveyReducer;