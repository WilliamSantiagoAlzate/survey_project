// Import libraries
import { Field, Form, FieldArray } from 'formik';

const SurveyAnswerForm = ({ questions, handleChange }) => (
  <Form className="col-md-8 offset-md-2">

    <FieldArray name="questions">
      {() => (
        <>
          {questions.map((question, index) => (
            <section className="row pt-2 mb-3" key={index}>
              <h5>{question.description}</h5>
              {question.answerType === 'OPEN' ?
                <Field
                  id={`questions.${index}.answerDescription`}
                  name={`questions.${index}.answerDescription`}
                  as="textarea"
                  className="form-control my-3"
                  onChange={handleChange}
                  value={question.answerDescription}
                />
                :
                <div className="my-3">
                  {question.selectAnswer.map(answer => 
                    <div className="form-check" key={answer.id}>
                      <Field
                        checked={answer.id === Number(question.answerId)} 
                        id={`${answer.id}`}
                        name={`questions.${index}.answerId`} 
                        type="radio" 
                        className="form-check-input" 
                        onChange={handleChange}
                        value={answer.id} 
                      />
                      <label className="form-check-label" htmlFor={`${answer.id}`}>
                        {answer.description}
                      </label>
                    </div>
                  )}
                </div>
              }
            </section>
          ))}
        </>
      )}
    </FieldArray>

    <button type="submit" className="btn btn-primary">Submit</button>

  </Form>
);
  
export default SurveyAnswerForm;