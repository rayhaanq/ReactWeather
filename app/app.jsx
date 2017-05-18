const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('Main');
import { HashRouter, Route } from 'react-router-dom';



ReactDOM.render(

  <HashRouter>

    <Route path="/" component={Main}>

    </Route>
  </HashRouter>,
    document.getElementById('app')

);
