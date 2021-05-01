import react, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.styles.scss';
import Clock from '../../components/clock/clock';
import Card from '../../components/card/card';
import vitaminCircle from '../../assets/circle.png';
import temperature2 from '../../assets/temperature2.png';
import SideBar from '../../components/sidebar/sidebar';
import AirVisual from '../../API/airVisual';
import ParticleClass from '../../particle/particle';


const Dashboard = (props) => {
    const [longitute, setLongitude] = useState('-122.293956');
    const [latitude, setLatitude] = useState('37.8133917');
    const [airPollution, setAirPollution] = useState(10);
    const [temp, setTemp] = useState(80);
    const [city, setCity] = useState('Oakland');

    const particle = new ParticleClass(); 
    useEffect(() => {
        particle.login();
        async function getData() {
            await particle.getEvent().then((res) => {
                if(typeof(res) === 'undefined') {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude); 
                    })
                } 
                else {
                    setLatitude(res.position.lat);
                    setLongitude(res.position.lng);
                }
            });
        }
        getData(); 
        const airVisual = new AirVisual(latitude, longitute);
        airVisual.getInfo()
            .then((res) => {
                setAirPollution(res.data.current.pollution.aqius)
                setTemp(res.data.current.weather.hu);
                setCity(res.data.city);
            })
        .catch(err => { console.log(err) })
    }, []);
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
                    <img src={temperature2} alt="temperature-gauge"></img>
                </Card>
                <Card
                    name="track"
                    heading="SmartSun Tracker">
                    <div class="vitamin-meter">
                        <p>While outside, track the
                         amount of Vitamin D exposure</p>
                        <img src={vitaminCircle} alt="amount of vitamin D had" />
                        <button>Track</button>
                    </div>
                </Card>
                <Card
                    name="air-quality"
                    heading="Air quality">
                    <p>The air quality is
                        <br />
                        {getClassName(airPollution)}</p>
                    <p
                        className={`${getClassName(airPollution)}`}
                    >{airPollution}</p>
                </Card>
                <Card className='clock'
                    name="clock"
                    heading="Time for Vitamin D">

                    {/* <Clock className='clock' /> */}
                    <h4>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
                    }</h4>
                    <div className='clock-footer'>
                        <p>Time spent outdoors: <span>2 hrs</span></p>
                        <p>Vitamin D Level :<span>300 UI</span></p>
                    </div>

                </Card>
            </div>
        </div >
    )
}
export default Dashboard;