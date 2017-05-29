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
    

    let renderMessage = () => {
      if (this.state.isLoading){
        return (
          <h2><i className="fa fa-pulse fa-spinner"></i></h2>
        );
      } else if(this.state.temp && this.state.location){

        return (
          <WeatherMessage temp={this.state.temp} location={this.state.location}/>
        );

      }
    };

    let renderError = (error) => {

      if (this.state.error){
        
        return(
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 alert alert-danger">
              {error}
            </div>
          </div>
        );    
      }
    };

    return (

      <div className="text-center">

        <WeatherForm onNewCity={this.handleSubmit}/>
        {renderError(this.state.error)}
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
        isLoading: false,
        error: ""
      });


    }).catch((error) => {
      

      this.setState({
        isLoading: false,
        error: error.message
      });
    });
  };
}

module.exports = Weather;
