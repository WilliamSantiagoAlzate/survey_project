// Import libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Import components
import SurveyCard from '../components/SurveyCard';

const SurveyList = ({ surveys }) => (
  <section>
    <h1 className="text-center mt-3">Surveys</h1>
    <section className="row mt-4">
      {surveys.map(survey => 
        <section key={survey.id} className="col-md-6 col-lg-4">
          <SurveyCard survey={survey} />
        </section>
      )}
      {surveys.length === 0 &&
        <section className="d-flex flex-column align-items-center">
          <h5 className="text-info">There aren't any surveys, create your first survey</h5>
          <Link to="/create">
            <button type="button" className="btn btn-primary mt-3">
              Create survey
            </button>
          </Link>
        </section>
      }
    </section>
  </section>
);

// Map state
const mapStateToProps = state => ({
  surveys: state.surveyReducer.surveys
});
  
export default connect(mapStateToProps, null)(SurveyList);