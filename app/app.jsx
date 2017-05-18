const React = require('react');
const ReactDOM = require('react-dom');


let objOne = {
  name: "Rayhaan",
  location: "UK"
};

let objTwo = {
  age: 21,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(


    <h1>Boilerplate app</h1>,
    document.getElementById('app')



);
