import { Field } from 'formik';
// Import utils
import { generateSelectAnswerId } from '../utils/idGenerator';

const SelectAnswerForm = ({ 
  selectAnswer, 
  handleChange,
  push,
  remove
}) => (
  <>
    <h5 className="text-center">Answers</h5>
    {selectAnswer.map((answer, index) => (
      <section className="row border rounded-3 ms-2 pt-2 mb-3" key={index}>
        <div className="col-md-10">

          <label htmlFor={`selectAnswer.${index}.description`} className="form-label">Description</label>
          <Field
            id={`selectAnswer.${index}.description`}
            name={`selectAnswer.${index}.description`}
            as="textarea"
            className="form-control mb-3"
            onChange={handleChange}
            value={answer.description}
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
    <section className="d-flex justify-content-center mb-3">
      <button 
        className="btn btn-success"
        onClick={() => push({
          id: generateSelectAnswerId(selectAnswer), 
          description: '' 
        })}
        type="button"
      >
        <i className="fas fa-plus-circle"></i>
      </button>
    </section>
  </>
);

  
export default SelectAnswerForm;