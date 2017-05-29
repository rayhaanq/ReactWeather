const React = require('react');
import {NavLink, Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, CollapsibleNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const FontAwesome = require('react-fontawesome');

const Navigation = (props) => {
  
  return (

      <div>
        <Navbar>
          
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">
        <FontAwesome name="cloud"/> WeatherApp</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          
          <Navbar.Collapse>
        <Nav className="navbar-right">
          
          <LinkContainer  exact to="/">
            <NavItem eventKey={1}>Get Weather</NavItem>
          </LinkContainer>
          
          <LinkContainer activeClassName='active' to="/about">
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>

          <LinkContainer to="/examples">
            <NavItem eventKey={3}>Examples</NavItem>
          </LinkContainer>
          
        </Nav>
          
          </Navbar.Collapse>
        </Navbar>
      </div>
    
      
    );
  
};

module.exports = Navigation;
