const React = require('react');

class WeatherForm extends React.Component{


  constructor(props){
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  render(){

    return (

      <div className="text-center">

        <h1 >Get Weather</h1>
        <form onSubmit={this.onFormSubmit}>
  
         <div className="row form-group">
           <div className="col-sm-6 col-sm-offset-3">
            <input className="form-control input-lg" type="text" ref="messageInput" placeholder="Enter city..."></input>

           </div>
           
         </div>
          
          <div className="row">
            <button className="btn btn-primary btn-lg">Get Weather</button>

          </div>
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
