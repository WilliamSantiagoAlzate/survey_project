// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import views
import SurveyList from './views/SurveyList';
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
            </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
