// Particle connection 
var Particle = require('particle-api-js');
// require('dotenv').config();
var particle = new Particle();
var token = process.env.REACT_APP_PARTICLE_TOKEN;
var deviceId = process.env.REACT_APP_PARTICLE_DEVICE_ID;

class ParticleClass {
    constructor() {  
    }
    login () {
        // Login
        return particle.login({
            username: process.env.REACT_APP_PARTICLE_EMAIL,
            password: process.env.REACT_APP_PARTICLE_PASSWORD,
        })
    }
    getEvent(req, res) {
        return particle.getEventStream({
            auth: token,
            deviceId: deviceId
        }).then(function (stream) {
                // Stream event arrived
                stream.on('event', function (evt) {
                    // Look for location-specific event
                    if (evt.name.startsWith(`geo`)) {
                        // Parse out location details
                        var parts = evt.data.split(',');
                        // Assemble message
                        let msg = JSON.stringify({
                            id: evt.name.split('/')[2],
                            published: evt.published_at,
                            position: {
                                lat: parseFloat(parts[0]),
                                lng: parseFloat(parts[1]),
                            }
                        });
                        return msg;
                    }
                })
            })
            .catch(function (err) {
                console.log(err);
        })
    }   
}

export default ParticleClass; 

