// Import libraries
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import AnswersModal from '../components/AnswersModal';
// Import actions
import { getSurveyById } from '../redux/actions/surveyActions';

const SurveyAnswers = ({
  match,
  survey,
  getSurveyById 
}) => {
  // State
  const [surveyId] = useState(Number(match.params.id));
  const [isLoading, setIsLoading] = useState(true);

  // Get survey data
  useEffect(() => {
    getSurveyById(surveyId);
  }, [getSurveyById, surveyId]);
  
  // Set is loading
  useEffect(() => {
    if (survey.id) {
      setIsLoading(false);
    }
  }, [survey]);

  // Get total and percentage of answer by each option
  const getTotalAndPercentage = (answers, optionId) => {
    const list = answers.filter(answer => answer.answerId === optionId);
    const total = list.length;
    const percentage = 100 * list.length / survey.totalAnswers;
    const roundedPercentage = Math.round(percentage * 100) / 100;
    return (
      <>
        <td>{total}</td>
        <td>{`${roundedPercentage}%`}</td>
      </>
    );
  }

  if (isLoading) {
    return <div className="spinner-border text-primary" role="status"></div>
  } else {
    return (
      <section className="row mb-4">
        <h1 className="text-center mt-3 col-12">
          {survey.title}
        </h1>
        <h5 className="text-center">
          <span className="badge rounded-pill bg-success">
            {`${survey.totalAnswers} Answers`}
          </span>
        </h5>
        <p>{survey.description}</p>
        {survey.questions.map(question => (
          <section className="border rounded mb-3 py-2" key={question.id}>
            <p className="text-center">{question.description}</p>
            {question.answerType === 'OPEN' &&
              <section className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Show answers
                </button>
                <AnswersModal answers={question.answers}/>
              </section>
            }
            {question.answerType === 'SELECT' &&
              <table className="table" key={question.id}>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Total</th>
                    <th>%</th>
                  </tr>
                </thead>
                <tbody>
                  {question.selectAnswer.map(answer => (
                    <tr key={answer.id}>
                      <td>{answer.description}</td>
                      {getTotalAndPercentage(question.answers, answer.id)}
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </section>
        ))}
      </section>
    )
  }
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getSurveyById(surveyId) {
    dispatch(getSurveyById({ surveyId }))
  },
});

// Map state
const mapStateToProps = state => ({
  survey: state.surveyReducer.survey
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SurveyAnswers);