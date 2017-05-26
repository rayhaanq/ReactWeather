const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');


class Weather extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      temp: "",
      location: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  render() {

    return (

      <div>

        <WeatherForm onNewCity={this.handleSubmit}/>

        <WeatherMessage temp={this.state.temp} location={this.state.location}/>

      </div>

    );
  }

  handleSubmit(location){

    let that = this;

    OpenWeatherMap.getTemp(location).then(function(temp){

      that.setState({
        location: location,
        temp: temp
      });


    }).catch(function(error){
      alert(error.message);
    });
  };
}

module.exports = Weather;
