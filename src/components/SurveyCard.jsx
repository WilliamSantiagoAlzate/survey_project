// Import libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Import actions
import { deleteSurvey } from '../redux/actions/surveyActions';

const SurveyCard = ({ survey, deleteSurvey }) => (
  <article className="card">
    <section className="card-header">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{survey.title}</h5>
        <button type="button" className="btn btn-danger py-1 px-2" onClick={() => deleteSurvey(survey.id)}>
          <i className="fas fa-trash"></i>
        </button>
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
      <Link to={`/update/${survey.id}`}>
        <button type="button" className="btn btn-primary me-2">
          Update
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-primary me-2">
          Answer survey
        </button>
      </Link>
    </section>
  </article>
);

// Map dispatch
const mapDispatchToProps = dispatch => ({
  deleteSurvey(surveyId) {
    dispatch(deleteSurvey({ surveyId }))
  },
});
  
export default connect(null, mapDispatchToProps)(SurveyCard);