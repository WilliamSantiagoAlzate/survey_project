// Import libraries
import { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { Formik } from 'formik';
// Import components
import SurveyAnswerForm from '../components/SurveyAnswerForm';
// Import actions
import { saveSurveyAnswer, getSurveyById } from '../redux/actions/surveyActions';

const Survey = ({
  match,
  history, 
  survey, 
  saveSurveyAnswer, 
  getSurveyById 
}) => {
  // State
  const [surveyId] = useState(Number(match.params.id));
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({});

  // Create ref
  const alertRef = useRef(null);
  
  // Get survey data
  useEffect(() => {
    getSurveyById(surveyId);
  }, [getSurveyById, surveyId]);

  // Set survey data
  useEffect(() => {
    if (survey.id) {
      setInitialValues({questions: survey.questions.map(question => ({
        ...question,
        answerId: 0,
        answerType: question.answerType,
        answerDescription: '',
      }))});
      setIsLoading(false);
    }
  }, [survey]);
  
  // Submit data
  const submit = (values) => {
    console.log(values);
    saveSurveyAnswer({ ...values, id: survey.id });
    setShowAlert(true);
    alertRef.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setShowAlert(false);
      history.push('/');
    }, 2000);
  };

  return (
    <section className="row mb-4">
      {isLoading ? 
        <div className="spinner-border text-primary" role="status"></div> :
        <>
          <h1 className="text-center mt-3 col-12">{survey.title}</h1>
          <p>{survey.description}</p>
          <Formik
            initialValues={initialValues}
            onSubmit={submit}
            rese
          >
            {({ values, handleChange }) => (
              <SurveyAnswerForm questions={values.questions} handleChange={handleChange} />
            )}
          </Formik>
        </>
      }
      {showAlert &&
        <article className="alert alert-success w-50 mx-auto mt-2" role="alert" ref={alertRef}>
          <p className="mb-0">Survey submitted successfully!</p>
        </article>
      }
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  saveSurveyAnswer(surveyAnswer) {
    dispatch(saveSurveyAnswer({ surveyAnswer }))
  },
  getSurveyById(surveyId) {
    dispatch(getSurveyById({ surveyId }))
  },
});

// Map state
const mapStateToProps = state => ({
  survey: state.surveyReducer.survey
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Survey);