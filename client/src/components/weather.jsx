import react, { useEffect } from 'react';
import './weather.styles.scss';
import plant from '../assets/plant.png'

const Weather = ({ weatherData }) => {
    return (
        <div className='weather-container'>
            <h1>Smart Plant</h1>
            {weatherData &&
                <div className='weather'>
                    <div className='weather-data'>
                        <div className='container1'>
                            <p>Location: {weatherData.name},{weatherData.sys.country} </p>
                        </div>
                        <div className='container2'>
                            <p>Temp: {weatherData.main.temp}°C</p>
                        </div>
                        <div className='container3'>
                            <p>Description: {weatherData.weather[0].description}</p>
                        </div>
                    </div>
                    <img src={plant} alt='plant' className='plant' />
                </div>
            }
        </div>
    )
}

export default Weather;