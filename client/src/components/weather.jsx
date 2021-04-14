import react, { useEffect } from 'react';
import './weather.styles.scss';
// get our fontawesome imports
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import plant from '../assets/plant.png'

const Weather = ({ weatherData }) => {
    return (
        <div className='weather-container'>
            <h1>Track your vitamin D intake</h1>
            <h3>0% of 600 IU GOAL </h3>
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

                    <svg>

                        <FontAwesomeIcon icon={faCircleNotch}>
                        </FontAwesomeIcon>
                        <text x="80" y="125">Total Daily
                        </text>
                        <text x="80" y="155">Vitamin D Intake
                        </text>
                    </svg>
                    {/* <img src={plant} alt='plant' className='plant' /> */}
                </div>
            }
        </div>
    )
}

export default Weather;