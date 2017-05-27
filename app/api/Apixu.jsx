const axios = require('axios');
//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=80ea0e9a6325908bf3ad5e6ec9aebe54&units=metric';
const APIXU_URL = 'https://api.apixu.com/v1/current.json?key=e4003d9eaba44d008d2165540172705&';


module.exports = {
  getTemp: (location) => {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${APIXU_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((response) => {

      if (response.data.location.name.toLowerCase() === location.toLowerCase()){

        return response.data.current.temp_c;

      } else {

        throw new Error("Invalid city name");
      }
      
      console.log(response);

    }).catch((error) => {
      throw new Error(error.message);
    });
  }
};
