// Import libraries
import { connect } from 'react-redux';
import { Field, FieldArray } from 'formik';
// Import utils
import { generateQuestionId } from '../utils/idGenerator';
// Import components
import SelectAnswerForm from './SelectAnswerForm';

const QuestionsForm = ({ 
  questions, 
  handleChange,
  push,
  remove, 
  answerTypes 
}) => (
  <>
    <h5 className="text-center">Questions</h5>
    {questions.map((question, index) => (
      <section className="row border rounded-3 pt-2 mb-3" key={index}>
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

          <label htmlFor={`questions.${index}.answerType`} className="form-label">Answer type</label>
          <Field
            id={`questions.${index}.answerType`}
            name={`questions.${index}.answerType`}
            as="select"
            className="form-select mb-3"
            onChange={handleChange}
            value={question.answerType}
          >
            <option value={''}>Select a answer type</option>
            {answerTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
          </Field>

          {question.answerType === answerTypes[1] && 
            <FieldArray name={`questions.${index}.selectAnswer`}>
              {({ push, remove }) => (
                <SelectAnswerForm push={push} remove={remove} selectAnswer={question.selectAnswer} handleChange={handleChange}/>
              )}
            </FieldArray>
          }

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
          id: generateQuestionId(questions), 
          description: '',
          answerType: '',
          selectAnswer: [{
            id: 1,
            description: '',
          }]
        })}
        type="button"
      >
        <i className="fas fa-plus-circle"></i>
      </button>
    </section>
  </>
);

// Map state
const mapStateToProps = state => ({
  answerTypes: state.surveyReducer.answerTypes
});
  
export default connect(mapStateToProps, null)(QuestionsForm);