const React = require('react');


const WeatherMessage = ({temp, location}) => {
  return (

      <h2>
        It is {temp}&#8451; in <span className="location">{location}</span>
      </h2>

    );
};

WeatherMessage.defaultProps = {
  temp: "",
  location: ""
};

module.exports = WeatherMessage;
