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

export const generateQuestionId = (questions) => {
  const lastIndex = questions.length - 1;
  return questions[lastIndex].id + 1;
}

export const generateSelectAnswerId = (selectAnswer) => {
  const lastIndex = selectAnswer.length - 1;
  return selectAnswer[lastIndex].id + 1;
}

export const generateAnswerId = (surveyId) => {

}

export const generateAnswerConsolidatedId = (surveyId, answerId) => {

}