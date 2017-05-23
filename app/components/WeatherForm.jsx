const React = require('react');

class WeatherForm extends React.Component{

  constructor(props){
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  render(){

    return (

      <form onSubmit={this.onFormSubmit}>

          <input type="text" ref="messageInput" placeholder="Enter city..."></input>
          <button>Get Weather</button>

      </form>


    );
  }

  onFormSubmit(e){
    e.preventDefault();

    let message = this.refs.messageInput.value;
    let updates = {};

    if(message.length > 0){

      updates.message = message;
      this.refs.messageInput.value = "";

    }

    this.props.onNewCity(updates);

  }

}

module.exports = WeatherForm;
