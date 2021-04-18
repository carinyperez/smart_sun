import react, { useState, useEffect } from 'react';
import Weather from '../../components/weather/weather';
import axios from 'axios';
import './dashboard.styles.scss';
import Clock from '../../components/clock/clock';
import Card from '../../components/card/card';
import foods from '../../assets/foods.png';
import rays from '../../assets/rays.png';
import vitamin from '../../assets/vitamin-swirl.png';
import water from '../../assets/water.png';
import tips from '../../assets/tips.png';
import SideBar from '../../components/sidebar/sidebar';
import io from 'socket.io-client';

const Dashboard = ({ history }) => {
    // const [weatherData, setWeatherData] = useState(false);
    // const weather = await axios.get(`${history.location.pathname}`);
    // const weather = await axios.get(`${'/oakland'}`);
    // setWeatherData(weather.data);
    // }
    // getWeather();
    // useEffect(() => {
    //     getWeather();
    // }, [])
    // setWeatherData(true) 
    const socketClient = io('http://localhost:5000/');
    console.log(socketClient);
    socketClient.on('msg', (evt) => {
        console.log(socketClient);
        console.log(evt);
        // user lat and lng to call weather api 
    });
    return (
        <div className='dashboard'>
            {/* Dashboard
            <Weather weatherData={weatherData} />
            {
                console.log(weatherData)
            } */}
            <SideBar />
            <div className='dash-images'>
                <div className='line' />
                <Card
                    name="clock"
                    heading="Time for Vitamin D">
                    <Clock className='clock' />
                    <h4>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
                    }</h4>
                    <p>Time to go out</p>
                </Card>
                <Card
                    name="rays"
                    heading="UVB Rays">
                    <img src={rays} alt="temperature gauge" />
                    <h4>The sun is at it's best</h4>
                    <p>Goal: 600UI</p>
                </Card>

                <Card
                    name="water"
                    heading="Water Intake"
                >
                    <img src={water} alt="water-fill" />
                    <h4>Take a bottle of water</h4>
                    <p>50ml</p>
                </Card>
                <Card
                    name="track"
                    heading="Track your Vitamin D">
                    <div class="vitamin-meter"><p>Vitamin D</p><div class="border"><div class="progress" style={{ "width": "50%" }} /></div></div>
                    <img src={vitamin} alt="amount of vitamin D had" />
                </Card>
                <Card
                    name="meal"
                    heading="Today's Meal">
                    <img src={foods} alt="food circles" />
                    <p> Egg Yolk Mushrooms Seafood</p>
                </Card>

                <Card
                    name="tips"
                    heading="Daily Tips">
                    <img src={tips} alt="notifications" />
                </Card>
            </div>
        </div>
    )
}
export default Dashboard;