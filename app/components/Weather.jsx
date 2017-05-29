const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const Apixu = require('Apixu');


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

      <div className="text-center">

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

    Apixu.getTemp(location).then((temp) => {

      this.setState({
        location: location,
        temp: temp,
        isLoading: false

      });


    }).catch((error) => {
      alert(error.message);

      this.setState({
        isLoading: false
      });
    });
  };
}

module.exports = Weather;
