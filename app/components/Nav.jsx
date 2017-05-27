const React = require('react');
import {Link} from 'react-router-dom';

const Nav = (props) => {
  
  return (

      <div>
        <h1>Nav Component</h1>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>

      </div>
    );
  
};

module.exports = Nav;
