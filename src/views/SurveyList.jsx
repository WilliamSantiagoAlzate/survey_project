// Import libraries
import { connect } from 'react-redux';
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
    </section>
  </section>
);

// Map dispatch
const mapDispatchToProps = dispatch => ({
});

// Map state
const mapStateToProps = state => ({
  surveys: state.surveyReducer.surveys
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);