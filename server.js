// Create a node server 
const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();
const app = express();
const weather = require('./routes/api/weather');
const axios = require('axios');
const jsonfile = require('jsonfile');
config = jsonfile.readFileSync(__dirname + '/config/config.json');
const path = require('path');
const users = require('./routes/users');
const { login, createUser } = require('./controllers/users');
const mongoose = require('mongoose');
const auth = require('./middleware/auth');
const db = require('./config/db');

// connect database 
db();
// middlewares 
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('*', cors());




// serve static assets in production 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// Particle connection 
var Particle = require('particle-api-js');
var particle = new Particle();
var token = process.env.PARTICLE_TOKEN;
var deviceId = process.env.PARTICLE_DEVICE_ID;

// Login
particle.login({
    username: process.env.PARTICLE_EMAIL,
    password: process.env.PARTICLE_PASSWORD,

})
particle.getEventStream({
    auth: token,
    deviceId: deviceId,
})
    .then(function (stream) {
        // Stream event arrived
        stream.on('event', function (evt) {
            console.log(evt.name);
            // Look for location-specific event
            if (evt.name.startsWith(`${config.event_name}`)) {
                // Parse out location details
                var parts = evt.data.split(',');
                // Assemble message
                var msg = JSON.stringify({
                    id: evt.name.split('/')[2],
                    published: evt.published_at,
                    position: {
                        // lat: 37.80,
                        // lng: -122.27,
                        lat: parseFloat(parts[0]),
                        lng: parseFloat(parts[1]),
                    }
                });
                console.log(msg);
                // send msg to client 
            }
        })
    })
    .catch(function (err) {
        console.log(err);
    })

var tempMsg = { "position": { "lat": 37.8, "lng": -122.27 } }

var io = require('socket.io')(server,
    { transport: 'websocket' },
    {
        cors: {
            origin: '*',
        }
})

// io.set('transports', ["websocket", "polling"]);

io.on('connection', function (socket) {
    // console.log('New client connected');
    socket.broadcast.emit('news', tempMsg);
});
io.on('disconnect', function () {
    // console.log('disconnected');
    socket.broadcast.emit('disconnected');
});

// Define routes 
app.use('/signup', createUser)
app.use('/login', login)
app.use('/api/weather', weather)
app.use('/users', auth, users)

