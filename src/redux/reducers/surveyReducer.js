//Initialize state
import { initialState } from '../initialState';

//Create reducers
const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
}

export default surveyReducer;