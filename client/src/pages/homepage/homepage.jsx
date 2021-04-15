import react from 'react';
import { withRouter } from 'react-router-dom';
import Weather from '../../components/weather/weather';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './homepage.styles.scss';

const HomePage = ({ history }) => {
    const [weatherData, setWeatherData] = useState(false);
    const getWeather = async () => {
        // const weather = await axios.get(`${history.location.pathname}`);
        const weather = await axios.get(`${'/api/weather/oakland'}`);
        setWeatherData(weather.data);
    }
    useEffect(() => {
        getWeather();
    }, [])
    // setWeatherData(true)
    return (
        <div className='homepage'>
            Homepage
            <Weather weatherData={weatherData} />
            {
                console.log(weatherData)
            }
        </div>
    )
}
export default withRouter(HomePage);