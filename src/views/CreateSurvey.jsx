// Import libraries
import { connect } from 'react-redux';
import { Formik, Field, Form, FieldArray } from 'formik';
// Import utils
import { generateSurveyId, generateQuestionId } from '../utils/idGenerator';
// Import actions
import { createSurvey } from '../redux/actions/surveyActions';

const initialValues = {
  id: generateSurveyId(),
  title: '',
  description: '',
  questions: [{ id: 1, description: '' }],
  answers: []
}

const CreateSurvey = ({ createSurvey, answerTypes }) => {
  // Submit data
  const submit = (values) => {
    console.log(values);
  };

  return (
    <section className="row mb-4">
      <h1 className="text-center mt-3 col-12">Create survey</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ values, handleChange }) => (
          <Form className="col-md-6 offset-md-3">

            <label htmlFor="title" className="form-label">Title</label>
            <Field
              id="title"
              name="title"
              type="text"
              className="form-control mb-3"
              onChange={handleChange}
              value={values.title}
            />

            <label htmlFor="description" className="form-label">Description</label>
            <Field
              id="description"
              name="description"
              as="textarea"
              className="form-control mb-3"
              onChange={handleChange}
              value={values.description}
            />

            <FieldArray name="questions">
              {({ remove, push }) => (
                <>
                  <h5 className="text-center">Questions</h5>
                  {values.questions.map((question, index) => (
                    <section className="row" key={index}>
                      <div className="col-md-10">

                        <label htmlFor={`questions.${index}.description`} className="form-label">Description</label>
                        <Field
                          id={`questions.${index}.description`}
                          name={`questions.${index}.description`}
                          as="textarea"
                          className="form-control mb-3"
                          onChange={handleChange}
                          value={question.description}
                        />

                      </div>
                      <div className="col-md-2 d-flex justify-content-center align-items-center">
                        {index > 0 &&
                          <button 
                            className="btn btn-danger"
                            onClick={() => remove(index)}
                            type="button"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        }
                      </div>
                    </section>
                  ))}
                  <section className="d-flex justify-content-center">
                    <button 
                      className="btn btn-success"
                      onClick={() => push({
                        id: generateQuestionId(values), 
                        description: '' 
                      })}
                      type="button"
                    >
                      <i className="fas fa-plus-circle"></i>
                    </button>
                  </section>
                </>
              )}
            </FieldArray>

            <button type="submit" className="btn btn-primary">Submit</button>

          </Form>
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

// Map state
const mapStateToProps = state => ({
  answerTypes: state.surveyReducer.answerTypes
});
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateSurvey);