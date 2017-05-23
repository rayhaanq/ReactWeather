const React = require('react');

class WeatherMessage extends React.Component  {

  render(){

    return (

      <div>
        {this.props.message}
      </div>

    );
  }
}

WeatherMessage.defaultProps = {
  message: ""
};

module.exports = WeatherMessage;
