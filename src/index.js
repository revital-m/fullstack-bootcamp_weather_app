const express = require('express');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

const MY_PORT = process.env.PORT || 5000;

const app = express();

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})


app.listen(MY_PORT, () => {
    console.log(`Server is up on port ${MY_PORT}.`)
})