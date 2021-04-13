const express = require('express');
const router = express.Router();
const config = require('config');
const got = require('got');
const { pipeline } = require('stream');

// @route GET api/weather/location
router.get('/:location', function (req, res) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&appid=${config.get('weatherApiKey')}&units=imperial`;
    // console.log(url);
    const dataStream = got.stream(url);
    pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
});


module.exports = router;