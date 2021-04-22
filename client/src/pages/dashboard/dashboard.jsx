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
import AirVisual from '../../API/airVisual';


const Dashboard = (props) => {
    const [longitute, setLongitude] = useState(-122.27);
    const [latitude, setLatitude] = useState(37.8);
    const [airPollution, setAirPollution] = useState(10);
    const [temp, setTemp] = useState(80);
    const [city, setCity] = useState();
    const socketClient = io.connect('http://localhost:5000/');
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            // const socketClient = io.connect('http://localhost:5000/');
            const socketClient = io.connect('http://localhost:5000/', {
                upgrade: false,
                transport: ['websocket']
            })
            console.log(socketClient);
            socketClient.on('news', (data) => {
                if(data) {
                    setLatitude(data.position.lat);
                    setLongitude(data.position.lng);
                }
            })
        } else if (process.env.NODE_ENV === 'production') {
            const socketClient = io.connect('https://smart-sun-app.herokuapp.com/');

            console.log(socketClient);
            socketClient.on('news', (data) => {
                if(data) {
                    console.log(data);
                    setLatitude(data.position.lat);
                    setLongitude(data.position.lng);
                }
            })
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitute);
            })
        }
        const airVisual = new AirVisual(latitude, longitute);
        console.log(airVisual);
        airVisual.getInfo()
            .then((res) => {
                setAirPollution(res.data.current.pollution.aqius)
                console.log(res);
                setTemp(res.data.current.weather.hu);
                setCity(res.data.city);
            })
            .catch(err => { console.log(err) })
    }, [])
    const getClassName = (airPollution) => {
        if (airPollution >= 0 && airPollution <= 50) {
            return 'good'
        } else if (airPollution >= 51 && airPollution <= 100) {
            return 'moderate'
        } else if (airPollution >= 101 && airPollution <= 150) {
            return 'unhealthy'
        } else {
            return 'very-unhealthy'
        }
    }
    return (
        <div className='dashboard'>
            <SideBar />
            <div className='dash-images'>
                <div className='header'>
                    <h1>Good Day {props.name}</h1>
                    <h3>Today's weather is sunny,
                    <br /> a good day to get some vitamin D</h3>
                </div>
                <div className='line' />
                <Card
                    name="weather"
                    heading="Weather">
                    <p>{temp}° F</p>
                    <p>{city}</p>
                    {/* <img src={rays} alt="temperature gauge" /> */}
                </Card>
                <Card
                    name="track"
                    heading="SmartSun Tracker">
                    <div class="vitamin-meter">
                        {/* <div class="border">
                            <div class="progress" style={{ "width": "50%" }} />
                        </div> */}
                        <p>While outside, track the
                         amount of Vitamin D exposure</p>
                        <img src={vitamin} alt="amount of vitamin D had" />
                    </div>
                </Card>
                <Card
                    name="air-quality"
                    heading="Air quality">
                    {/* <img src={tips} alt="air quality" /> */}
                    <p>The air quality is {getClassName(airPollution)}</p>
                    <p
                        className={`${getClassName(airPollution)}`}
                    >{airPollution}</p>
                </Card>
                <Card className='clock'
                    name="clock"
                    heading="Time for Vitamin D">

                    <Clock className='clock' />
                    <h4>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
                    }</h4>
                    <div className='clock-footer'>
                        <p>Time spent outdoors :<span>2 hrs</span></p>
                        <p>Vitamin D Level :<span>300 UI</span></p>
                    </div>

                </Card>
                {/* <Card
                    name="water"
                    heading="Water Intake"
                >
                    <img src={water} alt="water-fill" />
                    <h4>Take a bottle of water</h4>
                    <p>50ml</p>
                </Card> */}
                {/* <Card
                    name="meal"
                    heading="Today's Meal">
                    <img src={foods} alt="food circles" />
                    <p> Egg Yolk Mushrooms Seafood</p>
                </Card> */}
                {/* <Card
                    name="tips"
                    heading="Daily Tips">
                    <img src={tips} alt="notifications" />
                </Card> */}
            </div>
        </div >
    )
}
export default Dashboard;