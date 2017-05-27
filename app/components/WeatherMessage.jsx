const React = require('react');


const WeatherMessage = ({temp, location}) => {
  return (

      <div>
        It is {temp} in {location}
      </div>

    );
};

WeatherMessage.defaultProps = {
  temp: "",
  location: ""
};

module.exports = WeatherMessage;
