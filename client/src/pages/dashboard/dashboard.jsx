import React, { useState, useEffect } from 'react';
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

class Dashboard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            latitude: 37.8,
            longitute: -122.27,
            airPollution: 10,
            temp: 80,
            city: 'Oakland'
        }
    }

    componentDidMount() {
        const socketClient = io.connect('http://localhost:5000/');
        if (process.env.NODE_ENV === 'development') {
            socketClient.on('news', (data) => {
                this.setState({ latitude: data.position.lat });
                this.setState({ longitude: data.position.lng });
            })
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({ latitude: position.coords.latitude });
                this.setState({ longitude: position.coords.longitute})
            })
        }
        const airVisual = new AirVisual(this.state.latitude, this.state.longitute);
        console.log(airVisual);
        airVisual.getInfo()
            .then((res) => {
                console.log(res);
                this.setState({ airPollution: res.data.current.pollution.aqius })
                this.setState({ temp: res.data.current.weather.hu });
                this.setState({ city: res.data.city });
            })
            .catch(err => { console.log(err) })
    }

    getClassName = (airPollution) => {
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
    render() {
        return (

            <div className='dashboard' >
                <SideBar />
                <div className='dash-images'>
                    <div className='header'>
                        <h1>Good Day {this.props.name}</h1>
                        <h3>Today's weather is sunny,
                            <br /> a good day to get some vitamin D</h3>
                    </div>
                    <div className='line' />
                    <Card
                        name="weather"
                        heading="Weather">
                        <p>{this.state.temp}° F</p>
                        <p>{this.state.city}</p>
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
                        <p>The air quality is {this.getClassName(this.state.airPollution)}</p>
                        <p
                            className={`${this.getClassName(this.state.airPollution)}`}
                        >{this.state.airPollution}</p>
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
}
export default Dashboard;