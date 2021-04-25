// Import libraries
import { useState } from 'react'
import { connect } from 'react-redux';
import { Formik } from 'formik';
// Import utils
import { generateSurveyId } from '../utils/idGenerator';
// Import components
import SurveyForm from '../components/SurveyForm';
// Import actions
import { createSurvey } from '../redux/actions/surveyActions';

const CreateSurvey = ({ createSurvey }) => {
  // State
  const [showAlert, setShowAlert] = useState(false);
  const [initialValues] = useState({
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
  
  // Submit data
  const submit = (values, actions) => {
    console.log(values);
    createSurvey(values);
    actions.resetForm();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <section className="row mb-4">
      <h1 className="text-center mt-3 col-12">Create survey</h1>
      {showAlert &&
        <article className="alert alert-success w-50 mx-auto" role="alert">
          <p className="mb-0">Survey created successfully!</p>
        </article>
      }
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        rese
      >
        {({ values, handleChange }) => (
          <SurveyForm values={values} handleChange={handleChange} />
        )}
      </Formik>
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  createSurvey(surveyData) {
    dispatch(createSurvey({ surveyData }))
  },
});
  
export default connect(null, mapDispatchToProps)(CreateSurvey);