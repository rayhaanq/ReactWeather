const React = require('react');
import {Link} from 'react-router-dom';

let Nav = React.createClass({

  render: function() {

    return (

      <div>

        <h1>Nav Component</h1>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>

      </div>



    );
  }
});

module.exports = Nav;
