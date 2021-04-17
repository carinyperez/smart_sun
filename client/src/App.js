import './App.css';
import { Switch, Route } from 'react-router-dom';
import Onboarding from './pages/onboarding/onboarding';
import Name from './pages/onboarding-pages/Name';
import Email from './pages/onboarding-pages/Email';
import Outdoors from './pages/onboarding-pages/Outdoors';
import Profession from './pages/onboarding-pages/Profession';
import WakeUp from './pages/onboarding-pages/WakeUp';
import Dashboard from './pages/dashboard/dashboard';
import HomePage from './pages/homepage/homepage';
import skinAnalyzer from './pages/Skin Analyzer/skinAnalyzer';
import Final from './pages/onboarding-pages/Final';


const App = () => {
  return (
    <div className="App">
      {/* Switch renders exact matches */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/onboarding' component={Onboarding} />
        <Route exact path='/onboarding' component={Onboarding} />
        <Route exact path='/onboarding/name' component={Name} />
        <Route exact path='/onboarding/email' component={Email} />
        <Route exact path='/onboarding/outdoors' component={Outdoors} />
        <Route exact path='/onboarding/wakeup' component={WakeUp} />
        <Route exact path='/onboarding/profession' component={Profession} />
        <Route exact path='/onboarding/final' component={Final}/>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path="/skinAnalyzer" component={skinAnalyzer}/>
        </Switch>
    </div>
  );
}
export default App;

// {weatherData && <p>{weatherData.weather}</p>}
