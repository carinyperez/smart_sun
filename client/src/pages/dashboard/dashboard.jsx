import react, { useState, useEffect } from 'react';
import Weather from '../../components/weather/weather';
import axios from 'axios';
import './dashboard.styles.scss';
import Clock from '../../components/clock/clock';



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
            {/* Dashboard
            <Weather weatherData={weatherData} />
            {
                console.log(weatherData)
            } */}
            <div className='dash-text'>
                <h1>Smart Sun</h1>
                <p>Dashboard</p>
                <p>Skin Analyzer</p>
                <p>Food</p>
                <p>Exercise Routine</p>
            </div>
            <div className='dash-images'>
                <div className='line'>
                </div>
                <div className="dash-time">
                    <h3>Time for vitamin D</h3>
                    <p>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
                    }</p>
                </div>
                <div>
                    <h3>UBV Rays</h3>
                </div>
                <div>
                    <h3>Water Intake</h3>
                </div>
                <div>
                    <h3>Time for vitamin D</h3>
                </div>
                <div>
                    <h3>Today's Meal</h3>
                </div>
                <div>
                    <h3>Daily Tips</h3>
                </div>
            </div>
            {/* <Clock className='clock' /> */}
        </div>
    )
}
export default Dashboard;