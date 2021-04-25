// Import consts
import { CREATE_SURVEY } from '../consts';

export const createSurvey = payload => ({
  type: CREATE_SURVEY,
  payload
});