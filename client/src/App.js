import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Name from './pages/onboarding-pages/Name';
import Email from './pages/onboarding-pages/Email';
import Outdoors from './pages/onboarding-pages/Outdoors';
import Profession from './pages/onboarding-pages/Profession';
import WakeUp from './pages/onboarding-pages/WakeUp';


const App = () => {
  return (
    <div className="App">
      {/* Switch renders exact matches */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/onboarding/name' component={Name} />
        <Route exact path='/onboarding/email' component={Email} />
        <Route exact path='/onboarding/outdoors' component={Outdoors} />
        <Route exact path='/onboarding/profession' component={Profession} />
        <Route exact path='/onboarding/wakeup' component={WakeUp} />
      </Switch>
    </div>
  );
}
export default App;

// {weatherData && <p>{weatherData.weather}</p>}
