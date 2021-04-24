// Import libraries
import { connect } from 'react-redux';

const SurveyList = ({ title }) => (
  <section>
    <h1>{title}</h1>
  </section>
);

// Map dispatch
const mapDispatchToProps = dispatch => ({
});

// Map state
const mapStateToProps = state => ({
  title: state.surveyReducer.title,
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);