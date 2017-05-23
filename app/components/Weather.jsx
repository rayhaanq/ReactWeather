const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');


class Weather extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  render() {

    return (

      <div>

        <WeatherForm onNewCity={this.handleSubmit}/>

        <WeatherMessage message={this.state.message}/>

      </div>

    );
  }

  handleSubmit(updates){
    this.setState(updates);
  };
}

module.exports = Weather;
