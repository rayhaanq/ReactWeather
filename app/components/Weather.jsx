const React = require('react');

class Weather extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      message: "test"
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);

  }
  render() {

    return (

      <div>

        <form onSubmit={this.onFormSubmit}>

          <input type="text" ref="messageInput" placeholder="Enter city..."></input>
          <button>Get Weather</button>

        </form>

        <div>
          {this.state.message}
        </div>

      </div>

    );
  }

  onFormSubmit(e){
    this.setState({
      message: this.refs.messageInput.value});
    console.log(this.refs.messageInput.value);
  };
}

module.exports = Weather;
