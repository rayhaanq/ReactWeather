const React = require('react');

class WeatherMessage extends React.Component  {

  render(){

    return (

      <div>
        It is {this.props.temp} in {this.props.location}
      </div>

    );
  }
}

WeatherMessage.defaultProps = {
  temp: "",
  location: ""
};

module.exports = WeatherMessage;
