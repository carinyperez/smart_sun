import react, { useState, useEffect } from 'react';
import Weather from '../../components/weather/weather';
import axios from 'axios';

const Dashboard = ({ history }) => {
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
        <div className='dashboard'>
            Dashboard
            <Weather weatherData={weatherData} />
            {
                console.log(weatherData)
            }
        </div>
    )
}
export default Dashboard;