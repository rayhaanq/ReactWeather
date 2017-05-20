const React = require('react');
const Nav = require('Nav');

let Main = React.createClass({

  render: function(){

    return (

      <div>

        <Nav/>
        <h1>MainComponent</h1>
        {this.props.children}

      </div>

  );

}

});

module.exports = Main;
