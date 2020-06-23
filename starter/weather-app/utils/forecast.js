const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url  = 'http://api.weatherstack.com/current?access_key=11aa3fafb4f504c4cb5688193ae1c5c6&query=' + latitude + ',' + longitude
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        }else if (body.error) {
            callback('Unable to find location', undefined)

        }else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out, it feels like ' + body.current.feelslike + ' degrees out. The humidity = ' + body.current.humidity + '%')
        }
    })
}
module.exports = forecast
