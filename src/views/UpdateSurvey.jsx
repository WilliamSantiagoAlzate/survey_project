// Import libraries
import { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { Formik } from 'formik';
// Import utils
import { generateSurveyId } from '../utils/idGenerator';
// Import components
import SurveyForm from '../components/SurveyForm';
// Import actions
import { updateSurvey, getSurveyById } from '../redux/actions/surveyActions';

const UpdateSurvey = ({
  match,
  history, 
  survey, 
  updateSurvey, 
  getSurveyById 
}) => {
  // State
  const [surveyId] = useState(Number(match.params.id));
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({
    id: generateSurveyId(),
    title: '',
    description: '',
    questions: [{ 
      id: 1, 
      description: '',
      answerType: '',
      selectAnswer: [{
        id: 1,
        description: '',
      }] 
    }],
    answers: []
  });

  // Create ref
  const alertRef = useRef(null);
  
  // Get survey data
  useEffect(() => {
    getSurveyById(surveyId);
  }, [getSurveyById, surveyId]);

  // Set survey data
  useEffect(() => {
    if (survey.id) {
      setInitialValues(survey);
      setIsLoading(false);
    }
  }, [survey]);
  
  // Submit data
  const submit = (values) => {
    console.log(values);
    updateSurvey(values);
    setShowAlert(true);
    alertRef.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setShowAlert(false);
      history.push('/');
    }, 2000);
  };

  return (
    <section className="row mb-4">
      <h1 className="text-center mt-3 col-12">Update survey</h1>
      {isLoading ? 
        <div className="spinner-border text-primary" role="status"></div> :
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          rese
        >
          {({ values, handleChange }) => (
            <SurveyForm values={values} handleChange={handleChange} />
          )}
        </Formik>
      }
      {showAlert &&
        <article className="alert alert-success w-50 mx-auto mt-2" role="alert" ref={alertRef}>
          <p className="mb-0">Survey updated successfully!</p>
        </article>
      }
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  updateSurvey(surveyData) {
    dispatch(updateSurvey({ surveyData }))
  },
  getSurveyById(surveyId) {
    dispatch(getSurveyById({ surveyId }))
  },
});

// Map state
const mapStateToProps = state => ({
  survey: state.surveyReducer.survey
});
  
export default connect(mapStateToProps, mapDispatchToProps)(UpdateSurvey);