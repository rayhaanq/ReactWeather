const React = require('react');
const Nav = require('Nav');


const Main = (props) => {
  return (

      <div>

        <Nav/>
        <h1>MainComponent</h1>
        {props.children}

      </div>

  );
};

module.exports = Main;
