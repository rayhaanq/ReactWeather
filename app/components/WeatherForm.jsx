const React = require('react');

class WeatherForm extends React.Component{


  constructor(props){
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

  }



  render(){

    return (

      <div>
        <form onSubmit={this.onFormSubmit}>

          <input type="text" ref="messageInput" placeholder="Enter city..."></input>
          <button>Get Weather</button>

      </form>

      </div>
      

    );
  }

  onFormSubmit(e){
    e.preventDefault();

    let location = this.refs.messageInput.value;

    let updates = {};

    if(location.length > 0){
      updates.location = location;

      this.refs.messageInput.value = "";

    }

    this.props.onNewCity(location);

  }

}

module.exports = WeatherForm;
