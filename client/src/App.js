import axios from 'axios';
import './App.css';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Weather from './components/weather';

const App = ({ history }) => {
  const [weatherData, setWeatherData] = useState(false);
  const getWeather = async () => {
    const weather = await axios.get(`${history.location.pathname}`);
    setWeatherData(weather.data);
  }
  useEffect(() => {
    getWeather();
  }, [])
  // setWeatherData(true)
  return (
    <div className="App">
      <header className="App-header">
        <Weather weatherData={weatherData} />
        {
          console.log(weatherData)
        }
      </header>
    </div>
  );
}
export default withRouter(App);

// {weatherData && <p>{weatherData.weather}</p>}
