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
import Final from './pages/onboarding-pages/Final';
import UserManagement from './API/UserManagement'
import AirVisual from './API/airVisual';
import { useEffect, useState } from 'react';

const App = () => {

  const [username, setUserName] = useState('Blessing')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const userManagement = new UserManagement();
  console.log(userManagement)
  function onNameClick(name) {
    setUserName(name)
    console.log(username)
  }
  function onEmailPassword(email, password) {
    setEmail(email);
    setPassword(password);
    console.log(email + password)
  }
 /* function onFinish() {
    console.log(email, password, username)
   console.log(userManagement.register)
    userManagement.register({ email, password, 'name': username })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }*/

  // const [longitute, setLongitude] = useState('');
  // const [latitude, setLatitude] = useState('');
  // const [airPollution, setAirPollution] = useState('');

  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition((function(position){
  //     setLatitude(position.coords.latitude)
  //     setLongitude(position.coords.longitude)
  //     console.log("Latitute is : ", position.coords.latitude)
  //     console.log("Longitude is : ", position.coords.longitude)
  //   }));

  //   const airVisual = new AirVisual(latitude, longitute);

  //   airVisual.getInfo()
  //   .then((res)=>{
  //     setAirPollution(res.data.current.pollution.aqius)
  //     console.log(res)
  //   console.log(res.data.current.pollution);
  //   console.log(res.data.current.weather)
  //   })
  // })
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
        <Route exact path='/onboarding/final' component={() => <Final/>} />
        <Route exact path='/dashboard' component={()=><Dashboard name={username}/>} />
        <Route path="/skinAnalyzer" component={skinAnalyzer} />
      </Switch>
    </div>
  );
}
export default App;

