const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');


class Weather extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  render() {

    let that = this;

    function renderMessage(){
      if (that.state.isLoading){
        return (
          <h2>Loading data...</h2>
        );
      } else if(that.state.temp && that.state.location){

        return (
          <WeatherMessage temp={that.state.temp} location={that.state.location}/>
        );

      }
    }

    return (

      <div>

        <WeatherForm onNewCity={this.handleSubmit}/>

        {renderMessage()}

      </div>

    );
  }

  handleSubmit(location){

    let that = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location).then(function(temp){

      that.setState({
        location: location,
        temp: temp,
        isLoading: false

      });


    }).catch(function(error){
      alert(error.message);

      that.setState({
        isLoading: false
      });
    });
  };
}

module.exports = Weather;
