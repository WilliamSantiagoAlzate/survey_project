//Initialize state
const initialState = {
  title: 'Survey'
};

//Create reducers
const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
}

export default surveyReducer;