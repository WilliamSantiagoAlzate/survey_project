// Import libraries
import { Link } from 'react-router-dom';

const SurveyCard = ({ survey }) => (
  <article className="card">
    <section className="card-header">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{survey.title}</h5>
        <span className="text-danger cursor-pointer">
          <i className="fas fa-trash"></i>
        </span>
      </div>
      <span className="badge rounded-pill bg-success me-2">
        {`${survey.questions.length} Questions`}
      </span>
      <span className="badge rounded-pill bg-success">
        {survey.answers.length > 0 && 
          `${survey.answers[0].answersConsolidated.length} Answers`
        }
      </span>
    </section>
    <section className="card-body">
      <p className="card-text">{survey.description}</p>
      <Link className="btn btn-primary me-2" to="/">Update</Link>
      <Link className="btn btn-primary" to="/">Answer survey</Link>
    </section>
  </article>
);

export default SurveyCard;