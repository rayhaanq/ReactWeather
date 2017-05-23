const React = require('react');
const Nav = require('Nav');

class Main extends React.Component{

  render(){

    return (

      <div>

        <Nav/>
        <h1>MainComponent</h1>
        {this.props.children}

      </div>

  );

}

}

module.exports = Main;
