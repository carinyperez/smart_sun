// Create a node server 
const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();
const app = express();
const weather = require('./routes/api/weather');

app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home route')
})

// app.get('/weather', async (req, res) => {
//     try {
//         // console.log(req, res);
//         // const weather = await `https://api.openweathermap.org/data/2.5/weather?q=oakland&appid=46728db19194c163f1a4da6a95f18554&units=imperial`;
//         res.send('Weather route');
//         // res.json
//     } catch (error) {
//         console.error(error);
//     }
// })

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


// Define routes 
app.use('/api/weather', weather)

//https://api.openweathermap.org/data/2.5/weather?q=oakland&appid=46728db19194c163f1a4da6a95f18554&units=imperial