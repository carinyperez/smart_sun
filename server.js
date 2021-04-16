// Create a node server 
const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();
const app = express();
const weather = require('./routes/api/weather');

// middlewares 
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home route')
})

// Particle connection 
var Particle = require('particle-api-js');
var particle = new Particle();
var token = process.env.PARTICLE_TOKEN;

// login 
particle
    .login({
        username: process.env.PARTICLE_EMAIL,
        password: process.env.PARTICLE_PASSWORD,
    })
    .then(
        function (data) {
            console.log('API Login Sucess', data.body.access_token);
        },
        function (err) {
            console.log('Could not log in.', err);
        }
    );

// get particle information 
particle
    .getVariable({
        deviceId: process.env.PARTICLE_DEVICE_ID,
        name: 'temp',
        auth: token
    })
    .then(function (data) {
        console.log('Device variable retrieved successfully:', data);
    }, function (err) {
        console.log('An error occurred while getting attrs:', err);
    });
// signal device 
particle
    .signalDevice({
        deviceId: process.env.PARTICLE_DEVICE_ID,
        signal: false,
        auth: token,
    })
    .then(
        function (data) {
            console.log('The LED is now back to normal:', data);
        },
        function (err) {
            console.log('Error sending a signal to the device:', err);
        }
    );

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


// Define routes 
app.use('/api/weather', weather)
