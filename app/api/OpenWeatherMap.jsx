const axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=80ea0e9a6325908bf3ad5e6ec9aebe54&units=metric';

module.exports = {
  getTemp: (location) => {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((response) => {

      if (response.data.name.toLowerCase() === location.toLowerCase()){

        return response.data.main.temp;

      } else {

        throw new Error("Invalid city name");
      }

    }).catch((error) => {
      throw new Error(error.message);
    });
  }
};
