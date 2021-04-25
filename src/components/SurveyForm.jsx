// Import libraries
import { Field, Form, FieldArray } from 'formik';
// Import components
import QuestionsForm from './QuestionsForm';

const SurveyForm = ({ values, handleChange }) => (
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
      {({ push, remove }) => (
        <QuestionsForm push={push} remove={remove} questions={values.questions} handleChange={handleChange}/>
      )}
    </FieldArray>

    <button type="submit" className="btn btn-primary">Submit</button>

  </Form>
);
  
export default SurveyForm;