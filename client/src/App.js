import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Name from './pages/onboarding-pages/Name';
import Email from './pages/onboarding-pages/Email';
import Outdoors from './pages/onboarding-pages/Outdoors';
import Profession from './pages/onboarding-pages/Profession';
import WakeUp from './pages/onboarding-pages/WakeUp';
import Dashboard from './pages/dashboard/dashboard';
import HomePage from './pages/homepage/homepage';
import skinAnalyzer from './pages/Skin Analyzer/skinAnalyzer';
import Nutrition from './components/nutrition/nutrition';
import Final from './pages/onboarding-pages/Final';
import UserManagement from './API/UserManagement'
import AirVisual from './API/airVisual';
import { useEffect, useState } from 'react';


const App = () => {
  const [username, setUserName] = useState('Blessing')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const userManagement = new UserManagement();
  function onNameClick(name) {
    setUserName(name)

  }
  function onEmailPassword(email, password) {
    setEmail(email);
    setPassword(password);
  }
  /* function onFinish() {
     console.log(email, password, username)
    console.log(userManagement.register)
     userManagement.register({ email, password, 'name': username })
       .then(res => console.log(res))
       .catch(err => console.log(err))
   }*/
  return (
    <div className="App">
      {/* Switch renders exact matches */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/onboarding' component={() => <Name onButtonClick={onNameClick} />
        } />
        <Route exact path='/onboarding/email' component={() => <Email
          onButtonClick={onEmailPassword} />} />
        <Route exact path='/onboarding/outdoors' component={Outdoors} />
        <Route exact path='/onboarding/wakeup' component={WakeUp} />
        <Route exact path='/onboarding/profession' component={Profession} />
        <Route exact path='/onboarding/final' component={() => <Final />} />
        <Route exact path='/dashboard' component={() => <Dashboard name={username} />} />
        <Route path="/skinAnalyzer" component={skinAnalyzer} />
        <Route path="/nutrition" component={Nutrition} />
      </Switch>
    </div>
  );
}
export default App;

