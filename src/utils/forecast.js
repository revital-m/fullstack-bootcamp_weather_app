const request = require('request');
require('dotenv').config();

const forecast = (latitude, longitude, callback) => {
    const API_KEY = process.env.FORECAST_API_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${latitude},${longitude}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast