import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const getWeather = async () => {
    const weather = await axios.get('/api/weather/oakland');
    setWeatherData(weather.data);
  }
  useEffect(() => {
    getWeather();
  }, [])
  return (

    <div className="App">
      <header className="App-header">
        Smart Plan
        {
          console.log(weatherData)
        }
      </header>
    </div>
  );
}
export default App;

// {weatherData && <p>{weatherData.weather}</p>}
