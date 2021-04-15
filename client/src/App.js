import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Onboarding from './pages/onboarding/onboarding';
import Introduction from './components/introduction/introduction';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/onboarding' component={Onboarding} />
        {/* <Route exact path='/introduce-yourself' component={Introduction} /> */}
      </Router>
    </div>
  );
}
export default App;

// {weatherData && <p>{weatherData.weather}</p>}
