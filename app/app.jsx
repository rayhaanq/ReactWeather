const React = require('react');
const ReactDOM = require('react-dom');
import { HashRouter, Route } from 'react-router-dom';
const css = require('./app.scss');

const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');


ReactDOM.render(

  <HashRouter>

    <div>
      <Route path="/" component={Main}/>
      
      <div  className="container text-center">
        <Route exact path="/" component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>

      </div>
      
    </div>


  </HashRouter>,
    document.getElementById('app')

);
