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



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


// Define routes 
app.use('/api/weather', weather)
