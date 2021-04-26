// Initialize state
import { initialState } from '../initialState';
// Import consts
import { 
	CREATE_SURVEY,
	UPDATE_SURVEY,
	GET_SURVEY_BY_ID,
	DELETE_SURVEY,
	SAVE_SURVEY_ANSWER 
} from '../consts';
// Import utils
import { generateAnswerId } from '../../utils/idGenerator';

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
		case DELETE_SURVEY:
			const { surveyId: deleteSurveyId  } = action.payload;
			const newSurveys = surveys.filter(({ id }) => id !== deleteSurveyId);
			return {
				...state,
				surveys: newSurveys
			}
		case SAVE_SURVEY_ANSWER:
			const { surveyAnswer } = action.payload;
			surveyIndex = surveys.findIndex(({ id }) => id === surveyAnswer.id);
			surveyAnswer.questions.forEach((question, index) => {
				surveys[surveyIndex].questions[index].answers.push({
					id: generateAnswerId(surveys[surveyIndex].questions[index].answers),
					answerId: Number(question.answerId),
					answerType: question.answerType,
					answerDescription: question.answerDescription,
				})
			});
			surveys[surveyIndex].totalAnswers ++;
			return {
				...state,
				surveys
			}
		default:
			return { ...state };
	}
}

export default surveyReducer;