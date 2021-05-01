// Create a node server 
const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();
const app = express();
const weather = require('./routes/api/weather');
const axios = require('axios');
const jsonfile = require('jsonfile');
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


// Define routes 
app.use('/signup', createUser)
app.use('/login', login)
app.use('/api/weather', weather)
app.use('/users', auth, users)

