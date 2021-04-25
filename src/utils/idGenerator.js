// Import initial state
import { initialState } from '../redux/initialState';

export const generateSurveyId = () => {
  const lastIndex = initialState.surveys.length - 1;
  if (lastIndex < 0) {
    return 1;
  } else {
    return initialState.surveys[lastIndex].id + 1;
  }
}
export const generateQuestionId = (survey) => {
  const lastIndex = survey.questions.length - 1;
  return survey.questions[lastIndex].id + 1;
}
export const generateSelectAnswerId = (surveyId, questionId) => {

}
export const generateAnswerId = (surveyId) => {

}
export const generateAnswerConsolidatedId = (surveyId, answerId) => {

}