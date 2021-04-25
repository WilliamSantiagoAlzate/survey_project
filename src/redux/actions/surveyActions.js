// Import consts
import { 
  CREATE_SURVEY,
  UPDATE_SURVEY,
  GET_SURVEY_BY_ID 
} from '../consts';

export const createSurvey = payload => ({
  type: CREATE_SURVEY,
  payload
});

export const updateSurvey = payload => ({
  type: UPDATE_SURVEY,
  payload
});

export const getSurveyById = payload => ({
  type: GET_SURVEY_BY_ID,
  payload
});