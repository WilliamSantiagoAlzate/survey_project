// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import views
import SurveyList from './views/SurveyList';
import CreateSurvey from './views/CreateSurvey';
import UpdateSurvey from './views/UpdateSurvey';
import Survey from './views/Survey';
// Import components
import Header from './components/Header';
// Import style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="container">
            <Switch>
              <Route exact path="/" component={SurveyList}/>
              <Route exact path="/create" component={CreateSurvey}/>
              <Route exact path="/update/:id" component={UpdateSurvey}/>
              <Route exact path="/survey/:id" component={Survey}/>
            </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
